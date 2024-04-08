import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';
import './MainNavigation.css';

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawer = () => {
    setDrawerIsOpen(true);
    console.log('OPEN drawer', drawerIsOpen);
  };

  const closeDrawer = () => {
    setDrawerIsOpen(false);
    console.log('close drawer', drawerIsOpen);
  };

  return (
  <>
    {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
    <SideDrawer show={drawerIsOpen}>
      <nav className="main-navigation__drawer-nav">
        <NavLinks />
      </nav>
    </SideDrawer>

    <MainHeader>
      <button className="main-navigation__menu-btn" onClick={openDrawer}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <h1 className="main-navigation__title">
        <Link to="/">TrendVibe</Link>
      </h1>
      <nav className="main-navigation__header-nav">
        <NavLinks />
      </nav>
    </MainHeader>
  </>
  );
};
export default MainNavigation;
