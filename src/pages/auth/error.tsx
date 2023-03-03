import { Logo } from '../../components/Logo';
import { AppConfig } from '../../config/AppConfig';
import openInNewTab from '../../utils/useNewTabOpener';

interface Props {
  title: string;
}

const Error: React.FC<Props> = ({ title }) => {
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
                    <span id="content1">OOP&apos;S Something Went Wrong</span>
                    <br /> best of {title}.
                  </h2>

                  <button
                    className="flex w-full items-center justify-center rounded-lg border bg-gray-900 py-2"
                    onClick={(e) => {
                      e.preventDefault();
                      openInNewTab(AppConfig.DOCUMENTATION_LINK);
                    }}
                  >
                    <img
                      src="/assets/svg/chrome.svg"
                      className="w-7 md:w-8"
                      alt="chrome-extension"
                    />
                    <div className="ml-3 text-left">
                      <p className="text-xs text-gray-200">Download our </p>
                      <p className="text-sm md:text-base"> Plugin </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      className="w-10 pl-4 md:w-12"
                      fill="white"
                    >
                      <path d="M695.04 520.32l-318.08-320c-12.8-12.8-33.28-12.8-45.44 0-12.8 12.8-12.8 33.28 0 45.44l293.12 295.04-303.36 298.88c-12.8 12.8-12.8 33.28 0 45.44 12.8 12.8 33.28 12.8 46.08 0l318.72-314.24C699.52 559.36 712.32 538.88 695.04 520.32z" />
                    </svg>
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

export default Error;
