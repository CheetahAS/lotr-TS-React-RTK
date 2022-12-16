import React, { useEffect, useState } from 'react';
import CharacterCardSmall from '../characterCardSmall/CharacterCardSmall';
import style from './Modal.module.scss';
import { getAllCharacters } from '../../services/Api';
import { ICharacterSmall } from '../../services/types';

interface ModalProps {
    isModalVisible: boolean
    setIsModalVisible: (value: boolean) => void
    inputedName: string
}

const Modal:React.FC<ModalProps> = ({isModalVisible, setIsModalVisible, inputedName}) => {

    const [characters, setCharacters] = useState<ICharacterSmall[]>([]);

    useEffect(() => {
        getAllCharacters().then(result => setCharacters(result))
    }, [characters.length]);

    return (
        <>
        {isModalVisible && (
            <div className={style.modal_container}>
                <div className={style.modal_window}>
                    {characters && 
                        characters.filter(char => char.name === inputedName).map(filteredChar => 
                        <CharacterCardSmall 
                            characterSmall={filteredChar} 
                            key={filteredChar._id}/>
                        )
                    }
                </div>
                <button onClick={() => setIsModalVisible(false)}>x</button>
            </div>
        )}
        </>
    );
};

export default Modal;