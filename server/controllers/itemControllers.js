import itemCollections from '../models/itemSchema.js';
import artistCollection from '../models/artistSchema.js';
import imgCollection from '../models/imgSchema.js';
import userCollection from '../models/userSchema.js';
import { stripe } from '../server.js';
export const createPaymentSession = async (req, res) => {
    try {
        console.log(req.body);
        const data = [];
        for (const id of req.body) {
            data.push(await itemCollections.findById(id));
        }

        const line_items = data.map((product) => {
            return {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: product.title,
                        images: product.img,
                        description: product.description,
                    },
                    unit_amount: +product.price.split(`$`)[0] * 100,
                },
                quantity: 1,
            };
        });
        const session = await stripe.checkout.sessions.create({
            line_items,
            mode: 'payment',
            success_url: `http://localhost:5173/cart?success=true`,
            cancel_url: `http://localhost:5173/cart?success=false`,
        });

        res.json({ success: true, url: session.url });
    } catch (error) {
        res.json(error);
    }
};
export const getAllItems = async (req, res) => {
    try {
        const allItems = await itemCollections.find();
        res.json({ success: true, data: allItems });
    } catch (error) {
        res.json(error);
    }
};
export const getOneItems = async (req, res) => {
    try {
        const id = req.params.id;
        const item = await itemCollections.findById(id);
        res.json({ success: true, data: item });
    } catch (error) {
        res.json(error);
        console.log('get one item', error.message);
    }
};
export const addNewItem = async (req, res) => {
    try {
        const newItem = new itemCollections({
            ...req.body,

            // img: [req.files.img.data],
        });
        console.log(req.files.item_img);
        if (Array.isArray(req.files.item_img)) {
            for (const file of req.files.item_img) {
                const image = await imgCollection.create({
                    filename: Date.now() + '_' + file.name,
                    data: file.data,
                });

                const img = `http://localhost:4000/images/${image.filename}`;
                newItem.img.push(img);
            }
        } else if (req.files.item_img) {
            const image = await imgCollection.create({
                filename: Date.now() + '_' + req.files.item_img.name,
                data: req.files.item_img.data,
            });

            const img = `http://localhost:4000/images/${image.filename}`;
            newItem.img.push(img);
        }
        // artistCollection.insertOne({ $push: { items: newItem } });
        await newItem.save();
        const artist = await artistCollection.findByIdAndUpdate(
            req.body.artistId,

            { $push: { items: newItem._id } }
        );
        const user = await userCollection.findById(req.user._id).populate({
            path: 'userArtist',
            populate: { path: 'items', model: 'item' },
        });

        res.json({ success: true, data: user });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, msg: 'fields with star are mandatory' });
        // alert({ msg: error });
    }
};
export const upDateItem = async (req, res) => {
    const { id } = req.params;
    try {
        const updateItem = await itemCollections.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );
    } catch (error) {
        res.json(error);
    }
};
export const getAllArtistItem = async (req, res) => {
    const { id } = req.params;
    try {
        const allArtistItems = await itemCollections.find({ artistId: id });
        res.json({ msg: 'success', data: allArtistItems });
    } catch (error) {
        res.json(error);
    }
};
export const delItemById = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteItem = await itemCollections.findByIdAndDelete(id);
        res.json({ success: true, data: deleteItem });
    } catch (error) {
        res.json(error);
    }
};
