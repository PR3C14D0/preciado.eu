import { Schema, model } from 'mongoose';

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        default: "/img/lpbg.svg"
    }
})

export default model('Post', PostSchema);