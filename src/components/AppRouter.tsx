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
            <Route path='/' element={<LoginPage logIn={() => logIn()}/>}/>
            <Route path='/main' element={<MainPage/>}/>
            <Route path='/all_lotr_characters' element={<AllCharacters/>}/> 
            <Route path='/randon_character' element={<RandomCharacter/>}/>
            <Route path='/???' element={<MainPage/>}/> {/* EDIT IT */}
        </Routes>
    );
};

export default AppRouter;