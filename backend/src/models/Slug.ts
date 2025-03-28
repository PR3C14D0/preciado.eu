import { Schema, model, Types } from 'mongoose';

const SlugSchema = new Schema({
    slug: {
        type: String,
        required: true
    },
    objId: {
        type: String,
        required: true
    }
});

export default model('Slug', SlugSchema);