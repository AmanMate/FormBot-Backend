const express = require("express");
const router = express.Router();
const form = require("../controller/form");
const verifyToken = require("../middlewares/verifyAuth");

// Folder routes
router.post("/createFolder", verifyToken, form.createFolder);                   // Create a new folder
router.delete("/deleteFolder", verifyToken, form.deleteFolder);       // Delete a folder
router.get("/getFolders", verifyToken, form.getFolders);                      // Get all folders

// Typebot routes
router.post("/createTypebot", verifyToken, form.createTypebot);                 // Create a new typebot
router.get("/getTypebots", verifyToken, form.getTypebots);                    // Get all typebots
router.get("/getTypebotById", verifyToken, form.getTypebotById);       // Get a typebot by ID
router.put("/updateTypebot", verifyToken, form.updateTypebot);        // Update a typebot
router.delete("/deleteTypebot", verifyToken, form.deleteTypebot);     // Delete a typebot

module.exports = router;

