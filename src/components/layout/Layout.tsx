import { NavLink } from 'react-router-dom';
import { ChangeEvent, useState } from 'react'
import style from './Layout.module.scss';
import { getCookie } from 'typescript-cookie';
import { someSlice } from '../../store/inputReducer';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useEffect } from 'react';
import { getAllCharacters } from '../../services/Api';


const Layout:React.FC = () => {

  const {inputText, isModalVisible, allCharacters} = useAppSelector(state => state.inputReducer);
  const {changeInputText, openModal, defineSearchedCharacter, fetchAllCharacters, clearSearchedCharacter} = someSlice.actions;
  const dispatch = useAppDispatch();

  const inputedCharacter = allCharacters.find((chrs) => chrs.name.toLowerCase() === inputText.toLowerCase())

  const modalBtnHandler = () => {
    if(inputedCharacter && inputText) {
      dispatch( defineSearchedCharacter(inputedCharacter) );
      dispatch( openModal() );
    }
    else {
      dispatch( changeInputText('') );
    }
  };

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch( changeInputText(event.currentTarget.value) );
  };

  return (
      <div className={style.navBar_outer_wrapper}>
        <div className={style.navBar_inner_wrapper}>
            <div className={style.appBar}>

                  <NavLink to='/main' className={({isActive}) => {
                    const linkClasses = [style.appBar__item];
                    if(isActive) linkClasses.push(style.appBar__item_active)
                    return linkClasses.join(" ");
                  }}>
                    main page
                    </NavLink>

                  <NavLink to='/all-lotr-characters' className={({isActive}) => {
                    const linkClasses = [style.appBar__item];
                    if(isActive) linkClasses.push(style.appBar__item_active)
                    return linkClasses.join(" ");
                  }}>all characters</NavLink>

                  <NavLink to='/random-character' className={({isActive}) => {
                    const linkClasses = [style.appBar__item];
                    if(isActive) linkClasses.push(style.appBar__item_active)
                    return linkClasses.join(" ");
                  }}>random character</NavLink>

                  <NavLink to='/login' className={({isActive}) => {
                    const linkClasses = [style.appBar__item];
                    if(isActive) linkClasses.push(style.appBar__item_active)
                    return linkClasses.join(" ");
                  }}>some my own tab</NavLink>
                  
            </div>
            <div className={style.appBar__search_wrapper}>
              <input className={style.appBar__search} placeholder="enter name of the char." onChange={inputHandler} value={inputText}/>
              <button onClick={modalBtnHandler} disabled={!inputText}>find!</button>
            </div>
            <div className={style.appBar__logout}>
              <span>Hello, <strong>{getCookie('name')}</strong>!</span>
              <NavLink to='/login' 
                className={style.appBar__logout__btn}>
                <button>logout</button>
              </NavLink>
            </div>
        </div>
    </div>
  );
}

export default Layout;