import React, {useState, useEffect, useCallback} from 'react';
import CharacterCard from '../../components/characterCard/CharacterCard';
import Layout from '../../components/layout/Layout';
import style from './RandomCharacter.module.scss'
import { ICharacter } from '../../services/types';
import { getRandom } from '../../services/randomiser';
import { useSearchParams } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import { getAllCharacters, getIDCharacter } from '../../services/Api';
import { someSlice } from '../../store/inputReducer';
import { useAppDispatch, useAppSelector } from '../../store/hooks';


const RandomCharacter:React.FC = () => {

    const {isModalVisible, allCharacters} = useAppSelector(state => state.inputReducer);
    const {fetchAllCharacters} = someSlice.actions;
    const dispatch = useAppDispatch();

    const [character, setCharacter] = useState<ICharacter>();

    const someNumber = getRandom();

    const [characters, setCharachters] = useState<ICharacter[]>([]);
    const [randomCharacter, setRandomCharacter] = useState<ICharacter>(allCharacters[someNumber]);

    const [search, setSearch] = useSearchParams();
    const paramsId = search.get("id");
    
    const getRandomCharacter = useCallback(() => {
        if(allCharacters) {
            setRandomCharacter(allCharacters[someNumber]);
            setSearch( {id: randomCharacter._id} );
            }
        }
        , [allCharacters, randomCharacter, setSearch, someNumber]
    );

    useEffect(() => {
        if(paramsId) {
            getIDCharacter(paramsId).then(resp => setCharachters(resp));
        }
        if(!allCharacters) {
            getAllCharacters().then(result => dispatch( fetchAllCharacters(result) ));
        } 
    }, [allCharacters, paramsId]);

        return (
            <>
            <Layout/>

            {isModalVisible && <Modal/>}

            <div className={style.random_character_page_outer_wrapper}>
                <div className={style.random_character_container}>
                    {randomCharacter && 
                    <CharacterCard character={randomCharacter}
                        key={randomCharacter._id}/>
                    }
                    <button 
                        className={style.random_character_button} 
                        onClick={getRandomCharacter}
                    >get a random character!
                    </button>
                </div>
            </div>
            </>
        );
};

export default RandomCharacter;