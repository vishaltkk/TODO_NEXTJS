/*
 * @TODO improve the transition for the text
 */
import React, { FC, useEffect, useState } from 'react';

import { NavBarProps } from '../../types/models';
import openInNewTab from '../../utils/useNewTabOpener';
import styles from './Navbar.module.css';
import { NavLogo } from './NavLogo';

const NavBarEl: FC<{
  logolink: string;
  color: string;
  toggled: boolean;
}> = (props): JSX.Element => {
  // const { color, toggled, onToggle } = props;
  const { color } = props;
  return (
    <div
      className={`flex items-center justify-between ${
        color === 'white' ? 'bg-gradient-to-b from-gray-300 to-white' : ''
      } px-5 pt-4 sm:px-10 md:px-16 lg:px-32`}
    >
      <a href={props.logolink}>
        <NavLogo color={color} />
      </a>
      <div className={styles.div_86758063485}>
        <a className={styles.a_93597594673}>Request a demo </a>
        <a className={styles.a_69010943852}>Jobs </a>
        <a className={styles.a_32885897673}>Login </a>
        <button
          type="submit"
          className={styles.button_92013957928}
          onClick={(e) => {
            e.preventDefault();
            openInNewTab('/auth/signin');
          }}
        >
          Get Started{' '}
        </button>{' '}
      </div>
    </div>
  );
};

const Navbar: FC<{
  navbarOpen: boolean;
  setNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navBarProp: NavBarProps;
}> = (props) => {
  const [height, setHeight] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    window.addEventListener('scroll', showNavWhileScroll);
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return () => window.removeEventListener('scroll', showNavWhileScroll);
  });

  const showNavWhileScroll = () => {
    const heightToHideFrom = 200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const oldHeight = height;
    setHeight(winScroll);
    if (oldHeight > winScroll && winScroll > heightToHideFrom) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const [show, setShow] = useState(true);
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  useEffect(() => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > 100) {
      setShow(false);
    }
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          userSelect: 'auto',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: '100vw',
          height: '100vh',
        }}
        className={`mt-10 h-20 w-full pb-4 lg:h-24
            ${isVisible ? `visible` : `invisible`}
            ${props.navbarOpen ? `scrollerNavOpen` : `scrollerNav`}`}
      >
        <NavBarEl
          color="white"
          toggled={props.navbarOpen}
          logolink={props.navBarProp.logoLink}
        />
      </div>
      {show && (
        <div
          className={`nav mt-10 h-20 lg:h-24 ${
            props.navbarOpen ? `nav_bg_open` : `nav_bg_close`
          }
        `}
        >
          <div className={`h-16`}>
            <NavBarEl
              color={props.navbarOpen ? 'white' : 'black'}
              toggled={props.navbarOpen}
              logolink={props.navBarProp.logoLink}
            />
          </div>
        </div>
      )}
    </>
  );
};

export { Navbar };
