import React, { FC, ReactNode, useState } from 'react';

import { Disclaimer } from '../components/Advocate';
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

const DisclaimerTemplate: FC<IMainProps> = ({ meta, data }) => {
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
        <Disclaimer
          companyEmailAddress={data.companyEmailAddress}
          lastUpdateDate={data.lastUpdateDate}
          SITEURL={data.SITEURL}
        />
      </div>

      {/* <Download downloadProp={props.data.downloadProp} /> */}
      {/* <Testimonial testimonialProp={props.data.testimonialProp} /> */}
      <MainFooter
        footerProp={data.footerProp}
        companyEmailAddress={data.companyEmailAddress}
        SITENAME={data.siteName}
      />
    </>
  );
};

export { DisclaimerTemplate };
