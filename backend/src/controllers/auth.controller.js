const User = require("../models/user.model");
const ErrorResponse = require("../utils/errorResponse");

exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return next(new ErrorResponse(`User not found with email ${email}`, 400));
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
        return res.status(403).josn({
            success: false,
            message: 'Invalid password',
        })
    }

    const token = user.genrateToken();

    return res.status(200).json({
        success: true,
        message: 'Loggin success',
        data: {
            token,
            userId: user._id,
        },
    });
}

exports.register = async (req, res, next) => {
    res.sendStatus(200)
}