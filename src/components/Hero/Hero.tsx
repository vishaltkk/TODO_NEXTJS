import React, { FC } from 'react';

import { AppConfig } from '../../config/AppConfig';
import { HeroProps } from '../../types/models';
import openInNewTab from '../../utils/useNewTabOpener';
import styles from './Hero.module.css';

interface HeroComponent {
  scrollToVideo: () => void;
  heroProp: HeroProps;
}

const Hero: FC<HeroComponent> = ({ scrollToVideo, heroProp }) => {
  return (
    <div className="mx-auto flex h-screen w-full flex-wrap items-center pb-20 font-sans sm:pl-10 md:pl-16 lg:pl-32">
      <div className="px-3 lg:w-2/5">
        <div className="mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left">
          <h2 className="mb-4 text-left text-3xl font-bold lg:text-5xl">
            {heroProp.heroTitlePOne} <br />
            <span className="text-4xl text-purple-900 lg:text-5xl">
              {heroProp.heroTitlePTwo}
            </span>{' '}
            <br />
            {heroProp.heroTitlePThree}
          </h2>

          <p className="visible mx-0 mt-3 mb-0 text-left text-sm leading-relaxed text-gray-700">
            {heroProp.heroDescription}
          </p>
        </div>
        <button
          onClick={scrollToVideo}
          className={`${styles.heroButton} mr-3 inline-flex items-center justify-center rounded-lg bg-gray-400 px-5 py-3 text-center text-base font-medium text-black hover:bg-blue-100 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-400`}
        >
          {heroProp.heroButtonOne}
          <svg
            className="ml-2 -mr-1 h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            openInNewTab(AppConfig.DOCUMENTATION_LINK);
          }}
          className={`${styles.heroButton} inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 focus:ring-2 dark:border-gray-700 dark:hover:bg-gray-100 dark:focus:ring-gray-400`}
        >
          {heroProp.heroButtonTwo}
        </button>
      </div>

      <div className="mb-12 w-full lg:mb-0 lg:w-3/5">
        <div className="flex items-center justify-center">
          {/* FIXME need to add a fall back image component */}
          <img
            src={heroProp.heroImage?.src || ''}
            alt={heroProp.heroImage?.alt || ''}
          ></img>
        </div>
      </div>
    </div>
  );
};

export { Hero };
