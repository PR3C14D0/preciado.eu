import mongoose, { Types } from "mongoose";

export interface IPost extends mongoose.Document{
    title: string;
    description: string;
    content: string;
    imgUrl?: string;
    save();
}