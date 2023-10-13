import React, { FC, ReactNode } from 'react';

import { DashBoard } from '../components/DashBoard/Dashboard';
import { MainFooter } from '../components/MainFooter';
import { Navbar } from '../components/NavBar';
import { MainPageProps } from '../types/models';

declare global {
  namespace JSX {
    interface Element extends React.ReactElement<any, any> {}
  }
}

type IMainProps = {
  meta: ReactNode;
  data: MainPageProps;
};

// eslint-disable-next-line unused-imports/no-unused-vars
const Main: FC<IMainProps> = ({ meta, data }) => {
  return (
    <>
      {meta}
      <Navbar />
      <DashBoard />
      <MainFooter />
    </>
  );
};

export { Main };
