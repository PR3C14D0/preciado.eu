import { Router } from 'express';

import auth from './auth.router';
import blog from './blog.router';
import portfolio from './portfolio.router'

const router = Router();

router.use('/auth', auth);
router.use('/blog', blog);
router.use('/portfolio', portfolio);

export default router;