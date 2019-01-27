import { Router } from 'express';

import trip from './trip';

const router = Router();

router.get('/test', (req, res) => {
  res.json({ message: 'this is the backend' });
});

router.use('/trip', trip);

export default router;
