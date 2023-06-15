import orderCollection from '../models/orderSchema.js';
import itemCollection from '../models/itemSchema.js';
import { stripe } from '../server.js';
export const getAllOrders = async (req, res) => {
    //request handle // controller
    try {
        //populate select or deselect (use - sign) properties by passing second argument in the populate method.
        //Projection cannot have a mix of inclusion and exclusion .populate("userId","lastName email -password -firstName")
        const orders = await orderCollection
            .find()
            .populate('userId')
            .populate('item');
        res.json({ success: true, data: orders });
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
};
export const addNewOrder = async (req, res) => {
    try {
        const order = new orderCollection(req.body);
        await order.save();
        res.json({ success: true, data: order });
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
};
export const updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const upOrder = await orderCollection.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json({ success: true, data: upOrder });
    } catch (error) {
        res.json({ success: false, message: err.message });
    }
};
export const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const delOrder = await orderCollection.findByIdAndRemove(id);
        res.json({ success: true, data: delOrder });
    } catch (error) {
        res.json({ success: false, message: err.message });
    }
};
export const openStripeChekoutPage = async (req, res) => {
    try {
        const data = [];
        for (const id of req.body.item) {
            data.push(await itemCollection.findById(id));
        }
        const line_items = data.map((prod) => {
            return {
                // stripe prod details in session
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: prod.title,
                        images: [prod.img],
                        description: prod.description,
                    },
                    unit_amount: prod.price * 100,
                },
                quantity: 1,
            };
        });
        const session = await stripe.checkout.sessions.create({
            line_items,
            mode: 'payment',
            success_url: 'http://localhost:3000/card?success=true',
            cancel_url: 'http://localhost:3000/card?succsess=false',
        });
        res.json({ succsess: true, url: session.url });
    } catch (error) {
        res.json({ success: false, message: err.message });
    }
};
