const mongoose = require('mongoose');
const Music = require("../app/api/models/music.models");

const dotenv = require('dotenv');
dotenv.config();

const music = [
  {
    name: 'Hombres G',   
    song: 'https://www.youtube.com/watch?v=4iJJCaSyoSw',
  },

  {
    name: 'Kiss',   
    song: 'https://www.youtube.com/watch?v=ZhIsAZO5gl0',
  },

  {
    name: 'Bon Jovi',   
    song: 'https://www.youtube.com/watch?v=vx2u5uUu3DE',
  },

  {
    name: 'The White Stripes',   
    song: 'https://www.youtube.com/watch?v=0J2QdDbelmY',
  },

  {
    name: 'Bee Gees',   
    song: 'https://www.youtube.com/watch?v=I_izvAbhExY',
  },

  {
    name: 'ABBA',   
    song: 'https://www.youtube.com/watch?v=AQKk1nkDa8U',
  },

  {
    name: 'A-ha',   
    song: 'https://www.youtube.com/watch?v=djV11Xbc914',
  },

  {
    name: 'Linkin Park',   
    song: 'https://www.youtube.com/watch?v=djV11Xbc914',
  },

  {
    name: 'Queen',   
    song: 'https://www.youtube.com/watch?v=rY0WxgSXdEE',
  },

  {
    name: 'Queen',   
    song: 'https://www.youtube.com/watch?v=-tJYN-eG1zk',
  },

  {
    name: 'Queen',   
    song: 'https://www.youtube.com/watch?v=sUJkCXE4sAA',
  },

  {
    name: 'AC/DC',
    song: 'https://www.youtube.com/watch?v=v2AC41dglnM',
  },

  
  {
    name: 'AC/DC',
    song: 'https://www.youtube.com/watch?v=pAgnJDJN4VA',
  },

];
const musicDocuments = music.map(music => new Music(music));
mongoose
    .connect('mongodb+srv://1234:<1234>@cluster0.vmcab.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async () => {
        const allMusic= await Music.find();
        if (allMusic.length) {
            await Music.collection.drop();
        }
    })
    .catch((err) => console.log(`Error deleting data: ${err}`))
    .then(async () => {
        await Music.insertMany(musicDocuments);
        console.log('DatabaseCreated')
    })
    .catch((err) => console.log(`Error creating data: ${err}`))
    .finally(() => mongoose.disconnect());