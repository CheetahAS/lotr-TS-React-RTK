import React, { useState } from 'react';
import style from './LoginPage.module.scss'
import { Link } from "react-router-dom"
import { setCookie, removeCookie, getCookie } from 'typescript-cookie';


interface MainPageProps {
    logIn: () => void
}


const LoginPage:React.FC<MainPageProps> = ({logIn}) => {
    const [textFieldValue, setTextFieldValue] = useState<string>('')

    const textFieldHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTextFieldValue(event.target.value)
    }

    const buttonHandler = (textFieldValue: string) => {
        logIn();
        setCookie('name', textFieldValue);
        removeCookie('user');
    }

    return (
        <div className={style.login_page_outer_wrapper}>
                <h1>Welcome!</h1>
                <div className={style.login_page_inner_wrapper}>
                    <input 
                        className={style.login_input}
                        type="text" 
                        value={textFieldValue} 
                        placeholder="please enter your login"
                        onChange={textFieldHandler}
                    />
                    <Link to='/main'>
                        <button
                            className={style.login_btn}
                            onClick={() => buttonHandler(textFieldValue)}
                            disabled = {textFieldValue ? false : true}
                        >log in</button>
                    </Link>
                </div>
        </div>
    );
};

export default LoginPage;