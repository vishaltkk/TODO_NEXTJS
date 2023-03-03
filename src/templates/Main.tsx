import React, { FC, ReactNode, useState } from 'react';

import { DashBoard } from '../components/DashBoard/Dashboard';
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

const Main: FC<IMainProps> = ({ meta, data }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      {meta}
      <Navbar
        navbarOpen={navbarOpen}
        setNavbarOpen={setNavbarOpen}
        navBarProp={data.navBarProp}
      />
      <div
        className={`${navbarOpen ? `invisible` : `visible`}`}
        style={{ overflowX: 'hidden' }}
      ></div>
      <div className="h-24 lg:h-0" />
      <div className={`${navbarOpen ? `invisible` : `visible`}`}>
        <DashBoard />
      </div>
    </>
  );
};

export { Main };
