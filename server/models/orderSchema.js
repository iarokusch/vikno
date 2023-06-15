import { Schema, model } from 'mongoose';
const orderSchema = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: 'user', required: true },
        total: { type: Number, required: true },
        item: [{ type: Schema.Types.ObjectId, ref: 'item' }],
        /* createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date, default:Date.now} */
    },
    { timestamps: true }
);
const orderCollection = model('order', orderSchema);
export default orderCollection;
