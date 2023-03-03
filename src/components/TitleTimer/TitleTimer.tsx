import React, { useEffect, useState } from 'react';

type TitleTimerProps = {
  text: string;
  timer: number;
};

export const TitleTimer: React.FC<{
  titleTimer: TitleTimerProps[];
  startText: boolean;
}> = ({ titleTimer, startText }) => {
  const [currentTitle, setCurrentTitle] = useState<string>('');
  useEffect(() => {
    if (startText)
      titleTimer.forEach((title) => {
        setTimeout(() => {
          setCurrentTitle(title.text);
        }, title.timer * 1000);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startText]);
  return (
    <div className="text-2xl text-purple-900 sm:text-4xl lg:text-6xl">
      {currentTitle}
    </div>
  );
};
