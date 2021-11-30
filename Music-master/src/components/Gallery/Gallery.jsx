import React, { useState, useEffect } from "react";
import getMusic from "../../api/fetch_music";
import "../Gallery/Gallery.css"

const Gallery = () => {
    useEffect(() => {
        formatCovers();
    }, []);

    const [music, setMusic] = useState([]);

    const formatCovers = async () => {
        const musicdb = await getMusic();
        console.log(musicdb);
        setMusic(musicdb.data.music);
    };

    return (
        <div className="Container">
            <h2>Music World</h2>
            <ul className="List_music" >
                {music.map((music) => {
                    return (
                        /* <ul className="List_books" key={JSON.stringify(book)}> */
                            <li className="List_music_item" key={JSON.stringify(music)}>
                                <img src={music.cover} alt="Cover" />
                                <h4>{music.name}</h4>
                                <h4>{music.year}</h4>
                            </li>
                        /* </ul> */
                    );
                })}
            </ul>
        </div>
    );
};

export default Gallery;