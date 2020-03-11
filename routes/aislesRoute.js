import express from 'express';

let router;
router = express.Router();

router.get('/aisles', (req, res) => {
    res.send("Not_Implemented");
});

// Get one subscriber
router.get('/aisles/:id/items', (req, res) => {
    res.send("Not_Implemented");
});

export default router;