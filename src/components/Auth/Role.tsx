import React from 'react';

import styles from './Role.module.css';

type FourPlet = 0 | 1 | 2 | 3;

// Need to add types to the below components
const Role = ({ onClose }) => {
  const handleCloseClick = (e, val: FourPlet) => {
    e.preventDefault();
    onClose(val);
  };
  return (
    <div className={styles.html_56759339379}>
      <div className={styles.body_68472711501}>
        <div className={styles.div_5339945234}>
          <div className={styles.div_94806992197}>
            <div className={styles.div_57297163349}>
              <div className={styles.div_99319143516}>
                <img
                  alt="company logo"
                  src="/images/expertiaLogotext.png"
                  className={styles.img_91184758668}
                ></img>
              </div>
            </div>
          </div>
          <div className={styles.div_72846947171}>
            <div className={styles.div_71132170508}>
              <div className={styles.div_60415835250}>
                <div className={styles.div_28055160277}>
                  <div className={styles.div_52776781953}>
                    <h1 className={styles.h1_678590264}>
                      Create Your Company Career Page
                    </h1>
                  </div>
                  <div className={styles.div_34486002871}>
                    <h3 className={styles.h3_44760174051}>
                      Your career page is the first impression of your company
                      that professionals encounter. Use Expertia to make the
                      best impression for all your applicants.
                    </h3>
                  </div>
                  <button
                    className={styles.button_5697111760}
                    onClick={(e) => handleCloseClick(e, 1)}
                  >
                    Create your Career Page!
                  </button>
                </div>
                <div className={styles.div_4468826}>
                  <div className={styles.div_79828746062}>
                    <h1 className={styles.h1_11826809022}>
                      Post Your First <br className={styles.br_6203239412}></br>
                      Job!
                    </h1>
                  </div>
                  <div className={styles.div_78994667828}>
                    <h3 className={styles.h3_96466512705}>
                      Need to hire now? Use Expertia to
                      <br className={styles.br_27549146403}></br>post your jobs
                      on 25+ of the most popular job sites.
                    </h3>
                  </div>
                  <button
                    className={styles.button_6844306442}
                    onClick={(e) => handleCloseClick(e, 2)}
                  >
                    Post a Job!
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

export { Role };
