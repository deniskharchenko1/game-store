import React from "react";

import Home from "./pages/Home";
import './app.scss'
import {Route, Routes} from 'react-router-dom';
import GameDetail from "./components/GameDetail";

function App() {

  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/game/:id' element={<GameDetail/>}/>
        </Routes>
    </div>
  );
}

export default App;
