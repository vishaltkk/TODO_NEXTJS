import React, { FC, ReactNode, useState } from 'react';

import { ReturnPolicy } from '../components/Advocate';
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

const ReturnPolicyTemplate: FC<IMainProps> = ({ meta, data }) => {
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
        <ReturnPolicy
          companyEmailAddress={data.companyEmailAddress}
          lastUpdateDate={data.lastUpdateDate}
        />
      </div>
      <MainFooter
        footerProp={data.footerProp}
        companyEmailAddress={data.companyEmailAddress}
        SITENAME={data.siteName}
      />
    </>
  );
};

export { ReturnPolicyTemplate };
