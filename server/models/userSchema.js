import { Schema, model } from 'mongoose';
const userSchema = new Schema(
    {
        isArtist: { type: Boolean, required: true, default: false },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        userArtist: { type: Schema.Types.ObjectId, ref: 'artist' },
        role: {
            type: String,
            default: 'user',
            enum: ['user', 'admin'],
        },
        profileImage: {
            type: String,
            default: function () {
                return `https://robohash.org/${this.lastName}`;
            },
        },
    },
    { versionKey: false }
);
const userCollection = model('user', userSchema);
export default userCollection;
