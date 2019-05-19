const express = require('express');
const router = express.Router();
const videos = require('../data/videos');
const url = 'http://localhost:5000';

const getAllVideos = (req, res) => {
    res.json(
        (videos.map(video => {
            return {
                id: video.id,
                title: video.title,
                channel: video.channel,
                image: video.image,
            }})));
}

const getSingleVideo = (req,res) => {
    res.json(console.log(req.params.id));
}

router.get('/', getAllVideos);
router.get('/:id', getSingleVideo);

module.exports = router;