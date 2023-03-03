interface MainLink {
  href: string;
  name: string;
}

interface BootomLink {
  href: string;
  name: string;
  active: boolean;
}

interface NavBarProps {
  logoLink: string;
  logoImageDefaultTheme: string;
  logoimageDarkTheme: string;
  mainlinks: MainLink[];
  bottomlinks: BootomLink[];
}

interface HeroProps {
  heroTitlePOne: string;
  heroTitlePTwo: string;
  heroTitlePThree: string;
  heroDescription: string;
  heroButtonOne: string;
  heroButtonTwo: string;
  heroImage: {
    src: string;
    alt: string;
  };
}

interface DescriptionProp {
  title: string;
  subTitle: string;
  image: {
    src: string;
    alt: string;
  };
  cardOne: {
    title: string;
    description: string;
  };
  cardTwo: {
    title: string;
    description: string;
  };
  cardThree: {
    title: string;
    description: string;
  };
  cardFour: {
    title: string;
    description: string;
  };
}

interface TextTimer {
  text: string;
  timer: number;
}

interface PlayerProps {
  heroProp: HeroProps;
  descriptionProp: DescriptionProp;
  subTitleTimer: TextTimer[];
  titleTimer: TextTimer[];
}

interface DownloadProps {
  title: string;
  buttonText: {
    textone: string;
    texttwo: string;
  };
}

interface FooterLink {
  href: string;
  name: string;
  active: boolean;
}

interface TestimonialProps {
  testimonialOne: {
    name: string;
    title: string;
    description: string;
  };
  testimonialTwo: {
    name: string;
    title: string;
    description: string;
  };
  testimonialThree: {
    name: string;
    title: string;
    description: string;
  };
}

interface FooterProp {
  footerlinks: FooterLink[];
}

interface MainPageProps {
  SITEURL: string;
  SIGNIN_LINK: string;
  PLUGIN_URL: string;
  EXE_URL: string;
  ROOT_DOWNLOAD_LINK: string;
  DOCUMENTATION_LINK: string;
  siteName: string;
  authurl: string; // FIXME : Need to add a url checker.
  title: string;
  locale: string; // FIXME : Need to add type for locale
  description: string;
  lastUpdateDate: string;
  companyEmailAddress: string;
  navBarProp: NavBarProps;
  playerProp: PlayerProps;
  downloadProp: DownloadProps;
  testimonialProp: TestimonialProps;
  footerProp: FooterProp;
}

export type {
  BootomLink,
  MainLink,
  NavBarProps,
  HeroProps,
  PlayerProps,
  DescriptionProp,
  DownloadProps,
  FooterLink,
  TestimonialProps,
  FooterProp,
  MainPageProps,
};
