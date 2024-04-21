import express from 'express';
import { depositCallback } from '../controllers/callbackController.js';

const router = express.Router();

router.route('/callback').post(depositCallback);

export default router;
