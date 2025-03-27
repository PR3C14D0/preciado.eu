import Project from "../models/Project";

const CheckProjectBody = async (req: any, res: any, next: any) => {
    const { title, description, ghLink }: { title: string, description: string, ghLink: string } = req.body;
    if(!title || !description || !ghLink) return res.status(400).json({message: 'Bad request', code: 400});

    if(title.length < 5 || description.length < 8) return res.status(411).json({message: 'Length required', code: 411});
    return next();
}

const CheckRepeatedProject = async (req: any, res: any, next: any) => {
    const { title } = req.body;
    if(await Project.exists({title})) return res.status(409).json({message: 'Conflict', code: 409});
    return next();
}

export {
    CheckProjectBody,
    CheckRepeatedProject
}