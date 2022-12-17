import React from 'react';
import NavBar from '../../components/navbar/NavBar';
import style from './AllCharacters.module.scss'

const AllCharacters = () => {
    return (
        <div className={style.allcharachters_page_outer_wrapper}>
            <NavBar/>
            <h1>Hier should be all characters</h1>
        </div>
    );
};

export default AllCharacters;