import React from 'react';

import { signIn } from 'next-auth/react';

import { Logo } from '../Logo';

interface Provider {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
}

interface Props {
  title: string;
  providers: Provider[];
}

const Auth: React.FC<Props> = ({ providers, title }) => {
  return (
    <div className="relative bg-gradient-to-br py-16">
      <div className="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-xl bg-white shadow-xl">
            {/* Signin in form */}
            <div className="p-6 sm:p-16">
              <div className="space-y-4">
                <Logo />
                <h2 className="mb-8 text-2xl font-bold text-cyan-900">
                  Sign in to unlock the <br /> best of {title}.
                </h2>
              </div>

              <div className="mt-8 grid space-y-4">
                <>
                  {Object.values(providers).map((provider) => (
                    <button
                      key={provider.name}
                      onClick={() => {
                        signIn(provider.id);
                      }}
                      className="group h-12 rounded-full border-2 border-gray-300 px-6 transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                    >
                      <div className="relative flex items-center justify-center space-x-4">
                        <img
                          src="/assets/svg/google.svg"
                          className="absolute left-0 w-5"
                          alt="google logo"
                        />
                        <span className="block w-max text-sm font-semibold tracking-wide text-gray-700 transition duration-300 group-hover:text-blue-600 sm:text-base">
                          Candidate Login
                        </span>
                      </div>
                    </button>
                  ))}
                </>
              </div>

              <div className="mt-32 space-y-4 text-center text-gray-600 sm:-mb-8">
                <p className="text-xs">
                  By proceeding, you agree to our{' '}
                  <a href="#" className="underline">
                    Terms of Use
                  </a>{' '}
                  and confirm you have read our{' '}
                  <a href="#" className="underline">
                    Privacy and Cookie Statement
                  </a>
                  .
                </p>
                <p className="text-xs">
                  This site is protected by reCAPTCHA and the{' '}
                  <a href="#" className="underline">
                    Google Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="#" className="underline">
                    Terms of Service
                  </a>{' '}
                  apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Auth };
