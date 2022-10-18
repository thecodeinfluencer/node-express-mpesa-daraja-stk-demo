import express from 'express';
import { deposit } from '../controllers/depositController.js';

const router = express.Router();

router.route('/deposit').post(deposit);

export default router;
