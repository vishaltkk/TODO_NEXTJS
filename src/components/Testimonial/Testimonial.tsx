import { TestimonialProps } from '../../types/models';

const Testimonial: React.FC<{ testimonialProp: TestimonialProps }> = (
  props
) => (
  <div className="white py-16">
    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <h2 className="mb-12 text-center text-2xl font-bold text-gray-900 md:text-4xl">
        What&apos;s our customers say
      </h2>
      <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
        <div className="row-span-2 rounded-xl border border-gray-100 bg-gray-50 p-6 text-center sm:p-8">
          <div className="flex h-full flex-col justify-center space-y-4">
            <img
              className="mx-auto h-20 w-20 rounded-full"
              src="/images/Hero.png"
              alt="Hero"
              height="220"
              width="220"
              loading="lazy"
            />
            <p className="text-gray-600 md:text-xl">
              {' '}
              <span className="font-serif">&quot;</span>{' '}
              {props.testimonialProp.testimonialOne.description}:{' '}
              <span className="font-serif">&quot;</span>
            </p>
            <div>
              <h6 className="text-lg font-semibold leading-none">
                {props.testimonialProp.testimonialOne.name}
              </h6>
              <span className="text-xs text-gray-500">
                {props.testimonialProp.testimonialOne.title}
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-100 bg-gray-50 p-6 sm:flex sm:space-x-8 sm:p-8">
          <img
            className="mx-auto h-20 w-20 rounded-full"
            src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp"
            alt="user avatar"
            height="220"
            width="220"
            loading="lazy"
          />
          <div className="mt-4 space-y-4 text-center sm:mt-0 sm:text-left">
            <p className="text-gray-600">
              {' '}
              <span className="font-serif">&quot;</span>{' '}
              {props.testimonialProp.testimonialTwo.description}.{' '}
              <span className="font-serif">&quot;</span>
            </p>
            <div>
              <h6 className="text-lg font-semibold leading-none">
                {props.testimonialProp.testimonialTwo.name}
              </h6>
              <span className="text-xs text-gray-500">
                {props.testimonialProp.testimonialTwo.title}
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-gray-100 bg-gray-50 p-6 sm:flex sm:space-x-8 sm:p-8">
          <img
            className="mx-auto h-20 w-20 rounded-full"
            src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/third_user.webp"
            alt="user avatar"
            height="220"
            width="220"
            loading="lazy"
          />
          <div className="mt-4 space-y-4 text-center sm:mt-0 sm:text-left">
            <p className="text-gray-600">
              {' '}
              <span className="font-serif">&quot;</span>{' '}
              {props.testimonialProp.testimonialThree.title}{' '}
              <span className="font-serif">&quot;</span>
            </p>
            <div>
              <h6 className="text-lg font-semibold leading-none">
                {props.testimonialProp.testimonialThree.name}
              </h6>
              <span className="text-xs text-gray-500">
                {props.testimonialProp.testimonialThree.title}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { Testimonial };
