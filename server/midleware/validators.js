import { body, validationResult } from 'express-validator';

export const rules = [
    body('email')
        .isEmail()
        .withMessage('please provide us with valid email')
        .normalizeEmail(),
    body('password')
        .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/)
        .withMessage('please follow password rule'),
    (req, res, next) => {
        //custom middleware
        //extracting errors from req object
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            next();
        } else {
            res.json({
                success: false,
                message: errors
                    .array()
                    .map((err) => ({ [err.params]: err.msg })),
            });
        }
    },
];
