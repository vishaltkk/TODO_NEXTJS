import { FC } from 'react';

import { DescriptionProp } from '../../types/models';

const Description: FC<{ descriptionProp: DescriptionProp }> = (props) => {
  return (
    <div className="py-24 dark:bg-gray-900">
      <div className="sm:px-10 md:px-16 lg:px-32">
        <div className="flex flex-wrap items-center">
          <div className="mx-auto w-10/12 sm:px-12 md:w-6/12 md:px-4 lg:w-4/12">
            <div className="mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-sky-400 shadow-lg">
              <img
                // FIXME need to add a fall back image component via an api call to the db by id
                src={props.descriptionProp.image.src || ''}
                alt={props.descriptionProp.image.alt || ''}
                className="w-full rounded-t-lg align-middle"
              />
              <blockquote className="mb-4 p-8">
                <h4 className="text-xl font-bold text-white">
                  {props.descriptionProp.title}
                </h4>
                <p className="text-md mt-2 font-light text-white">
                  {props.descriptionProp.subTitle}
                </p>
              </blockquote>
            </div>
          </div>

          <div className="w-full px-4 md:w-6/12">
            <div className="flex flex-wrap">
              <div className="w-full px-4 md:w-6/12">
                <div className="mt-4 flex flex-col">
                  <div className="flex-auto px-4 py-5">
                    <h6 className="mb-1 text-xl font-semibold">
                      {props.descriptionProp.cardOne.title}
                    </h6>
                    <p className="text-blueGray-500 mb-4">
                      {props.descriptionProp.cardOne.description}
                    </p>
                  </div>
                </div>
                <div className="flex min-w-0 flex-col">
                  <div className="flex-auto px-4 py-5">
                    <h6 className="mb-1 text-xl font-semibold">
                      {props.descriptionProp.cardTwo.title}
                    </h6>
                    <p className="text-blueGray-500 mb-4">
                      {props.descriptionProp.cardTwo.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-6/12">
                <div className="mt-4 flex min-w-0 flex-col">
                  <div className="flex-auto px-4 py-5">
                    <h6 className="mb-1 text-xl font-semibold">
                      {props.descriptionProp.cardThree.title}
                    </h6>
                    <p className="text-blueGray-500 mb-4">
                      {props.descriptionProp.cardThree.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Description };
