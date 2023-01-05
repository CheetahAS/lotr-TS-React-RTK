import React from 'react';
import { ICharacter } from '../../services/types';
import style from './CharacterCard.module.scss'


interface CharacterCardProps {
    character: ICharacter
}

const CharacterCard:React.FC<CharacterCardProps> = ({character}) => {

    return (
        <div className={style.character_wrapper}>
            <div className={style.character}>
                <div className={style.image}/> 
                <h1>{character.name}</h1>

                {!character.race ? 
                <p>race: unknown</p>
                :
                <p>race: {character.race}</p>
                }

                <p>gender: {character.gender}</p>

                {!character.realm ? 
                <p>realm: unknown</p>
                :
                <p>realm: {character.realm}</p>
                }

                {!character.spouse ? 
                <p>spouse: unknown</p>
                :
                <p>spouse: {character.spouse}</p>
                }

                {!character.birth ?
                <p>birth: unknown</p>
                :
                <p>birth: {character.birth}</p>
                }

                {!character.death ?
                <p>death: unknown</p>
                :
                <p>death: {character.death}</p>
                }

                {!character.height ?
                <p>height: unknown</p>
                :
                <p>height: {character.height}</p>
                }
                
                {!character.hair ?
                <p>hair: unknown</p>
                :
                <p>hair: {character.hair}</p>
                }

                {!character.wikiUrl ?
                <p>wikiUrl: unknown</p>
                :
                <p>wikiUrl: <br /><a href={character.wikiUrl} target="_blank" rel="noreferrer">{character.wikiUrl}</a></p>
                }
            </div>
        </div>
    );
};

export default CharacterCard;