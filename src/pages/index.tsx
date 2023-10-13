import React from 'react';

import { GetStaticProps } from 'next';

import { AppConfig } from '../config/AppConfig';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { MainPageProps } from '../types/models';

const Index: React.FC<MainPageProps> = (props) => {
  Object.freeze(props);
  return (
    <Main
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
      siteName: AppConfig.siteName,
      companyEmailAddress: AppConfig.companyEmailAddress,
    },
  };
};

export default Index;
