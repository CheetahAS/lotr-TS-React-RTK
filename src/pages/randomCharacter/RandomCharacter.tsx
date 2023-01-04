import React, {useState, useEffect, useCallback} from 'react';
import CharacterCard from '../../components/characterCard/CharacterCard';
import Layout from '../../components/layout/Layout';
import style from './RandomCharacter.module.scss'
import { ICharacter } from '../../services/types';
import { getRandom } from '../../services/randomiser';
import { useSearchParams } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import { getAllCharacters, getIDCharacter } from '../../services/Api';

export const BASE_URL = "https://the-one-api.dev/v2/character";


const RandomCharacter:React.FC = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [character, setCharacter] = useState<ICharacter>();

    const searchedCharacter = (charName:string): void => {
        setCharacter(characters.find(({ name }) => name.toLowerCase() === charName.toLowerCase()));
    };

    const someNumber = getRandom();

    const [characters, setCharachters] = useState<ICharacter[]>([]);
    const [randomCharacter, setRandomCharacter] = useState<ICharacter>(characters[someNumber]);

    const [search, setSearch] = useSearchParams();
    const [paramsId, setParamsId] = useState(search.get("id"));

    const getRandomCharacter = useCallback(() => {
        if(characters.length) {
            setRandomCharacter(characters[someNumber]);
            setSearch( {id: randomCharacter._id} );
            }
        }
        , [characters, randomCharacter, setSearch]
    );

    useEffect(() => {
        if(paramsId) {
            getIDCharacter(paramsId).then(resp => setCharachters(resp));
        } else {
            getAllCharacters().then(resp => setCharachters(resp));
        }
    }, [characters, paramsId]);

        return (
            <>
            <Layout setIsModalVisible={setIsModalVisible} searchedCharacter={(charName) => searchedCharacter(charName)}/>

            {isModalVisible && character && <Modal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} character={character}/>}

            <div className={style.random_character_page_outer_wrapper}>
                <div className={style.random_character_container}>
                    {randomCharacter && 
                    <CharacterCard 
                        character={randomCharacter} 
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