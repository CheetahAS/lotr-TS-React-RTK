import { NavLink } from 'react-router-dom';
import { ChangeEvent, useState } from 'react'
import style from './Layout.module.scss';
import { getCookie } from 'typescript-cookie';


interface LayoutProps {
  setIsModalVisible: (boolean: boolean) => void
  searchedCharacter: (charName:string) => void
}



const Layout:React.FC<LayoutProps> = ({setIsModalVisible, searchedCharacter}) => {

  const [inputValue, setInputValue] = useState<string>('');

  const modalBtnHandler = () => {
    if(inputValue) {
      setIsModalVisible(true);
      searchedCharacter(inputValue);
      setInputValue('')
    }
  };

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
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
              <input className={style.appBar__search} placeholder="enter name of the char." onChange={inputHandler} value={inputValue}/>
              <button onClick={modalBtnHandler} disabled={!inputValue? true: false}>find!</button>
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