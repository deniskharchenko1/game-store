import React from 'react';
import {useSelector} from "react-redux";
import './game.scss';
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import apple from '../img/apple.svg';
import nintendo from '../img/nintendo.svg';
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';

const GameDetail = () => {
    const {game, screen, isLoading} = useSelector((state) => state.detail)

    const getPlatform = (platform) => {
        switch (platform) {
            case "PlayStation 4":
                return playstation;
            case "PlayStation 5":
                return playstation;
            case "Xbox One":
                return xbox;
            case "Xbox Series S/X":
                return xbox;
            case "Xbox":
                return xbox;
            case "Nintendo Switch":
                return nintendo;
            case "PC":
                return steam;
            case "IOS":
                return apple;
            default: return ''
        }
    }
    const getStars = () => {
        const stars = []
        const rating = Math.floor(game.rating)
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<img src={starFull} alt='star' key={i}></img>)
            } else {
                stars.push(<img src={starEmpty} alt='star' key={i}></img>)
            }
        }
        return stars
    }

    return (
        <>
        {!isLoading && (
        <div className='card-shadow'>
            <div className="detail">
                <div className="stats">
                    <div className="rating">
                        <h3>{game.name}</h3>
                        <p>Rating: {game.rating}</p>
                        {getStars()}
                    </div>
                    <div className="info">
                        <h3>Platforms</h3>
                        <div className="platforms">
                            {game.platforms.map((data) => (
                                <img key={data.platform.id}
                                     src={getPlatform(data.platform.name)}
                                     title={data.platform.name}
                                     alt={data.platform.name}
                                >
                                </img>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="media">
                    <img src={game.background_image} alt="game"/>
                </div>
                <div className="description">
                    <p>{game.description_raw}</p>
                </div>
                <div className="gallery">
                    {screen.results.map((screen) => (
                        <img key={screen.id} src={screen.image} alt="img"/>
                    ))}
                </div>
            </div>
        </div>
    )}
        </>
    );
};

export default GameDetail;
