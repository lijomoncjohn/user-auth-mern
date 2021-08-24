const asyncHandler = require("../helpers/asyncHandler")

const User = require("../models/user.model")

exports.profile = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user._id).select('-password -tokens').populate('history')

    return res.status(200).json({
        success: true,
        message: 'User details',
        data: user
    })
})