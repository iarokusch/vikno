import { Schema, model } from 'mongoose';
const imgSchema = new Schema(
    {
        filename: { type: String },
        data: { type: Buffer },
    },
    { timestamps: true }
);
const imgCollection = model('img', imgSchema);
export default imgCollection;
