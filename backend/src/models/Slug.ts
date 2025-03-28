import { Schema, model } from 'mongoose';

const SlugSchema = new Schema({
    slug: {
        type: String,
        required: true
    },
    objId: {
        type: Schema.Types.ObjectId,
        required: true
    }
});

export default model('Slug', SlugSchema);