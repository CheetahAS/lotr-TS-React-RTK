import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import {useState} from 'react'
import style from './NavBar.module.scss';
import { getCookie, removeCookie } from 'typescript-cookie';


export default function NavBar() {

  return (
      <div className={style.navBar_outer_wrapper}>
        <div className={style.navBar_inner_wrapper}>
            <div className={style.appBar}>
                  <Link to='/all_lotr_characters' className={style.appBar__item}>all characters</Link>
                  <Link to='/randon_character' className={style.appBar__item}>random character</Link>
                  <Link to='/' className={style.appBar__item}>some my own tab</Link>
            </div>
            <div className={style.appBar__search_wrapper}>
              <input className={style.appBar__search} placeholder="a character..."/>
            </div>
            <div className={style.appBar_logout}>
              <span>Hello, <strong>{getCookie('name')}</strong>!</span>
              <Link to='/' 
                className={style.appBar__logout__btn}>
                <button>logout</button>
              </Link>
            </div>
        </div>
    </div>
  );
}