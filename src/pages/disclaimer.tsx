import React from 'react';

import { GetStaticProps } from 'next';

import { AppConfig } from '../config/AppConfig';
import { Meta } from '../layout/Meta';
import { DisclaimerTemplate } from '../templates/DisclaimerTemplate';
import { MainPageProps } from '../types/models';

const TermsNCondition: React.FC<MainPageProps> = (props: MainPageProps) => {
  Object.freeze(props);
  return (
    <DisclaimerTemplate
      data={props}
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    />
  );
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      navBarProp: AppConfig.navBarProp,
      playerProp: AppConfig.playerProp,
      downloadProp: AppConfig.downloadProp,
      testimonialProp: AppConfig.testimonialProp,
      siteName: AppConfig.siteName,
      companyEmailAddress: AppConfig.companyEmailAddress,
      footerProp: AppConfig.footerProp,
      lastUpdateDate: AppConfig.lastUpdateDate,
      SITEURL: AppConfig.SITEURL,
    },
  };
};

export default TermsNCondition;
