import express from 'express';
import { depositCallback } from '../controllers/callbackController.js';

const router = express.Router();

router.route('/deposit').post(depositCallback);

export default router;
