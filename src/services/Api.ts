import axios from 'axios';
import { IResponseCharacter } from './types';

export const getAllCharacters = async () => {
    const response = await axios.get<IResponseCharacter>(`https://the-one-api.dev/v2/character`, {headers: {
        Authorization: 'Bearer RvUZKnn3jhhUA2PEhvOO'
        }
    });
    return response.data.docs;
};


export const getIDCharacter = async (id:string) => {
    const response = await axios.get<IResponseCharacter>(`https://the-one-api.dev/v2/character/${id}`, {headers: {
        Authorization: 'Bearer RvUZKnn3jhhUA2PEhvOO'
        }
    });
    return response.data.docs;
};

