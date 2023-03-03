import React from 'react';

import { GetStaticProps } from 'next';

import { AppConfig } from '../config/AppConfig';
import { Meta } from '../layout/Meta';
import { ReturnPolicyTemplate } from '../templates/ReturnPolicyTemplate';
import { MainPageProps } from '../types/models';

const ReturnPolicy: React.FC<MainPageProps> = (props) => {
  Object.freeze(props);
  return (
    <ReturnPolicyTemplate
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

export default ReturnPolicy;
