import Post from "../models/Post";
import Slug from "../models/Slug";
import { IPost } from "../types/Post";

const CheckCreationBody = async (req: any, res: any, next: any) => {
    const { title, description, content }: {title: string, description: string, content: string} = req.body;
    if(!title || !description || !content) return res.status(400).json({message: 'Bad request', code: 400});

    if(title.length < 5 || content.length < 120) return res.status(411).json({message: 'Length required', code: 411});

    return next();
}

/* 
    Hey there! You're watching this? Check this out: 
        https://open.spotify.com/intl-es/track/7K6IsPjcdZcvGkes0zmdzC?si=cfb1d8c298b34c47 
*/
const ResolveSlugId = async (req: any, res: any, next: any) => {
    const { id } = req.params;

    if(!await Slug.exists({slug: id})) return res.status(404).json({message: 'Not Found', code: 404});

    const objId = (await Slug.findOne({slug: id}))?.objId;

    res.locals.objId = objId;
    next();
}

const CheckRepeatedPost = async (req: any, res: any, next: any) => {
    const { title }: { title: string } = req.body;
    if(await Post.exists({title})) return res.status(409).json({message: 'Conflict', code: 409});

    return next();
}

const CheckPostExists = async (req: any, res: any, next: any) => {
    const { objId } = res.locals;
    
    try {
        const post: IPost | null = await Post.findById(objId);
        if(post == null) return res.status(404).json({message: 'Not found', code: 404});

        return next();
    } catch(error) {
        return res.status(404).json({message: 'Not found', code: 404});
    }

}

export {
    CheckCreationBody,
    CheckRepeatedPost,
    CheckPostExists,
    ResolveSlugId
}