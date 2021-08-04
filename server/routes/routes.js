import express from 'express';
import {userSignup} from '../controller/user-controller.js';

const router= express.Router();

router.post('/signup',userSignup);

// router.get('/login')
export default router;