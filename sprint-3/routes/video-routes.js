const express = require('express');
const shortId = require('shortid');
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
    const foundVideo = videos.find(video => video.id === req.params.id);

    if (!foundVideo) {
        res.status(404).json({ error: 'Oops, looks like there is nothing here...' });
    } else {
        res.json(foundVideo);
    }
}

const createNewVideo = (req, res) => {
    const {
        title, channel, description
    } = req.body;

    const newVideo = {
        id: shortId.generate(),
        title,
        channel,
        image: "https://source.unsplash.com/random",
        description,
        views: 0,
        likes: 0,
        duration: 0,
        video: "https://project-2-api.herokuapp.com/stream",
        timestamp: Date.now(),
        comments: [],
    };
    videos.push(newVideo);
    res.json(newVideo);
}

router.get('/', getAllVideos);
router.post('/', createNewVideo);
router.get('/:id', getSingleVideo);

module.exports = router;