import React, { FC } from 'react';

import { AppConfig } from '../../config/AppConfig';
import styles from './Documentation.module.css';

const Documentation: FC = () => {
  return (
    <div className="relative max-w-screen-xl lg:mt-24">
      <nav id="navbar" className={`${styles.navbar} hidden sm:block`}>
        <ul className={`${styles.menu}`}>
          <li className={`${styles.li}`}>
            <a href="#Download" className={`${styles.nav_link} ${styles.li}`}>
              Download
            </a>
          </li>
          <li className={`${styles.li}`}>
            <a
              href="#Installation"
              className={`${styles.nav_link} ${styles.li}`}
            >
              Installation
            </a>
          </li>
          <li className={`${styles.li}`}>
            <a href="#Login" className={`${styles.nav_link} ${styles.li}`}>
              Login
            </a>
          </li>
          <li className={`${styles.li}`}>
            <a href="#Usage" className={`${styles.nav_link} ${styles.li}`}>
              Usage
            </a>
          </li>
        </ul>
      </nav>
      <main id="main-doc" className={`${styles.main} lg:max-h-screen`}>
        <section id="Download" className={`${styles.main_section}`}>
          <header className={`${styles.header}`}>
            <h2 className={`${styles.h2}`}>Download</h2>
          </header>
          <article>
            <ol start={1}>
              <li>
                <span>
                  Click on the Getting Started Button where in you will be draw
                  to the dcoumentation page. Then click the link beside{' '}
                  <a
                    href={AppConfig.SIGNIN_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-300"
                  >
                    Detection Page
                  </a>
                </span>
              </li>
            </ol>
            <p className="py-2">
              <span></span>
            </p>
            <p className="py-2">
              <img alt="" src="/images/image8.png" title="" />
            </p>
            <p className="py-2">
              <span></span>
            </p>
            <ol start={2}>
              <li>
                <span>
                  When you will go for the first time you will see the following
                  web page -
                </span>
              </li>
            </ol>
            <p className="py-2">
              <span>
                You will need to raise a product request access by linking the
                drive link below.
              </span>
            </p>
            <p className="py-2">
              <span></span>
            </p>
            <p className="py-2">
              <img alt="" src="/images/image5.png" title="" />
            </p>
            <p className="py-2">
              <span></span>
            </p>
            <ol start={3}>
              <li>
                <span>
                  You will receive an email confirmation when your access to the
                  drive is provided.
                  <br />
                  You can now download the plugin and the exe based on your
                  operating system.
                </span>
              </li>
            </ol>
            <p className="py-2">
              <span></span>
            </p>
            <p className="py-2">
              <span></span>
            </p>
            <p className="py-2">
              <img alt="" src="/images/image1.png" title="" />
            </p>
            <p className="py-2">
              <span></span>
            </p>
          </article>
        </section>
        <section id="Installation" className={`${styles.main_section}`}>
          <header>
            <h2 className={`${styles.h2}`}>Installation</h2>
          </header>
          <article>
            <p className="py-2">
              <span></span>
            </p>
            <p className="py-2">
              <span>
                Now you need to unzip the plugin and go to the manage
                extension&rsquo;s page.
              </span>
            </p>
            <p className="py-2">
              <span>
                Now you have to enable the developer mode to enable the plugin
              </span>
            </p>
            <p className="py-2">
              <span>Click the Load Unpacked to load the extension.</span>
            </p>
            <p className="py-2">
              <span></span>
            </p>
            <p className="py-2">
              <img alt="" src="/images/image9.png" title="" />
            </p>
            <p className="py-2">
              <span></span>
            </p>
            <p className="py-2">
              <span></span>
            </p>
            <p className="py-2">
              <span>
                Now you will get an id in the extension. Node it down.
              </span>
            </p>
            <p className="py-2">
              <span></span>
            </p>
            <p className="py-2">
              <img alt="" src="/images/image10.png" title="" />
            </p>
            <p className="py-2">
              <span></span>
            </p>
            <p className="py-2">
              <span></span>
            </p>
            <p className="py-2">
              <span>
                Now go back to the download page and download the exe based on
                the operating system.
              </span>
            </p>
            <p className="py-2">
              <span></span>
            </p>
            <p className="py-2">
              <span>And Create a config.json file </span>
            </p>
            <p className="py-2">
              <span></span>
            </p>
            <p className="py-2">
              <span>If you are mac on linux then run the exe as follows-</span>
            </p>
            <p className="py-2">
              <span></span>
            </p>
            <pre className={`${styles.pre}`}>
              <code className={`${styles.code}`}>
                $ ./css-to-tailwind-api-macos &lt;Fill in the extension id in
                here&gt;
              </code>
            </pre>
            <p className="py-2">
              <span></span>
            </p>
            <p className="py-2">
              <img alt="" src="/images/image6.png" title="" />
            </p>
            <p className="py-2">
              <span></span>
            </p>
            <p className="py-2">
              <span>Now restart the application as </span>
            </p>
            <p className="py-2">
              <span></span>
            </p>
            <pre className={`${styles.pre}`}>
              <code className={`${styles.code}`}>
                $ ./css-to-tailwind-api-macos
              </code>
            </pre>
            <p className="py-2">
              <span></span>
            </p>
            <p className="py-2">
              <img alt="" src="/images/image7.png" title="" />
            </p>
            <p className="py-2">
              <span></span>
            </p>
            <p className="py-2">
              <span>
                Finally you are good to go now you just reload and sign in to
                your google account -
              </span>
            </p>
            <p className="py-2">
              <span></span>
            </p>
          </article>
        </section>
        <section id="Login" className={`${styles.main_section}`}>
          <header>
            <h2 className={`${styles.h2}`}>Login</h2>
          </header>
          <article>
            <p className="py-2">
              <span></span>
            </p>
            <p className="py-2">
              <img alt="" src="/images/image11.png" title="" />
            </p>
            <p className="py-2">
              <span></span>
            </p>
            <p className="py-2">
              <span>
                On Successful Login you will see the following dashboard -
              </span>
            </p>
            <p className="py-2">
              <span></span>
            </p>
            <p className="py-2">
              <img alt="" src="/images/image4.png" title="" />
            </p>
            <p className="py-2">
              <span></span>
            </p>
          </article>
        </section>
        <section id="Usage" className={`${styles.main_section}`}>
          <header>
            <h2 className={`${styles.h2}`}>Usage</h2>
          </header>
          <article>
            <p className="py-2">
              <span></span>
            </p>
            <p className="py-2">
              <span>
                Now go to any web site where in you want to extract the css of a
                particular component -
              </span>
            </p>
            <p className="py-2">
              <span></span>
            </p>
            <p className="py-2">
              <span>
                Click on the Extension and you will see the following pop up -
              </span>
            </p>
            <p className="py-2">
              <span></span>
            </p>
            <p className="py-2">
              <img
                alt=""
                src="/images/image3.png"
                title=""
                className={styles.imagebuttonclick}
              />
            </p>
            <p className="py-2">
              <span></span>
            </p>
            <p className="py-2">
              <span></span>
            </p>
            <p className="py-2">
              <span></span>
            </p>
            <p className="py-2">
              <span>
                Now Click on the Try now Button on the Extension and hover on
                the element of which you want to get the tailwind css and the
                missing CSS classes and press v
              </span>
            </p>
            <p className="py-2">
              <span>&nbsp;</span>
              <img alt="" src="/images/image2.png" title="" />
            </p>
            <p className="py-2">
              <span></span>
            </p>
            <p className="py-2">
              <span>
                If You want to get the css only then press c to get the css of
                the given element
              </span>
            </p>
            <p className="py-2">
              <span></span>
            </p>
            <p className="py-2">
              <span>
                If you want to get the tailwind classes of the element only
                press t
              </span>
            </p>
            <p className="py-2">
              <span></span>
            </p>
            <p className="py-2">
              <span>
                Finally you can press M to get the missing tailwind classes for
                a given element
              </span>
            </p>
            <p className="py-2">
              <span></span>
            </p>
            <p className="py-2">
              <span>AND YA NOT TO FORGET</span>
            </p>
            <p className="py-2">
              <span></span>
            </p>
            <p className="py-2">
              <span>
                These classes get copied to your clipboard as well which can
                then be used to create your own component using the tailwind
                utility classes.
              </span>
            </p>
          </article>
        </section>
      </main>
    </div>
  );
};

export { Documentation };
