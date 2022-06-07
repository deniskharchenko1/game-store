import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadGames} from "../redux/actions/gameAction";
import Game from "../components/Game";
import './home.scss';

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadGames())
    }, [dispatch])
    const {popular, upcoming, newGames} = useSelector((state) => state.games)
    return (
        <>
            <div className='game__list'>
                <h2 className='game__list__title'>Upcoming games</h2>
                <div className='games'>
                    {upcoming.map((game) => (
                        <Game id={game.id}
                              key={game.id}
                              name={game.name}
                              released={game.released}
                              img={game.background_image}
                        />
                    ))}
                </div>
            </div>
            <div className='game__list'>
                <h2 className='game__list__title'>Popular games</h2>
                <div className='games'>
                    {popular.map((game) => (
                        <Game id={game.id}
                              key={game.id}
                              name={game.name}
                              released={game.released}
                              img={game.background_image}
                        />
                    ))}
                </div>
            </div>
            <div className='game__list'>
                <h2 className='game__list__title'>New games</h2>
                <div className='games'>
                    {newGames.map((game) => (
                        <Game id={game.id}
                              key={game.id}
                              name={game.name}
                              released={game.released}
                              img={game.background_image}
                        />
                    ))}
                </div>
            </div>
        </>

    );
};

export default Home;
