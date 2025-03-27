import { Router } from 'express';
const router = Router();

import { CreateProject, GetProjects } from '../controllers/portfolio.controller';
import { VerifyJWT } from '../middlewares/auth.middleware';
import { CheckProjectBody, CheckRepeatedProject } from '../middlewares/portfolio.middleware';

router.route('/')
.get(async (req: any, res: any) => {
    const projects = await GetProjects();
    return res.status(200).json({message: 'OK', code: 200, projects});
})

router.route('/post')
.post([VerifyJWT, CheckProjectBody, CheckRepeatedProject], async (req: any, res: any) => {
    const { title, description, ghLink } = req.body;
    let imgUrl: string | undefined = undefined;
    if(req.body.imgUrl)
        imgUrl = req.body.imgUrl;
    
    await CreateProject(title, description, ghLink, imgUrl);

    return res.status(200).json({message: 'OK', code: 200});
})


export default router;