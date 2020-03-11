import express from "express";
import EnvStatus from "../models/envStatusModel.js";
import mongoose from 'mongoose';
let router;
router = express.Router();

router.get('/env_status', async function (req, res) {
        EnvStatus.find( {} ).then(async function(updatedDoc) {
            if (updatedDoc) {
                if(mongoose.connection){
                    updatedDoc[0].isMongoConnected = true;
                }
                updatedDoc[0].isMongoRunning = true; // Set to false when we shut down mongo - will be manual
                updatedDoc[0].isAPIRunning = false; // If this is reached, the API is the resource handling this request
                console.log('[Updated Doc]: ' + updatedDoc); // Log the updated health document
                return await updatedDoc[0].save(); //Save the document back to the database
            }
        }).catch(err => {
            console.error(err);
        }).then((doc) => {
            res.send({ "[Environment]": "Successfully Updated Environment Statuses",
                        "[DOC]": doc[0] });
        });

    });

export default router;