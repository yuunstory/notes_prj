import express, { Router } from 'express';

const router: Router = express.Router();

// 회원가입
router.post('/users', async (req, res) => {
  res.json('회원가입');
});

// 로그인
router.post('/login', async (req, res) => {
  res.json('로그인');
});

// 로그아웃
router.post('/logout', async (req, res) => {
  res.json('로그아웃');
});

// 사용자 자신 정보 조회
router.get('/users/me', async (req, res) => {
  res.json('사용자 정보 조회');
});

export default router;
