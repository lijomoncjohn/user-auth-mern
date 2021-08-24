const asyncHandler = require("../helpers/asyncHandler");
const ErrorResponse = require("../utils/errorResponse");

const User = require("../models/user.model");
const UserHistory = require("../models/userHistory.model");

exports.login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return next(new ErrorResponse(`User not found with email ${email}`, 400));
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
        return res.status(403).json({
            success: false,
            message: 'Invalid password',
        })
    }

    const token = await user.genrateToken();

    user.tokens = user.tokens.concat({ token });

    await user.save();

    const history = new UserHistory({
        user: user._id,
        loggedInAt: Date.now(),
        token: token,
        device: req.headers['user-agent'],
    });

    await history.save();

    return res.status(200).json({
        success: true,
        message: 'Loggin success',
        data: {
            token,
            userId: user._id,
        },
    });
})

exports.register = asyncHandler(async (req, res, next) => {
    const user = await User.create(req.body)

    const token = user.genrateToken();

    return res.status(200).json({
        success: true,
        message: 'Loggin success',
        data: {
            token,
            userId: user._id,
        },
    });
})

exports.logout = asyncHandler(async (req, res, next) => {
    req.user.tokens = req.user.tokens.filter((token) => {
        return token.token !== req.token
    })

    const history = await UserHistory.findOneAndUpdate({ token: req.token }, {
        loggedOutAt: Date.now(),
        tokenDeleted: true,
        device: req.headers['user-agent'],
    });

    await req.user.save()

    return res.status(200).json({
        success: true,
        message: 'Logged out successfully'
    })

})