import express, { Router } from 'express';

const router: Router = express.Router();

// 노트 목록 조회
router.get('/', async (req, res) => {
  res.json('노트 목록 조회');
});

// 노트 상세 조회
router.get('/:id', async (req, res) => {
  res.json('노트 상세 조회');
});

// 주어진 title, content를 사용해 노트 생성
router.post('/', async (req, res) => {
  res.json('노트 생성');
});

// 주어진 title, content를 사용해 노트 업데이트
router.put('/:id', async (req, res) => {
  res.json('노트 업데이트');
});

// 노트 삭제
router.delete('/:id', async (req, res) => {
  res.json('노트 삭제');
});

export default router;
