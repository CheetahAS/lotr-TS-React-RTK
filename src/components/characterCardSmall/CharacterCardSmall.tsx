import React from 'react';
import { ICharacterSmall } from '../../services/types';
import style from './CharacterCardSmall.module.scss'
import { charactersSlice } from '../../store/inputReducer';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const CharacterCardSmall:React.FC = () => {

    const {inputText, isModalVisible, searchedCharacter} = useAppSelector(state => state.inputReducer);
    const {changeInputText, openModal, closeModal} = charactersSlice.actions;
    const dispatch = useAppDispatch();  

    return (
        <div className={style.character_wrapper}>
            <div className={style.character}>
                <div className={style.image}/>
                <h1>{searchedCharacter.name}</h1>

                {!searchedCharacter.race ? 
                <p>race: unknown</p>
                :
                <p>race: {searchedCharacter.race}</p>
                }
                {!searchedCharacter.wikiUrl ?
                <p>wikiUrl: unknown</p>
                :
                <p>wikiUrl: <br /><a href={searchedCharacter.wikiUrl} target="_blank" rel="noreferrer">{searchedCharacter.wikiUrl}</a></p>
                }
            </div>
        </div>
        
    );
};

export default CharacterCardSmall;