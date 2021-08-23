const jwt = require('jsonwebtoken');

const User = require('../models/user.model');
const ErrorResponse = require('../utils/errorResponse');

exports.authenticate = async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return next(new ErrorResponse('Invalid authentication token', 401));
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: decoded.id });

        if (!user) {
            return next(new ErrorResponse('Not authorized to access this', 401));
        }

        req.user = user;
        req.token = token;

        next();
    } catch (error) {
        console.log(error.message);
        return next(new ErrorResponse('Token has expired', 403));
    }
}