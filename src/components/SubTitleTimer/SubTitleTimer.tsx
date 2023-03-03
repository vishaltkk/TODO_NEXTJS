import React, { useEffect, useState } from 'react';

import AnimatedText from 'react-animated-text-content';

type SubTitleTimerProps = {
  text: string;
  timer: number;
};

export const SubTitleTimer: React.FC<{
  subTitleTimer: SubTitleTimerProps[];
  startText: boolean;
}> = ({ subTitleTimer, startText }) => {
  const [currentSubTitle, setCurrentSubTitle] = useState<string>('');
  useEffect(() => {
    if (startText)
      subTitleTimer.forEach((subTitle) => {
        setTimeout(() => {
          setCurrentSubTitle(subTitle.text);
        }, subTitle.timer * 1000);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startText]);
  return (
    <AnimatedText
      type="words"
      animation={{
        x: '200px',
        y: '-20px',
        scale: 1.1,
        ease: 'ease-in-out',
      }}
      interval={0.06}
      duration={0.8}
      tag="p"
      includeWhiteSpaces
      threshold={0.1}
      rootMargin="20%"
    >
      {currentSubTitle}
    </AnimatedText>
  );
};
