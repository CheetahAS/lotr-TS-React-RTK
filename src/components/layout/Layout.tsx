import { NavLink } from 'react-router-dom';
import { useCallback } from 'react'
import style from './Layout.module.scss';
import { Cookies } from 'typescript-cookie';
import { ApiStatusPendingEnum, charactersSlice } from '../../store/inputReducer';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getAll933Characters } from '../../store/inputReducer';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const Layout:React.FC = () => {

  const {inputText, all933Char, loadingStateAll933Char} = useAppSelector(state => state.inputReducer);
  const {changeInputText, openModal, defineSearchedCharacter} = charactersSlice.actions;
  const dispatch = useAppDispatch();

  let inputedCharacter = all933Char?.find((chrs) => chrs.name.toLowerCase() === inputText.toLowerCase())


  const modalBtnHandler = () => {
    if(inputedCharacter && inputText) {
      dispatch( defineSearchedCharacter(inputedCharacter) );
      dispatch( openModal() );
    }
    else {
      dispatch( changeInputText('') );
    }
  };

    const inputFetch = useCallback(() => {
      if(all933Char.length < 933) {
        dispatch( getAll933Characters() );
      }
    }
    ,[all933Char.length]
  );

  if(loadingStateAll933Char === ApiStatusPendingEnum.ERROR) {
    alert('the server is overloaded, please try it later')
  }

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
                  
            </div>
            <div className={style.appBar__search_wrapper}>
              <Autocomplete
                  inputValue={inputText}
                    onInputChange={(event, newInputValue) => {
                      dispatch( changeInputText(newInputValue) );
                      }}
                    id="controllable-states-demo"
                    options={all933Char.map((item) => item.name)}
                    sx={{ width: '14rem', backgroundColor: 'white', borderRadius: '0.625rem'}}
                    renderInput={(params) => <TextField {...params} label="Enter a character"  
                    className={style.autocomplete}
                    onClick={inputFetch}
                    />}
                    
            />
              <button onClick={modalBtnHandler} disabled={!inputText}>find!</button>
            </div>
            <div className={style.appBar__logout}>
              <span>Hello, <strong>{String(Cookies.get('user'))}</strong>!</span>
              <NavLink to='/login' 
                className={style.appBar__logout__btn}>
                <button onClick={() => Cookies.remove('user')}>logout</button>
              </NavLink>
            </div>
        </div>
    </div>
  );
}

export default Layout;