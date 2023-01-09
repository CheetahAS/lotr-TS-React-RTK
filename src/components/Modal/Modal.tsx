import React from "react";
import CharacterCardSmall from "../characterCardSmall/CharacterCardSmall";
import style from "./Modal.module.scss";
import { ICharacter } from "../../services/types";
import { someSlice } from '../../store/inputReducer';
import { useAppDispatch, useAppSelector } from '../../store/hooks';




const Modal: React.FC = () => {
  const {inputText, isModalVisible} = useAppSelector(state => state.inputReducer);
  const {changeInputText, closeModal, clearSearchedCharacter} = someSlice.actions;
  const dispatch = useAppDispatch();

  return (
<>
    {isModalVisible && (
      <div className={style.modal_container}>
        <div className={style.modal_window}>
          <CharacterCardSmall/>
        </div>
        <button onClick={() => {
            dispatch( closeModal() )
            dispatch( changeInputText('') )
            dispatch ( clearSearchedCharacter() );
            }}>x</button>
      </div>
    )}
  </>
  )
};

export default Modal;
