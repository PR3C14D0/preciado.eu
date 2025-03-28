import Post from "../models/Post";
import Slug from "../models/Slug";
import { IPost } from '../types/Post';
import { ISlug } from "../types/Slug";
import slugify from 'slugify';

const CreatePost = async (title: string, description: string, content: string, imgUrl?: string) => {
    const newPost: IPost = new Post();
    newPost.title = title;
    newPost.content = content;
    newPost.description = description;
    if(imgUrl) newPost.imgUrl = imgUrl;
    
    await newPost.save();

    const newSlug: ISlug = new Slug();
    newSlug.slug = slugify(title, '-').toLowerCase();
    newSlug.objId = newPost._id.toString();
    await newSlug.save();

    return;
}

const GetPostById = async (id: string) => {
    const post: IPost | null = await Post.findById(id);
    
    return post;
}

const GetPosts = async () => {
    const blogPosts = await Post.find();
    const slugs = await Slug.find();
    const posts = blogPosts.map((post: {title?: string, description?: string, imgUrl: string, _id?: any}) => {
        const postSlug = slugs.find(slug => slug.objId == post._id);
        
        const newPost = {
            title: post.title,
            imgUrl: post.imgUrl,
            description: post.description,
            _id: postSlug?.slug
        }
        return newPost;
    })
    return posts;
}

export {
    CreatePost,
    GetPosts,
    GetPostById
}