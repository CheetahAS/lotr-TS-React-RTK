import { getAllCharacters } from './../services/Api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ICharacter } from '../services/types';

interface InitialState {
    inputText: string,
    isModalVisible: boolean,
    searchedCharacter: ICharacter,
    allCharacters: ICharacter[],
    loadingState: string,
}

export enum ApiStatusPendingEnum {
    LOADING = 'LOADING',
    LOAD = 'LOAD',
    ERROR = 'ERROR',
  }

const initialState: InitialState = {
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
    loadingState: ApiStatusPendingEnum.LOADING,
};

export const getCharacters = createAsyncThunk('getCharacters', async () => {
    const response = await getAllCharacters();
    return response;
  });

export const charactersSlice = createSlice({
    name: 'charactersSlice',
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
        // fetchAllCharacters(state, action: PayloadAction<ICharacter[]>) {
        //     state.allCharacters = action.payload;
        // },
    },

    extraReducers: (builder) => {
        builder.addCase(getCharacters.pending, (state) => {
            state.loadingState = ApiStatusPendingEnum.LOADING;
          })
          .addCase(getCharacters.fulfilled, (state, action: PayloadAction<ICharacter[]>) => {
            state.loadingState = ApiStatusPendingEnum.LOAD;
            state.allCharacters = action.payload;
          })
          .addCase(getCharacters.rejected, (state) => {
            state.loadingState = ApiStatusPendingEnum.ERROR;
          });
    },
})

export default charactersSlice.reducer;