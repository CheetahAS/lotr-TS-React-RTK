import { getAllCharacters, getIDCharacter } from './../services/Api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ICharacter,IResponseCharacter } from '../services/types';

interface InitialState {
    inputText: string,
    isModalVisible: boolean,
    searchedCharacter: ICharacter | null,
    allCharacters: IResponseCharacter,
    all933Char: ICharacter[],
    loadingStateAllChar: string,
    loadingStateIDChar: string,
    loadingStateAll933Char: string,
    randonChar: ICharacter[] | null,
};

export enum ApiStatusPendingEnum {
    LOADING = 'LOADING',
    LOAD = 'LOAD',
    ERROR = 'ERROR',
  };

const initialState: InitialState = {
    inputText: '',
    isModalVisible: false,
    searchedCharacter: null,
    allCharacters: {
      docs: [], 
      page: '', 
      pages: '', 
      limit: '',
      total: ''
    },
    all933Char: [],
    loadingStateAllChar: ApiStatusPendingEnum.LOADING,
    loadingStateIDChar: ApiStatusPendingEnum.LOADING,
    loadingStateAll933Char: ApiStatusPendingEnum.LOADING,
    randonChar: null,
};

export const getCharacters = createAsyncThunk('getCharacters', async (obj?: { page: string, limit: string, race?: string, gender?: string, realm?: string}) => await getAllCharacters(obj));
export const getCharacterById = createAsyncThunk('getCharacterById', async (someID: string) => await getIDCharacter(someID));
export const getAll933Characters = createAsyncThunk('getAll933Characters', async () => await getAllCharacters());

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
        defineSearchedCharacter(state, action: PayloadAction<ICharacter | null>) {
            state.searchedCharacter = action.payload;
        },
        clearSearchedCharacter(state) {
            state.searchedCharacter = initialState.searchedCharacter;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(getCharacters.pending, (state) => {
            state.loadingStateAllChar = ApiStatusPendingEnum.LOADING;
          })
          .addCase(getCharacters.fulfilled, (state, action: PayloadAction<IResponseCharacter>) => {
            state.loadingStateAllChar = ApiStatusPendingEnum.LOAD;
            state.allCharacters = action.payload;
          })
          .addCase(getCharacters.rejected, (state) => {
            state.loadingStateAllChar = ApiStatusPendingEnum.ERROR;
          });
        builder.addCase(getCharacterById.pending, (state) => {
            state.loadingStateIDChar = ApiStatusPendingEnum.LOADING;
          })
          .addCase(getCharacterById.fulfilled, (state, action: PayloadAction<ICharacter[]>) => {
            state.loadingStateIDChar = ApiStatusPendingEnum.LOAD;
            state.randonChar = action.payload;
          })
          .addCase(getCharacterById.rejected, (state) => {
            state.loadingStateIDChar = ApiStatusPendingEnum.ERROR;
          });

          builder.addCase(getAll933Characters.pending, (state) => {
            state.loadingStateAll933Char = ApiStatusPendingEnum.LOADING;
          })
          .addCase(getAll933Characters.fulfilled, (state, action: PayloadAction<IResponseCharacter>) => {
            state.loadingStateAll933Char = ApiStatusPendingEnum.LOAD;
            state.all933Char = action.payload.docs;
          })
          .addCase(getAll933Characters.rejected, (state) => {
            state.loadingStateAll933Char = ApiStatusPendingEnum.ERROR;
          });
        },
});

export default charactersSlice.reducer;