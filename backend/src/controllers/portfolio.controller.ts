import Project from "../models/Project";
import { IProject } from '../types/Project'

const CreateProject = async (title: string, description: string, ghLink: string, imgUrl?: string) => {
    const newProject: IProject = new Project();
    newProject.title = title;
    newProject.description = description;
    newProject.ghLink = ghLink;

    if(imgUrl)
        newProject.imgUrl = imgUrl;

    await newProject.save();
    return;
}

const GetProjects = async () => {
    const projects = await Project.find();
    return projects;
}

export {
    CreateProject,
    GetProjects
}