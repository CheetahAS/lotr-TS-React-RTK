import React from 'react';
import axios from 'axios';
import { ICharacter, IResponseCharacter} from './types';
import { getRandom } from './randomiser';

export const getAllCharacters = async () => {
    const response = await axios.get<IResponseCharacter>(`https://the-one-api.dev/v2/character`, {headers: {
        Authorization: 'Bearer RvUZKnn3jhhUA2PEhvOO'
        }
    });
    return response.data.docs;
};


export const getRandomCharacter = async () => {
    const ids = await getAllCharacters().then(response => response.map((item:ICharacter) => item._id));
    
    const response = await axios.get<IResponseCharacter>(`https://the-one-api.dev/v2/character/${ids[getRandom()]}`, {headers: {
        Authorization: 'Bearer RvUZKnn3jhhUA2PEhvOO'
        }
    });
    return response.data.docs;
};

