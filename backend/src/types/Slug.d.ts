import mongoose from "mongoose";

export interface ISlug extends mongoose.Document {
    slug: string;
    objId?: string;
}