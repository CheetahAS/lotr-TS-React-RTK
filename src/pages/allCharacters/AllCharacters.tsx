import React, {useEffect, useState} from 'react';
import CharacterCard from '../../components/characterCard/CharacterCard';
import Layout from '../../components/layout/Layout';
import style from './AllCharacters.module.scss'
import {getAllCharacters} from '../../services/Api'
import { ICharacter } from '../../services/types';
import Modal from '../../components/Modal/Modal';


const AllCharacters:React.FC = () => {
    const [characters, setCharacters] = useState<ICharacter[]>([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [character, setCharacter] = useState<ICharacter>();

    const searchedCharacter = (charName:string): void => {
        setCharacter(characters.find(({ name }) => name.toLowerCase() === charName.toLowerCase()));
    };
    
    useEffect(() => {
        getAllCharacters().then(result => setCharacters(result));
    }, []);
    
    return (
        <>
        <Layout setIsModalVisible={setIsModalVisible} searchedCharacter={(charName) => searchedCharacter(charName)} />
        {isModalVisible && character && <Modal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} character={character}/>} 
        <div className={style.all_charachters_page_outer_wrapper}>
            <div className={style.character_container}>
                {characters.map(character => 
                    <CharacterCard character={character} key={character._id}/>
                    )}
            </div>
        </div>
        </>
    );
};

export default AllCharacters;