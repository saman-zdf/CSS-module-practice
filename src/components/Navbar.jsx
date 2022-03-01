import React from 'react';
import style from './style/Navbar.module.scss';
import { CgProfile } from 'react-icons/cg';
import { useGlobalContext } from '../context/AppContext';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const { state, dispatch } = useGlobalContext();
  console.log(state);
  const handleClick = () => {
    dispatch({ type: 'SHOW_SIDEBAR' });
  };
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.logo}>
          {state.showSidebar ? (
            <FaTimes className={style.icon} onClick={handleClick} />
          ) : (
            <FaBars className={style.icon} onClick={handleClick} />
          )}
          <h1>Logo</h1>
        </div>
        <div className={style.profile}>
          <h3>John</h3>
          <CgProfile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
