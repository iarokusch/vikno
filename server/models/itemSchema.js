import { Schema, model } from 'mongoose';
const itemSchema = new Schema(
    {
        title: { type: String, required: true },
        media: { type: String },
        size: { type: String },
        price: { type: String },
        description: { type: String, required: true, uniue: true },
        userId: { type: Schema.Types.ObjectId, ref: 'user' },
        artistId: { type: Schema.Types.ObjectId, ref: 'artist' },
        img: [{ type: String, required: true }],
    },
    { versionKey: false }
);
const itemCollections = model('item', itemSchema);
export default itemCollections;
