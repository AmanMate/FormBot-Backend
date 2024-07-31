const { Folder, Typebot } = require("../models/form");

// Create a new folder
const createFolder = async (req, res, next) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ errorMessage: "Folder name is required" });
        }
        const newFolder = new Folder({ name });
        await newFolder.save();
        res.json({ message: "Folder created successfully", folder: newFolder });
    } catch (error) {
        next(error);
    }
};

// Delete a folder
const deleteFolder = async (req, res, next) => {
    try {
        const { folderId } = req.params;
        const folder = await Folder.findById(folderId);
        if (!folder) {
            return res.status(404).json({ errorMessage: "Folder not found" });
        }
        // Optionally, you can check if there are any typebots associated with this folder and handle accordingly
        await Folder.findByIdAndDelete(folderId);
        res.json({ message: "Folder deleted successfully" });
    } catch (error) {
        next(error);
    }
};

// Create a new typebot
const createTypebot = async (req, res, next) => {
    try {
        const { name, folderId, text, image, gif, video, inputText, inputNumber, inputPhone, inputEmail, inputRating, inputDate, inputButton, refUserId } = req.body;

        if (!name || !folderId) {
            return res.status(400).json({ errorMessage: "Name and folder ID are required" });
        }

        const newTypebot = new Typebot({
            name,
            folder: folderId,
            text,
            image,
            gif,
            video,
            inputText,
            inputNumber,
            inputPhone,
            inputEmail,
            inputRating,
            inputDate,
            inputButton,
            refUserId
        });

        await newTypebot.save();
        res.json({ message: "Typebot created successfully", typebot: newTypebot });
    } catch (error) {
        next(error);
    }
};

// Get all folders
const getFolders = async (req, res, next) => {
    try {
        const folders = await Folder.find();
        res.json(folders);
    } catch (error) {
        next(error);
    }
};

// Get all typebots
const getTypebots = async (req, res, next) => {
    try {
        const typebots = await Typebot.find().populate('folder');
        res.json(typebots);
    } catch (error) {
        next(error);
    }
};

// Get typebot by ID
const getTypebotById = async (req, res, next) => {
    try {
        const { typebotId } = req.params;
        const typebot = await Typebot.findById(typebotId).populate('folder');
        if (!typebot) {
            return res.status(404).json({ errorMessage: "Typebot not found" });
        }
        res.json(typebot);
    } catch (error) {
        next(error);
    }
};

// Update typebot
const updateTypebot = async (req, res, next) => {
    try {
        const { typebotId } = req.params;
        const updateData = req.body;
        
        const typebot = await Typebot.findById(typebotId);
        if (!typebot) {
            return res.status(404).json({ errorMessage: "Typebot not found" });
        }
        
        // Update the typebot with new data
        Object.assign(typebot, updateData);
        
        await typebot.save();
        res.json({ message: "Typebot updated successfully", typebot });
    } catch (error) {
        next(error);
    }
};

// Delete a typebot
const deleteTypebot = async (req, res, next) => {
    try {
        const { typebotId } = req.params;
        const typebot = await Typebot.findById(typebotId);
        if (!typebot) {
            return res.status(404).json({ errorMessage: "Typebot not found" });
        }
        await Typebot.findByIdAndDelete(typebotId);
        res.json({ message: "Typebot deleted successfully" });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createFolder,
    deleteFolder,
    createTypebot,
    getFolders,
    getTypebots,
    getTypebotById,
    updateTypebot,
    deleteTypebot
};
