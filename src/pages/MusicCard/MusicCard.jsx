import React, {  useState } from "react";
import './MusicCard.css';
import { MusicData } from "../../context/Data";


function MusicCard({page}) {
    const { musicData } = MusicData();
    const [play, setPlay] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(null);

 

    const handlePlayPause = (trackId) => {
        setPlay(!play);
        if (!play) {
            setCurrentTrack(trackId);
        } else {
            setCurrentTrack(null);
        }
    };

    return (
        <>
            <div className="MusicList">
                {musicData.slice((page-1)*10,page*10).map((music, ind) => {
                    const trackId = music?.data?.id;
                    return (
                        <div className="MusicCard" key={ind}>
                            <div className='card_image'>
                                <img src={music?.data?.albumOfTrack?.coverArt?.sources?.[0]?.url} alt={ind} onClick={() => handlePlayPause(trackId)} />
                            </div>
                            {currentTrack === trackId && (
                                <iframe
                                    src={`https://open.spotify.com/embed/track/${trackId}`}
                                    width="300"
                                    height="100"
                                    frameBorder="0"
                                    allowtransparency="true"
                                    allow="encrypted-media"
                                    className="audio"
                                ></iframe>
                            )}
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default MusicCard;
