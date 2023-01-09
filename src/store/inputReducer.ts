import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ICharacter } from '../services/types';

interface InputState {
    inputText: string,
    isModalVisible: boolean,
    searchedCharacter: ICharacter,
    allCharacters: ICharacter[],
}

const initialState:InputState = {
    inputText: '',
    isModalVisible: false,
    searchedCharacter: {
        birth: '',
        death: '',
        gender: '',
        hair: '',
        height: '',
        name: '',
        race: '',
        realm: '',
        spouse: '',
        wikiUrl: '',
        _id: ''
    },
    allCharacters: [],
}

export const someSlice = createSlice({
    name: 'InputSlice',
    initialState,
    reducers: {
        openModal(state) {
            state.isModalVisible = true;
        },
        closeModal(state) {
            state.isModalVisible = false;
        },
        changeInputText(state, action: PayloadAction<string>) {
            state.inputText = action.payload;
        },
        defineSearchedCharacter(state, action: PayloadAction<ICharacter>) {
            state.searchedCharacter = action.payload;
        },
        clearSearchedCharacter(state) {
            state.searchedCharacter = initialState.searchedCharacter;
        },
        fetchAllCharacters(state, action: PayloadAction<ICharacter[]>) {
            state.allCharacters = action.payload;
        },
    },
})

export default someSlice.reducer;