import express from 'express';
import nodemailer from 'nodemailer';
import Stripe from 'stripe';

import fileUpload from 'express-fileupload';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import itemRoute from './routes/itemRoute.js';
import userRoute from './routes/userRoute.js';
import artistRoute from './routes/artistRoute.js';
import orderRoute from './routes/orderRoute.js';
import stream from 'stream';
import imgCollection from './models/imgSchema.js';
// import Multer from 'multer';
// import cloudinary from 'cloudinary';
dotenv.config();
export const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const app = express();
const PORT = process.env.PORT || 4000;

app.use(fileUpload());
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173', exposedHeaders: ['token'] })); //need to know
app.use(express.urlencoded());

app.use(express.static('public/dist'));

app.use('/users', userRoute);
app.use('/items', itemRoute);
app.use('/artists', artistRoute);
app.use('/orders', orderRoute);
app.get('/images/:filename', async (req, res, next) => {
    try {
        const image = await imgCollection.findOne({
            filename: req.params.filename,
        });
        const readStream = stream.Readable.from(image.data);
        readStream.pipe(res);
    } catch (error) {}
});
app.post('/send-email', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Create a nodemailer transporter with your email service provider configuration
    const transporter = nodemailer.createTransport({
        service: 'gmail.com',
        auth: {
            user: 'ilikayaroslav@gmail.com',
            pass: 'uxrbgfxydxxmvejx',
        },
    });

    // Email options
    const mailOptions = {
        from: 'ilikayaroslav@gmail.com',
        to: email,
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Error sending email' });
        } else {
            console.log('Email sent:', info.response);
            res.status(200).json({ message: 'Email sent successfully' });
        }
    });
});
// app.post('/upload', upload.single('my_file'), async (req, res) => {
//     try {
//         const b64 = Buffer.from(req.file.buffer).toString('base64');
//         let dataURI = 'data:' + req.file.mimetype + ';base64,' + b64;
//         const cldRes = await handleUpload(dataURI);
//         res.json(cldRes);
//     } catch (error) {
//         console.log(error);
//         res.send({
//             message: error.message,
//         });
//     }
// });

mongoose
    .connect(process.env.URI)
    .then(() => console.log('connection to DB'))
    .catch((err) => console.log(err.message)); //why arrow function?
app.listen(PORT, () => {
    console.log('server is running on port ', PORT);
});
