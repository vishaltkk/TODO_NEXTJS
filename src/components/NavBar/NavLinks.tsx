import React from 'react';

import { MainLink, BootomLink } from '../../types/models';

export const NavLinks: React.FC<{
  mainlinks: MainLink[];
  bottomlinks: BootomLink[];
}> = (props) => {
  return (
    <div className="px-5 sm:px-10 md:px-16 lg:px-32">
      <div className="h-full pt-14 lg:py-20">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 lg:col-span-1">
            {props.mainlinks.map(
              (
                link: {
                  href: string | undefined;
                  name: string;
                },
                index: React.Key | null | undefined
              ) => {
                return (
                  <h5
                    key={index}
                    className={`fade_in_text pb-2 text-4xl font-extralight hover:text-gray-300 sm:text-5xl`}
                  >
                    <a href={link.href}>{link.name}</a>
                  </h5>
                );
              }
            )}

            <div className="flex flex-wrap py-12">
              {/* {props.bottomlinks.map(
                (
                  link: {
                    href: string;
                    active: any;
                    name: string;
                  },
                  index: React.Key | null | undefined
                ) => {
                  return (
                    <a
                      key={index}
                      href={link.href}
                      className={
                        link.active
                          ? 'bg-gradient-to-br from-pink-400 to-red-600 bg-clip-text pr-10 text-2xl font-extralight text-transparent sm:text-3xl'
                          : 'pr-10 text-2xl font-extralight text-white hover:text-gray-300 sm:text-3xl'
                      }
                    >
                      {link.name}
                    </a>
                  );
                }
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
