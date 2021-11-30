const Music = require("../models/music.model");
/*const fs = require ("fs");*/



const createMusic = async (req, res, next) => {
    try {
        let music = req.file ? req.file.url: null;
        const newMusic = new Music();
        newMusic.name = req.body.name;
        newMusic.author = req.body.author;
        newMusic.music = music;
        newMusic.cover = req.body.cover;
        newMusic.year = req.body.year;
        newMusic.editorial = req.body.editorial;

        const musicDb = await newMusic.save();

        return res.json({
            status: 201,
            message: "Todo Ok, has creado un libro",
            data: { name: musicDb.name }
        })

    } catch (error) {
        return next(error);
    }
}

const getAllMusic = async (req, res, next) => {
    try {
        const music = await Music.find()/* .populate("books") */;

        return res.json({
            status: 200,
            message: "Todo Ok, has conseguido todos los libros",
            data: { music: music}
        })

    } catch (error) {
        return next(error)
    }
}

const getMusicById = async (req, res, next) => {
    try {
        const { musicId } = req.params;
        const MusicById = await Music.findById(musicId);

        return res.json({
            status: 200,
            message: "Todo Ok, has conseguido el libro por su ID",
            data: { music: MusicById }
        })
    } catch (error) {
        return next(error)
    }
}

const deleteMusic = async (req, res, next) => {
    try {
        const {musicId} = req.params;
        await Music.findByIdAndDelete(musicId);
        return res.json ({
            status: 200,
            message: "Libro borrado con éxito"
        })
    } catch (error) {
        return next(error)
    }
}

module.exports = { createMusic, getAllMusic, getMusicById, deleteMusic };