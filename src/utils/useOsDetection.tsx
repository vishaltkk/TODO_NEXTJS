import { useEffect, useState } from 'react';

const useOsDetection = () => {
  const [os, setOS] = useState<string | undefined>(undefined);
  useEffect(() => {
    const osTypes = ['Windows', 'Mac', 'Linux'];
    setOS(
      osTypes.find(
        (v) => (global as any).window?.navigator.platform.indexOf(v) >= 0
      )
    );
  }, []);
  return os;
};

export { useOsDetection };
