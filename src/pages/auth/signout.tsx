import { signOut } from 'next-auth/react';

import { Logo } from '../../components/Logo';
import { AppConfig } from '../../config/AppConfig';

interface Props {
  title: string;
}

const SignOut: React.FC<Props> = ({ title }) => {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-sky-50 to-gray-200 py-16">
      <div className="relative bg-gradient-to-br from-sky-50 to-gray-200 py-16">
        <div className="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="rounded-xl bg-white shadow-xl">
              <div className="p-6 sm:p-16">
                <div className="space-y-4">
                  <Logo />
                  <h2 className="mb-8 text-2xl font-bold text-cyan-900">
                    Sign in to unlock the <br /> best of {title}.
                  </h2>
                </div>

                <div className="mt-16 grid space-y-4">
                  <button
                    onClick={() => {
                      signOut();
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
                        Sign Out
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// FIXME need to try static props in her
export async function getServerSideProps() {
  return {
    props: {
      title: AppConfig.title,
    },
  };
}

export default SignOut;
