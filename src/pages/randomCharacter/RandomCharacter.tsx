import React, {useState, useEffect, useCallback} from 'react';
import CharacterCard from '../../components/characterCard/CharacterCard';
import Layout from '../../components/layout/Layout';
import style from './RandomCharacter.module.scss'
import { ICharacter } from '../../services/types';
import { getRandom } from '../../services/randomiser';
import { useSearchParams } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import { getCharacters, getCharacterById } from '../../store/inputReducer';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { ApiStatusPendingEnum } from '../../store/inputReducer'; 


const RandomCharacter:React.FC = () => {

    const {isModalVisible, allCharacters, loadingStateAllChar, loadingStateIDChar} = useAppSelector(state => state.inputReducer);
    const dispatch = useAppDispatch();

    const someNumber = getRandom();

    const [randomCharacter, setRandomCharacter] = useState<ICharacter>(allCharacters.docs[someNumber]);
    

    const [search, setSearch] = useSearchParams();
    const paramsId = search.get("id");
    
    const getRandomCharacter = useCallback(() => {
        if(allCharacters.docs) {
            setRandomCharacter(allCharacters.docs[someNumber]);
            setSearch( {id: randomCharacter._id} );
            }
        }
        , [allCharacters.docs, randomCharacter, setSearch, someNumber]
    );

    useEffect(() => {
        if(paramsId) {
            dispatch( getCharacterById(paramsId) );
        };
        if(loadingStateAllChar!== ApiStatusPendingEnum.LOAD || allCharacters.docs.length !== 933) {
            dispatch( getCharacters());
        };
    }, [allCharacters, dispatch, paramsId]);

    if(loadingStateAllChar === ApiStatusPendingEnum.ERROR ||        loadingStateIDChar === ApiStatusPendingEnum.ERROR) {
        throw Error('too many request, pls try it later');
    };

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