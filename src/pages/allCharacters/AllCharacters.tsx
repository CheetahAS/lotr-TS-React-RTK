import React, {useEffect, useState} from 'react';
import CharacterCard from '../../components/characterCard/CharacterCard';
import Layout from '../../components/layout/Layout';
import style from './AllCharacters.module.scss'
import {getAllCharacters} from '../../services/Api'
import { ICharacter } from '../../services/types';
import Modal from '../../components/Modal/Modal';
import { someSlice } from '../../store/inputReducer';
import { useAppDispatch, useAppSelector } from '../../store/hooks';


const AllCharacters:React.FC = () => {
    const {isModalVisible, allCharacters} = useAppSelector(state => state.inputReducer);
    const {fetchAllCharacters} = someSlice.actions;
    const dispatch = useAppDispatch();

    useEffect(() => {
        getAllCharacters().then(result => dispatch( fetchAllCharacters(result) ));
    }, []);
    
    return (
        <>
        <Layout/>
        {isModalVisible && <Modal/>} 
        <div className={style.all_charachters_page_outer_wrapper}>
            <div className={style.character_container}>
                {allCharacters.map(character => 
                    <CharacterCard character={character} key={character._id}/>
                    )}
            </div>
        </div>
        </>
    );
};

export default AllCharacters;