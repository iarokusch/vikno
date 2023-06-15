import { Schema, model } from 'mongoose';
const artistSchema = new Schema(
    {
        workingName: { type: String, required: true },
        title: { type: String, required: true },
        skills: { type: String, required: true },
        medium: { type: String, required: true },
        projectRoles: { type: String, required: true },
        profileImage: {
            type: String,
            default: function () {
                return `https://robohash.org/${this.title}`;
            },
        },
        items: {
            type: [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'item',
                    // required: true,
                },
            ],

            // validate: [(value) => value === '', 'not workinkg'],
        },

        //item schema
    },
    { versionKey: false }
);
const artistCollection = model('artist', artistSchema);
export default artistCollection;
