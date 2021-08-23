const mongoose = require("mongoose")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add email']
    },
    password: {
        type: String,
        required: [true, 'Please add password']
    }
}, { timestamps: true })

// Password encryption
UserSchema.pre('save', async function (next) {
    const user = this;

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }

    next();
});

// Check password match
UserSchema.methods.matchPassword = function (userPassword) {
    return bcrypt.compare(userPassword, this.password);
};

// Generate authentication toen
UserSchema.methods.genrateToken = function () {
    const token = jwt.sign(
        {
            id: this._id.toString(),
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRE,
        }
    );

    return token;
};

const User = mongoose.model('User', UserSchema)

module.exports = User