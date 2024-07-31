const mongoose = require("mongoose");

const folderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
}, 
{timestamps: {createdAt: "createdAt", updatedAt: "updatedAt"}}
);

const typebotSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    folder: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Folder",
    },
    text: {
        type: [String],
        required: true,
    },
    image: {
        type: [String],
        required: true,
    },
    gif: {
        type: [String],
        required: true,
    },
    video: {
        type: [String],
        required: true,
    },
    inputText: {
        type: [String],
        required: true,
    },
    inputNumber: {
        type: [Number],
        required: true,
    },
    inputPhone: {
        type: [Number],
        required: true,
    },
    inputEmail: {
        type: [String],
        required: true,
    },
    inputRating: {
        type: [Boolean],
        required: true,
        default: false,
    },
    inputDate: {
        type: [Date],
        required: true,
    },
    inputButton: {
        type: [String],
        required: true,
    },
    theme: {
        type: String,
        enum: ['light', 'dark', 'tailblue'],
        default: 'light',
    },
    refUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
},
{timestamps: {createdAt: "createdAt", updatedAt: "updatedAt"}}
);

module.exports = {
    Folder: mongoose.model('Folder', folderSchema),
    Typebot: mongoose.model('Typebot', typebotSchema),
};
