import React from "react";
import CharacterCardSmall from "../characterCardSmall/CharacterCardSmall";
import style from "./Modal.module.scss";
import { ICharacter } from "../../services/types";

interface ModalProps {
  isModalVisible: boolean;
  setIsModalVisible: (value: boolean) => void;
  character: ICharacter;
}

const Modal: React.FC<ModalProps> = ({
  isModalVisible,
  setIsModalVisible,
  character,
}) => (
  <>
    {isModalVisible && (
      <div className={style.modal_container}>
        <div className={style.modal_window}>
          <CharacterCardSmall characterSmall={character} key={character._id} />
        </div>
        <button onClick={() => setIsModalVisible(false)}>x</button>
      </div>
    )}
  </>
);

export default Modal;
