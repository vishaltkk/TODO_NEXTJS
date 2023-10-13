import { MainPageProps } from '../types/models';

// FIXME need to remove majority of the config to get static props and then pass to components.
const SITEURL = process.env.NEXT_PUBLIC_SITE_URL;

const AppConfig: MainPageProps = {
  SITEURL,
  lastUpdateDate: 'Last updated January 26, 2023',
  siteName: 'logTodo',
  authurl: 'http://localhost:3000/auth/signin',
  title: 'logTodo',
  description: 'logTodo helps you convert a web app to tailwind from CSS.',
  locale: 'en',
  companyEmailAddress: 'tailwindninja@gmail.com',
};

export { AppConfig };
