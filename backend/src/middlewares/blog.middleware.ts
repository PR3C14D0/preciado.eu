import Post from "../models/Post";
import { IPost } from "../types/Post";

const CheckCreationBody = async (req: any, res: any, next: any) => {
    const { title, description, content }: {title: string, description: string, content: string} = req.body;
    if(!title || !description || !content) return res.status(400).json({message: 'Bad request', code: 400});

    if(title.length < 5 || content.length < 120) return res.status(411).json({message: 'Length required', code: 411});

    return next();
}

const CheckRepeatedPost = async (req: any, res: any, next: any) => {
    const { title }: { title: string } = req.body;
    if(await Post.exists({title})) return res.status(409).json({message: 'Conflict', code: 409});

    return next();
}

const CheckPostExists = async (req: any, res: any, next: any) => {
    const { id } = req.params;
    
    try {
        const post: IPost | null = await Post.findById(id);
        if(post == null) return res.status(404).json({message: 'Not found', code: 404});

        return next();
    } catch(error) {
        return res.status(404).json({message: 'Not found', code: 404});
    }

}

export {
    CheckCreationBody,
    CheckRepeatedPost,
    CheckPostExists
}