import userCollection from '../models/userSchema.js';
import jwt from 'jsonwebtoken';
import bcrypt, { hash } from 'bcrypt';
import imgCollection from '../models/imgSchema.js';
export const uploadProfileImg = async (req, res, next) => {
    try {
        const user = await userCollection.findById(req.user._id).populate({
            path: 'userArtist',
            populate: { path: 'items', model: 'item' },
        });
        console.log(user);
        const img = new imgCollection({
            filename: Date.now() + '_' + req.files.profileImg.name,
            data: req.files.profileImg.data,
        });
        await img.save();
        user.profileImage = `http://localhost:4000/images/${img.filename}`;
        await user.save();
        res.json({
            success: true,
            data: user,
        });
    } catch (error) {
        console.log(error.message);
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await userCollection.find();
        res.json({ success: true, data: allUsers });
    } catch (error) {
        res.json(error);
    }
};
export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const singleUser = await userCollection.findById(id);
        if (singleUser) {
            res.json({ success: true, data: singleUser });
        } else {
            res.json({ success: false, message: 'please provide id' });
        }
    } catch (error) {
        res.json(error);
    }
};
export const changeUserData = async (req, res) => {
    try {
        const { id } = req.params;
        const updateUser = await userCollection.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );
        res.json({ success: true, data: updateUser });
    } catch (error) {
        res.json(error);
    }
};
export const delUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const delUser = await userCollection.findByIdAndDelete(id);
        res.json({ success: true, data: delUser });
    } catch (error) {
        res.json(error);
    }
};
export const addNewUser = async (req, res) => {
    try {
        const { firstName, lastName, password, email, role } = req.body;
        console.log(req.files);
        const hashPass = await hash(password, 10);
        const newUser = new userCollection({
            email,
            role,
            firstName,
            lastName,
            password: hashPass,
        });
        if (req.files) {
            const image = await imgCollection.create({
                filename: Date.now() + '_' + req.files.profile_img.name,
                data: req.files.profile_img.data,
            });
            console.log(image);
            // to do modify url
            newUser.profileImage = `http://localhost:4000/images/${image.filename}`;
        }
        await newUser.save();
        console.log(newUser);
        res.json({ success: true, data: newUser });
    } catch (error) {
        res.json({ error: error.message, msg: 'user exist' });
    }
};
export const userLogin = async (req, res) => {
    //In this example, the "options" object is defined with the "algorithm" set to "HS256", which is the HMAC SHA-256 algorithm used for signing the token, and the "expiresIn" set to "1h", which means the token will expire after one hour. These options can be customized based on your specific use case and security requirements.
    const { email, password } = req.body;
    try {
        const userExist = await userCollection.findOne({ email }).populate({
            path: 'userArtist',
            populate: { path: 'items', model: 'item' },
        });

        if (!userExist) {
            res.json('user not exist');
        }

        const ifPassCorrect = await bcrypt.compare(
            password,
            userExist.password
        );

        if (!ifPassCorrect) {
            res.json('password is wrong');
        }
        const token = jwt.sign({ id: userExist._id }, process.env.SIGNATURE);
        console.log(userExist);
        res.header('token', token).json({ success: true, data: userExist });
    } catch (error) {
        res.json(error);
    }
};
