import artistCollection from '../models/artistSchema.js';
import userCollection from '../models/userSchema.js';
import imgCollection from '../models/imgSchema.js';
export const addNewArtist = async (req, res) => {
    try {
        console.log(req.files);
        const newArtist = new artistCollection(req.body);

        if (req.files) {
            const image = await imgCollection.create({
                filename: Date.now() + '_' + req.files.artist_profile_img.name,
                data: req.files.artist_profile_img.data,
            });
            console.log(image);
            newArtist.profileImage = `https://vikno.onrender.com/images/${image.filename}`;
        }

        await newArtist.save();
        const updateUser = await userCollection
            .findByIdAndUpdate(
                req.user._id,
                { userArtist: newArtist._id, isArtist: true },
                { new: true }
            )
            .populate({
                path: 'userArtist',
                populate: { path: 'items', model: 'item' },
            });
        console.log('adding new artist', newArtist);
        res.json({
            msg: 'new artist add to list',
            success: true,
            data: updateUser,
        });
        // }
    } catch (error) {
        res.json(error);
    }
};
export const getAllArtists = async (req, res) => {
    try {
        const allArtists = await artistCollection.find().populate('items');
        res.json({ success: true, data: allArtists });
    } catch (error) {
        res.json(error);
    }
};
export const getArtistById = async (req, res) => {
    try {
        const { id } = req.params;
        const singleArtist = await artistCollection
            .findById(id)
            .populate('items');
        res.json({ success: true, data: singleArtist });
    } catch (error) {
        res.json(error);
    }
};
export const getArtistByUserId = async (req, res) => {
    try {
        const { id } = req.params;
        const oneArtist = await artistCollection.find({ userId: id });
        console.log(oneArtist);
        res.json({ success: true, data: oneArtist });
    } catch (error) {
        res.json(error);
    }
};
export const changeArtistData = async (req, res) => {
    try {
        const { id } = req.params;
        const updateArtist = await artistCollection.findByIdAndUpdate(id);
        res.json({ success: true, data: updateArtist });
    } catch (error) {
        res.json(error);
    }
};
export const isArtistUpdate = async (req, res) => {
    try {
        const { id } = req.params;
        const updateArtist = await artistCollection.findOneAndUpdate(
            { userId: id },
            { isArtist: true },
            { new: true }
        );
        res.json({ success: true, data: updateArtist });
    } catch (error) {
        res.json(error);
    }
};
export const delArtistById = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteArtist = await artistCollection.findByIdAndRemove(id);
        res.json({ success: true, data: deleteArtist });
    } catch (error) {
        res.json(error);
    }
};
