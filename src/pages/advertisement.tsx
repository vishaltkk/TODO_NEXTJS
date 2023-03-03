import { FC, MutableRefObject, useEffect, useRef, useState } from 'react';

import { GetStaticProps } from 'next';

declare module 'csstype' {
  interface Properties {
    WebkitRocketLauncher?: string;
    '--value'?: number;
    [index: string]: any;
  }
}

interface AdveertisementProps {
  CHROME_EXTENSION_ID: string;
}

const getTimeDetailsFromPLugin = async (
  type: string,
  APP_ID: string,
  expiryTime: MutableRefObject<
    | { days: number; hours: number; minutes: number; seconds: number }
    | undefined
  >
) => {
  const options = {
    type: 'basic',
    message: type,
  };
  await chrome.runtime.sendMessage(
    APP_ID,
    { notificationsCreate: [type, options, null] },
    // eslint-disable-next-line func-names
    function (response) {
      if (response?.notID === type) {
        // eslint-disable-next-line no-param-reassign
        expiryTime.current = {
          hours: response?.userInfo?.leftTime?.hours,
          days: response?.userInfo?.leftTime?.days,
          minutes: response?.userInfo?.leftTime?.minutes,
          seconds: response?.userInfo?.leftTime?.seconds,
        };
      }
    }
  );
};

/**
 * Check version Number
 *  */
const getTime = async (
  expiryTime: MutableRefObject<
    | { days: number; hours: number; minutes: number; seconds: number }
    | undefined
  >,
  CHROME_EXTENSION_ID: string
) => {
  if (!(chrome && chrome.runtime && 'sendMessage' in chrome.runtime)) {
    return false;
  }

  try {
    return await getTimeDetailsFromPLugin(
      'GET_TIME',
      CHROME_EXTENSION_ID,
      expiryTime
    );
  } catch {
    return setTimeout(() => {
      // eslint-disable-next-line no-param-reassign
      expiryTime.current = undefined;
    }, 3000);
  }
};

const Adveertisement: FC<AdveertisementProps> = ({ CHROME_EXTENSION_ID }) => {
  // const timeRemainingRef = useRef<boolean>(false);
  const [seconds, setSeconds] = useState(59);
  const [timeRemaining, setRemainingTime] = useState<
    | { days: number; hours: number; minutes: number; seconds: number }
    | undefined
  >(undefined);

  const expiryTime = useRef<
    | { days: number; hours: number; minutes: number; seconds: number }
    | undefined
  >(undefined);

  useEffect(() => {
    setInterval(() => {
      setSeconds(seconds - 2);
    }, 2000);
  }, [seconds]);

  useEffect(() => {
    async function setPluginState() {
      await getTime(expiryTime, CHROME_EXTENSION_ID);
      setTimeout(() => {
        if (expiryTime.current) {
          setRemainingTime(expiryTime.current);
        } else {
          // eslint-disable-next-line no-console
          console.log(
            'Need to check as oper the applicatiuon flow to add the particular scenario in here'
          );
        }
      }, 3000);
    }
    setPluginState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-orange-300">
      <h4 className="flex justify-center p-1 text-center text-xl text-black">
        Your Fremium Usage Stops in
      </h4>
      {timeRemaining && (
        <div className="flex justify-center text-center">
          <div className="grid auto-cols-max grid-flow-col gap-5 py-3 text-center">
            <div className="rounded-box flex flex-col bg-gray-900 p-2 text-neutral-content">
              <span className="countdown font-mono text-4xl text-white">
                <span
                  style={{
                    '--value': timeRemaining?.days,
                  }}
                ></span>
              </span>
              days
            </div>
            <div className="rounded-box flex flex-col bg-gray-900 p-2 text-neutral-content">
              <span className="countdown font-mono text-4xl text-white">
                <span
                  style={{
                    '--value': timeRemaining?.hours,
                  }}
                ></span>
              </span>
              hours
            </div>
            <div className="rounded-box flex flex-col bg-gray-900 p-2 text-neutral-content">
              <span className="countdown font-mono text-4xl text-white">
                <span
                  style={{
                    '--value': timeRemaining?.minutes,
                  }}
                ></span>
              </span>
              min
            </div>
            <div className="rounded-box flex flex-col bg-gray-900 p-2 text-neutral-content">
              <span className="countdown font-mono text-4xl text-white">
                <span
                  style={{
                    '--value': timeRemaining?.seconds,
                  }}
                ></span>
              </span>
              sec
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center">
        <button className="download-button mx-3 mb-10 w-full rounded-lg bg-gray-900 px-16 py-4 font-bold tracking-widest text-white hover:bg-gray-700 active:scale-95">
          <div className="relative flex items-center justify-center">
            <div className="svg-container">
              <svg
                className="check-svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM15.1071 7.9071C15.4976 7.51658 15.4976 6.88341 15.1071 6.49289C14.7165 6.10237 14.0834 6.10237 13.6929 6.49289L8.68568 11.5001L7.10707 9.92146C6.71655 9.53094 6.08338 9.53094 5.69286 9.92146C5.30233 10.312 5.30233 10.9452 5.69286 11.3357L7.97857 13.6214C8.3691 14.0119 9.00226 14.0119 9.39279 13.6214L15.1071 7.9071Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="button-copy pl-2 uppercase leading-none">
              Sponser US
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const CHROME_EXTENSION_ID = process.env.CHROME_EXTENSION_ID || '';
  return {
    props: { CHROME_EXTENSION_ID },
  };
};

export default Adveertisement;
