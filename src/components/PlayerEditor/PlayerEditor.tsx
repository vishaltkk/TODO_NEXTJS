import React, { FC, useEffect, useRef, useState } from 'react';

import YouTube from 'react-youtube';

import { PlayerProps } from '../../types/models';
import { Description } from '../Description';
import { Hero } from '../Hero';
import { SubTitleTimer } from '../SubTitleTimer';
import { TitleTimer } from '../TitleTimer';
import styles from './playerEditor.module.css';

declare global {
  namespace JSX {
    interface Element extends React.ReactElement<any, any> {}
  }
}

const videos = [
  { id: 'Imj-ugNvKYw', name: 'Product Video' },
  { id: 'Imj-ugNvKYw', name: "SLCHLD - I can't love you anymore" },
  { id: null, name: '<none>' },
];

const PlayerEditor: FC<{ playerProp: PlayerProps }> = (props) => {
  const [videoIndex, setVideoIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const [stuck, setStuck] = useState(false);

  if (stuck === true && videoIndex !== 1) {
    setVideoIndex(1);
  }

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cachedRef = ref.current;
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e) {
          setStuck(e.isIntersecting);
        }
      },
      { threshold: [1], rootMargin: '-91px 0px 91px 0px' }
    );

    if (cachedRef) observer.observe(cachedRef);
    return () => {
      if (cachedRef) observer.unobserve(cachedRef);
    };
  }, [ref]);

  const video = videos[videoIndex];

  const scrollToVideo = () => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  };

  const opts = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      mute: 1,
      vq: 'hd1080',
      rel: 0,
    },
  };

  return (
    <>
      <Hero
        scrollToVideo={scrollToVideo}
        heroProp={props.playerProp.heroProp}
      />
      <Description descriptionProp={props.playerProp.descriptionProp} />
      <div ref={ref}>
        <div className={styles.wrap}>
          <div className={styles.videoBg}>
            {/* FIXME 
            - Triggere the onload event 
            - Triggger the end event
            */}
            {videoIndex && (
              <YouTube
                videoId={(video && video.id) || 'Imj-ugNvKYw'}
                iframeClassName={styles.videoBg}
                opts={opts}
                onPlay={() => setPlaying(true)}
              />
            )}
          </div>

          <div className={styles.content}>
            <div className={`text-xl text-black lg:text-2xl`}>
              <TitleTimer
                titleTimer={props.playerProp.titleTimer}
                startText={playing}
              />
              <SubTitleTimer
                subTitleTimer={props.playerProp.subTitleTimer}
                startText={playing}
              />
            </div>
          </div>
        </div>
        <div className={styles.contentSm}>
          <div className={`text-xl text-black lg:text-3xl`}>
            <TitleTimer
              titleTimer={props.playerProp.titleTimer}
              startText={playing}
            />
            <SubTitleTimer
              subTitleTimer={props.playerProp.subTitleTimer}
              startText={playing}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export { PlayerEditor };
