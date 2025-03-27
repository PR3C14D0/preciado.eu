export interface IProject {
    title: string;
    description: string;
    ghLink: string;
    imgUrl?: string;
    save();
}