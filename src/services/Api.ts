import axios from 'axios';
import { IResponseCharacter } from './types';

export const getAllCharacters = async (obj?: { page: string, limit: string, race?: string | undefined, gender?: string | undefined, realm?: string | undefined}) => {
    let response;
    if (obj) {
        response = await axios.get<IResponseCharacter>(`https://the-one-api.dev/v2/character`, {
            headers: {
            Authorization: 'Bearer RvUZKnn3jhhUA2PEhvOO'
            },
            params: {
                page: obj.page,
                limit: obj.limit,
                race: obj.race || undefined,
                gender: obj.gender || undefined,
                realm: obj.realm || undefined
            }
        });
    } else {
    response = await axios.get<IResponseCharacter>(`https://the-one-api.dev/v2/character`, {
        headers: {
        Authorization: 'Bearer RvUZKnn3jhhUA2PEhvOO'
        }
    });
}
    return response.data;
};

export const getIDCharacter = async (id:string) => {
    const response = await axios.get<IResponseCharacter>(`https://the-one-api.dev/v2/character/${id}`, {headers: {
        Authorization: 'Bearer RvUZKnn3jhhUA2PEhvOO'
        }
    });
    return response.data.docs;
};