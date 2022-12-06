import React from 'react';
import NavBar from '../../components/navbar/NavBar';
import style from './RandomCharacter.module.scss'

const RandomCharacter = () => {
    return (
        <div className={style.randomCharacter_page_outer_wrapper}>
            <NavBar/>
            <h1>Hier should be some random character</h1>
        </div>
    );
};

export default RandomCharacter;