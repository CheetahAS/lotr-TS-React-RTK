import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AllCharacters from '../pages/allCharacters/AllCharacters';
import LoginPage from '../pages/login/LoginPage';
import MainPage from '../pages/main/MainPage';
import RandomCharacter from '../pages/randomCharacter/RandomCharacter';


const AppRouter:React.FC = () => {
    let [isAuth, setIsAuth] = useState(false);

    const logIn = () => {
        setIsAuth(isAuth = !isAuth)
    };

    return (
        <Routes>
            <Route path='/login' element={<LoginPage logIn={logIn}/>}/>
            <Route path="/main" element={<MainPage/>}/>
            <Route path='/all-lotr-characters' element={<AllCharacters/>}/> 
            <Route path='/random-character' element={<RandomCharacter/>}/>
            <Route path='/???' element={<MainPage/>}/> {/* Some tab to add lately */}
        </Routes> 
    );
};

export default AppRouter;