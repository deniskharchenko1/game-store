import React from 'react';
import {useDispatch} from "react-redux";
import {loadDetailGame} from "../redux/actions/detailGameAction";
import {Link} from "react-router-dom";


const Game = ({name, released, img, id}) => {
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        dispatch(loadDetailGame(id))
    }

    return (
        <div className='game__item' onClick={loadDetailHandler}>
            <Link to={`/game/${id}`}>
                <h3>{name}</h3>
                <p>{released}</p>
                <img src={img} alt={name}/>
            </Link>
        </div>
    );
};

export default Game;
