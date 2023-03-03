import { MainPageProps } from '../types/models';

// FIXME need to remove majority of the config to get static props and then pass to components.
const SITEURL = process.env.NEXT_PUBLIC_SITE_URL;
const EXE_URL = process.env.NEXT_PUBLIC_EXE_URL;
const PLUGIN_URL =
  'https://chrome.google.com/webstore/detail/tailwind-ninja/poljfncmfeeeiblffpifkfjnlajfgidf';
const SIGNIN_LINK = `${process.env.NEXT_PUBLIC_SITE_URL}auth/signin/`;
const ROOT_DOWNLOAD_LINK = process.env.NEXT_PUBLIC_EXE_URL;
const DOCUMENTATION_LINK = `${process.env.NEXT_PUBLIC_SITE_URL}documentation`;

const Download = [
  {
    osName: 'Mac',
    path: `${ROOT_DOWNLOAD_LINK}/css-to-tailwind-api-macos.zip`,
    download: 'tailwind-ninja.zip',
  },
  {
    osName: 'Windows',
    path: `${ROOT_DOWNLOAD_LINK}/css-to-tailwind-api-win.exe.zip`,
    download: 'tailwind-ninja.zip',
  },
  {
    osName: 'Linux',
    path: `${ROOT_DOWNLOAD_LINK}/css-to-tailwind-api-linux.zip`,
    download: 'tailwind-ninja.zip',
  },
];

const AppConfig: MainPageProps = {
  SITEURL,
  SIGNIN_LINK,
  ROOT_DOWNLOAD_LINK,
  DOCUMENTATION_LINK,
  EXE_URL,
  PLUGIN_URL,
  lastUpdateDate: 'Last updated January 26, 2023',
  siteName: 'Expertia',
  authurl: 'http://localhost:3000/auth/signin',
  title: 'Expertia',
  description: 'Expertia helps you convert a web app to tailwind from CSS.',
  locale: 'en',
  companyEmailAddress: 'tailwindninja@gmail.com',
  navBarProp: {
    logoLink: SITEURL,
    logoImageDefaultTheme: '/images/expertiaLogotext.png',
    logoimageDarkTheme: '/images/expertiaLogotext.png',
    mainlinks: [],
    bottomlinks: [],
  },
  playerProp: {
    heroProp: {
      heroTitlePOne: 'One Click ------->',
      heroTitlePTwo: 'Tailwind migration',
      heroTitlePThree: 'of web component',
      heroDescription:
        'Helping you maximize your produtivity for better business in the constant technological evolution',
      heroButtonOne: 'Take a Quick Look',
      heroButtonTwo: 'Getting Started',
      heroImage: {
        src: '\\images\\Hero.png',
        alt: 'Tailwind Hero Image',
      },
    },
    descriptionProp: {
      title: 'Great for transitioning CSS website to tailwind',
      subTitle:
        'Learning and converting an app to another tech stack takes time, Expertia is right there to help you shift from CSS styles to tailwind utility classes',
      image: {
        src: '/images/Hero.png',
        alt: '...',
      },
      cardOne: {
        title: 'Tailwind Classes',
        description:
          'Translate Normal CSS Components to Tailwind CSS on the fly.',
      },
      cardTwo: {
        title: 'Missing CSS Styles',
        description:
          'No need to worry we will figure out all the missing tailwind classes for you.',
      },
      cardThree: {
        title: 'CSS Styles',
        description: 'Get All CSS styles for a given component.',
      },
      cardFour: {
        title: 'CSS Components',
        description:
          'Notus JS comes with a huge number of Fully Coded CSS components.',
      },
    },
    subTitleTimer: [
      {
        text: 'Wanna migrate to the best utility-first CSS framework',
        timer: 1,
      },
      {
        text: 'We are here to assist you with the same',
        timer: 3,
      },
      {
        text: 'Now extract tailwind classes in few simple steps',
        timer: 5.5,
      },
      {
        text: 'Install the Expertia plugin',
        timer: 8,
      },
      {
        text: 'Click The Button to start Expertia', // Startit
        timer: 12,
      },
      {
        text: 'Place Your Cursor over the Element', // Hoverit
        timer: 14,
      },
      {
        text: 'Click V/G to get the tailwind CSS of Outlined Element.', // Clickit
        timer: 20,
      },
      {
        text: 'Tailwind classes for the outlined element is ready.', // That'sit
        timer: 26,
      },
      {
        text: 'Get Missing Tailwind classes ', // That'sit
        timer: 28,
      },
      {
        text: 'Hooray!! Create the exact same element for your own', // Useit
        timer: 30,
      },
    ],
    titleTimer: [
      {
        text: 'Expertia',
        timer: 1,
      },
      {
        text: 'Start IT',
        timer: 12,
      },
      {
        text: 'Hover IT',
        timer: 14,
      },
      {
        text: 'Click IT',
        timer: 20,
      },
      {
        text: 'That"s it',
        timer: 26,
      },
      {
        text: 'Use IT',
        timer: 30,
      },
    ],
  },
  testimonialProp: {
    testimonialOne: {
      name: 'Jane Doe',
      title: 'Product Designer',
      description:
        'Lorem ipsum dolor sitamet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus.',
    },
    testimonialTwo: {
      name: 'Jane Doe',
      title: 'Product Designer',
      description:
        'Lorem ipsum dolor sitamet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus.',
    },
    testimonialThree: {
      name: 'Jane Doe',
      title: 'Product Designer',
      description:
        'Lorem ipsum dolor sitamet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus.',
    },
  },
  downloadProp: {
    title: 'Try Flowbite Platform for 30 days. No credit card required.',
    buttonText: {
      textone: 'Google',
      texttwo: 'Login',
    },
  },
  footerProp: {
    footerlinks: [
      {
        href: `${SITEURL}`,
        name: 'about',
        active: false,
      },
      {
        href: `${SITEURL}/documentation/`,
        name: 'docs',
        active: false,
      },
      {
        href: `${SITEURL}/terms-n-condition/`,
        name: 'terms',
        active: false,
      },
      {
        href: `${SITEURL}/privacy-policy/`,
        name: 'privacy-policy',
        active: false,
      },
      {
        href: `${SITEURL}/disclaimer/`,
        name: 'disclaimer',
        active: false,
      },
      {
        href: `${SITEURL}/return-policy`,
        name: 'return-policy',
        active: false,
      },
    ],
  },
};

export { Download, AppConfig };
