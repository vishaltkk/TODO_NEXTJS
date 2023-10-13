import { useState, useEffect } from 'react';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const { userAgent } = navigator;
    const mobileUserAgents = ['Android', 'iPhone', 'iPad', 'Windows Phone'];

    setIsMobile(mobileUserAgents.some((agent) => userAgent.includes(agent)));
  }, []);

  return isMobile;
}

export default useIsMobile;
