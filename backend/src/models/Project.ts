import { Schema, model } from 'mongoose';

const ProjectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ghLink: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        default: "https://p4.wallpaperbetter.com/wallpaper/458/93/267/lowpoly-abstract-4k-wallpaper-preview.jpg"
    }
})

export default model('Project', ProjectSchema);