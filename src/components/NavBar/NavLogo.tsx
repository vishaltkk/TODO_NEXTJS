import React, { FC } from 'react';

import { AppConfig } from '../../config/AppConfig';

interface NavLogoProps {
  color: string;
}

export const NavLogo: FC<NavLogoProps> = ({ color }) => {
  if (color === 'black') {
    return (
      <img
        className="float-left h-10 object-cover md:h-12 lg:h-16"
        src={AppConfig.navBarProp.logoImageDefaultTheme}
        alt="title"
      />
    );
  }
  return (
    <img
      className="float-left h-10 object-cover md:h-12 lg:h-16"
      src={AppConfig.navBarProp.logoimageDarkTheme}
      alt="title"
    />
  );
};
