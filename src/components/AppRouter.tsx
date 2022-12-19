import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AllCharacters from '../pages/allCharacters/AllCharacters';
import LoginPage from '../pages/login/LoginPage';
import MainPage from '../pages/main/MainPage';
import RandomCharacter from '../pages/randomCharacter/RandomCharacter';
import NavBar from './navbar/NavBar';

const AppRouter = () => {
    let [isAuth, setIsAuth] = useState(false)

    const logIn = () => {
        setIsAuth(isAuth = !isAuth)
    }
    return (
        <Routes>
            <Route path='/*' element={<LoginPage logIn={logIn}/>}/>
            <Route path='/login' element={<LoginPage logIn={logIn}/>}/>
            <Route path="/main" element={<MainPage/>}/>
            <Route path='/all-lotr-characters' element={<AllCharacters/>}/> 
            <Route path='/random-character' element={<RandomCharacter/>}/>
            <Route path='/???' element={<LoginPage logIn={logIn}/>}/> {/* Some tab to add latelys */}
        </Routes> 
    );
};

export default AppRouter;