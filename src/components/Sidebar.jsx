import React, { useState } from 'react';
import style from './style/Sidebar.module.scss';
import { useGlobalContext } from '../context/AppContext';
const Sidebar = () => {
  const { state } = useGlobalContext();

  return (
    <div className={style.container}>
      <div
        className={`${style.red} ${state.showSidebar && style.showRed}`}
      ></div>
      <div
        className={`${style.blue} ${state.showSidebar && style.showBlue}`}
      ></div>
      <div className={`${style.wrapper} ${state.showSidebar && style.show}`}>
        <ul className={style.listItems}>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
          <li>PRODUCTS</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
