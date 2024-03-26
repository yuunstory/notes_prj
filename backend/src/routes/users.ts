import { PASSWORD } from './../settings';
import express, { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from './../settings';
import User from '../models/user';

const router: Router = express.Router();

// 회원가입
router.post('/users', async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await User.join({ email, password: hashedPassword });
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
  }
  res.status(StatusCodes.CREATED).json({
    message: '회원가입',
  });
});

// 로그인
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email);

    if (!user) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: '존재하지 않는 회원' });
    }

    const match = await bcrypt.compare(password, user.password);

    if (match) {
      const accessToken = jwt.sign(
        {
          email: user.email,
        },
        JWT_SECRET!,
        {
          expiresIn: '14d',
        }
      );

      res.cookie('access_token', accessToken, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 14,
      });

      return res.status(StatusCodes.NO_CONTENT);
    } else {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: '이메일 또는 비밀번호 틀렸음' });
    }
  } catch (error) {
    console.error(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
  }
});

// 로그아웃 (프론트 개발시 토큰을 무효화 시키거나 삭제시키는 방법으로 로그아웃 진행)
router.post('/logout', async (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 14,
  });

  res.status(StatusCodes.OK).json('로그아웃 완료');
});

// 사용자 자신 정보 조회
router.get('/users/me', async (req, res) => {
  res.json('사용자 정보 조회');
});

export default router;
