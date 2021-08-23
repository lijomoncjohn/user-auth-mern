const mongoose = require('mongoose')

const UserHistorySchema = new mongoose.Schema({
    user: {
        type: String,
        required: [true, 'Please provide a User ID'],
        ref: 'User',
    },
    loggedInAt: {
        type: Date,
    },
    loggedOutAt: {
        type: Date,
    },
    token: {
        type: String,
    },
    tokenDeleted: {
        type: Boolean,
        default: false,
    },
    device: {
        type: String,
    },
}, { timestamps: true });

module.exports = UserHistory = mongoose.model('UserHistory', UserHistorySchema);