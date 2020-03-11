import express from 'express';
import itemModel from '../models/itemModel';

let router;
router = express.Router();

router.get('/items', (req, res) => {
    res.send("Not_Implemented");
});

// Get one subscriber
router.get('/items/:id', (req, res) => {
    res.send("Not_Implemented");
});

export default router;