import express from 'express';
import Stores from '../models/storeModel.js';

let router;
router = express.Router();

router.get('/stores', async function (req, res) {
        Stores.find( {} ).then(async function(updatedDoc) {
            if (updatedDoc) {
                console.log('[Updated Doc]: ' + updatedDoc);
                res.send({"stores": updatedDoc})
            }
        }).catch(err => {
            console.error(err);
        });

    });

router.get('/stores/:storeId', async function (req, res) {
            Stores.findOne( {"storeId": req.params.storeId} ).then(async function(updatedDoc) {
                if (updatedDoc) {
                    console.log('[Updated Doc]: ' + updatedDoc);
                    res.send({"stores": updatedDoc})
                }
            }).catch(err => {
                console.error(err);
            })
        });

export default router;