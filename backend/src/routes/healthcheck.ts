import express, { Router } from 'express';

const router: Router = express.Router();

// docker 헬스 체크를 위한 204 응답
router.get('/', () => {});

export default router;
