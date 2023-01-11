import React, { useEffect } from 'react';
import CharacterCard from '../../components/characterCard/CharacterCard';
import Layout from '../../components/layout/Layout';
import style from './AllCharacters.module.scss'
import Modal from '../../components/Modal/Modal';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getCharacters } from '../../store/inputReducer';


const AllCharacters:React.FC = () => {
    const {isModalVisible, allCharacters} = useAppSelector(state => state.inputReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getCharacters());
    }, [dispatch]);
    
    return (
        <>
        <Layout/>
        {isModalVisible && <Modal/>} 
        <div className={style.all_charachters_page_outer_wrapper}>
            <div className={style.character_container}>
                {allCharacters?.map(character => 
                    <CharacterCard character={character} key={character._id}/>
                    )}
            </div>
        </div>
        </>
    );
};

export default AllCharacters;