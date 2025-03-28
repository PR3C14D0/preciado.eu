import { Router } from 'express';
const router = Router();

import { VerifyJWT } from '../middlewares/auth.middleware';
import { CreatePost, GetPosts, GetPostById } from '../controllers/blog.controller';
import { CheckCreationBody, CheckRepeatedPost, CheckPostExists, ResolveSlugId } from '../middlewares/blog.middleware';

import { IPost } from '../types/Post';

router.route('/')
.get(async (req: any, res: any) => {
    const blogPosts = await GetPosts();
    return res.status(200).json({message: 'OK', code: 200, posts: blogPosts});
})

router.route('/:id')
.get([ResolveSlugId, CheckPostExists], async (req: any, res: any) => {
    const { objId } = res.locals;

    const post: IPost | null = await GetPostById(objId);
    if(post)
        return res.status(200).json({message: 'OK', code: 200, post});
    else
        return res.status(404).json({message: 'Not found', code: 404});
});

router.route('/post')
.post([VerifyJWT, CheckCreationBody, CheckRepeatedPost], async (req: any, res: any) => {
    const { title, description, content } = req.body;
    let imgUrl: string | undefined = undefined;

    if(req.body.imgUrl) imgUrl = req.body.imgUrl;

    await CreatePost(title, description, content, imgUrl);
    return res.status(200).json({message: 'OK', code: 200});
})

export default router;