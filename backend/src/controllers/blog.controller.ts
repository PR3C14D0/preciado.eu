import Post from "../models/Post";
import { IPost } from '../types/Post';

const CreatePost = async (title: string, description: string, content: string, imgUrl?: string) => {
    const newPost: IPost = new Post();
    newPost.title = title;
    newPost.content = content;
    newPost.description = description;
    if(imgUrl) newPost.imgUrl = imgUrl;
    
    await newPost.save();
    return;
}

const GetPostById = async (id: string) => {
    const post: IPost | null = await Post.findById(id);
    
    return post;
}

const GetPosts = async () => {
    const blogPosts = await Post.find();
    const posts = blogPosts.map((post: {content?: string}) => {
        delete post.content;
        return post;
    })
    return posts;
}

export {
    CreatePost,
    GetPosts,
    GetPostById
}