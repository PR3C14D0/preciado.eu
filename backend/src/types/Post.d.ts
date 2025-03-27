export interface IPost {
    title: string;
    description: string;
    content: string;
    imgUrl?: string;
    save();
}