const express = require('express');
const router = express.Router();
const GIF = require ('../models/gif');


// Index Route
router.get('/', async (req, res, next) => {
console.log("Index Route");
    try{
        const allGIF = await GIF.find();

        res.json({
            status: 200,
            data: allGIF
        });

    } catch (err) {
        res.send(err)
        console.log(err);
    }
});


// Create Route
router.post('/', async (req, res) => {
console.log("Create Route");
console.log(req.body);
    try {
        const createdGIF = await GIF.create(req.body);

        res.json({
            status: 200,
            data: createdGIF
        });

    } catch(err) {
        res.send(err)
        console.log(err);
    }
});


// Show Route
router.get('/', async (req, res, next) => {
console.log("Show Route");
    try {
        const foundGIF = await GIF.findById(req.params.id);

        res.json({
            status: 200,
            data: foundGIF
        });

    } catch(err) {
        res.send(err)
        console.log(err);
    }
});


// Update Route
router.put('/:id', async (req, res) => {
console.log("Update Route");
    try {
        const updatedGIF = await GIF.findByIdAndUpdate(req.params.id, req.body, {new: true});

        res.json({
            status: 200,
            data: updatedGIF
        });

    } catch(err) {
        res.send(err);
    }
});


// Delete Route
router.delete('/:id', async (req, res) => {

    try {
        const deletedGIF = await GIF.findByIdAndRemove(req.params.id);

        res.json({
            status: 200,
            data: deletedGIF
        });
    } catch(err) {
        res.send(err);
    }
});






module.exports = router;