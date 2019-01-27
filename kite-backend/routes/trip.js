import { Router } from 'express';
import tripController from '../controllers/tripController';

const router = Router();

router.get('/find', tripController.find);

router.get('/findVisible', tripController.findVisible);

router.post('/create', tripController.create);

export default router;
