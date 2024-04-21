import express from 'express';
import { deposit } from '../controllers/depositController.js';

const router = express.Router();

router.route('/stk').post(deposit);

export default router;
