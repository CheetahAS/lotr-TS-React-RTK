import React from 'react';
import { ICharacterSmall } from '../../services/types';
import style from './CharacterCardSmall.module.scss'


interface CharacterCardProps {
    characterSmall: ICharacterSmall
}

const CharacterCardSmall:React.FC<CharacterCardProps> = ({characterSmall}) => {

    return (
        <div className={style.character_wrapper}>
            <div className={style.character}>
                <div className={style.image}/>

                <h1>{characterSmall.name}</h1>

                {!characterSmall.race ? 
                <p>race: unknown</p>
                :
                <p>race: {characterSmall.race}</p>
                }
                {!characterSmall.wikiUrl ?
                <p>wikiUrl: unknown</p>
                :
                <p>wikiUrl: <br /><a href={characterSmall.wikiUrl} target="_blank" rel="noreferrer">{characterSmall.wikiUrl}</a></p>
                }
            </div>
        </div>
        
    );
};

export default CharacterCardSmall;