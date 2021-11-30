const mongoose = require("mongoose"); 
const Schema = mongoose.Schema; 

 
const MusicSchema = new Schema( 
    { 
        music: { type: String, require: true },
        name: { type: String, require: true }, 
        author: { type: String, require: true }, 
        year: { type: Number, require: true }, 
        album:{ type: String, require: true }, 
        cover: { type: String, require: true }
    }, 
); 

const Music = mongoose.model("music", MusicSchema); 

module.exports = Music; 