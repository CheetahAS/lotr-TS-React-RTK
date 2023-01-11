import React, {useCallback} from "react";
import CharacterCardSmall from "../characterCardSmall/CharacterCardSmall";
import style from "./Modal.module.scss";
import { charactersSlice } from '../../store/inputReducer';
import { useAppDispatch, useAppSelector } from '../../store/hooks';




const Modal: React.FC = () => {
  const {isModalVisible} = useAppSelector(state => state.inputReducer);
  const {changeInputText, closeModal, clearSearchedCharacter} = charactersSlice.actions;
  const dispatch = useAppDispatch();

  const closeCard = useCallback(() => {
            dispatch( closeModal() );
            dispatch( changeInputText('') );
            dispatch( clearSearchedCharacter() );
  }, [dispatch])

  return (
<>
    {isModalVisible && (
      <div className={style.modal_container}>
        <div className={style.modal_window}>
          <CharacterCardSmall/>
        </div>
        <button onClick={closeCard}><div className={style.cls_btn}/></button>
      </div>
    )}
  </>
  )
};

export default Modal;
