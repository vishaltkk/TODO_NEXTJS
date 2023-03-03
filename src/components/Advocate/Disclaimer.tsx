import React from 'react';

import styles from './Advocate.module.css';

export const Disclaimer: React.FC<{
  companyEmailAddress: string;
  lastUpdateDate: string;
  SITEURL: string;
}> = ({ companyEmailAddress, lastUpdateDate, SITEURL }) => {
  return (
    <main>
      <article className={`${styles.terms_and_conditions}`}>
        <div className="container">
          <div
            className="tab-content translations-content-item en visible"
            id="en"
          >
            <h1>
              Disclaimer for{' '}
              <a
                href={SITEURL}
                target="_blank"
                rel="noreferrer"
                className="text-blue-300"
              >
                {SITEURL}
              </a>
            </h1>
            <p className={`${styles.p}`}>Last updated: {lastUpdateDate}</p>
            <p>
              If you require any more information or have any questions about
              our site&quot;s disclaimer, please feel free to contact us by
              email at {companyEmailAddress}. Our Disclaimer was generated with
              the help of the&nbsp;.
            </p>
            <h2>Disclaimers for title</h2>
            <p>
              All the information on this website -{' '}
              <a
                href={SITEURL}
                target="_blank"
                rel="noreferrer"
                className="text-blue-300"
              >
                {SITEURL}
              </a>
              - is published in good faith and for general information purpose
              only. title does not make any warranties about the completeness,
              reliability and accuracy of this information. Any action you take
              upon the information you find on this website (title), is strictly
              at your own risk. title will not be liable for any losses and/or
              damages in connection with the use of our website.
            </p>
            <p>
              From our website, you can visit other websites by following
              hyperlinks to such external sites. While we strive to provide only
              quality links to useful and ethical websites, we have no control
              over the content and nature of these sites. These links to other
              websites do not imply a recommendation for all the content found
              on these sites. Site owners and content may change without notice
              and may occur before we have the opportunity to remove a link
              which may have gone &quot;bad&quot;.
            </p>
            <p>
              Please be also aware that when you leave our website, other sites
              may have different privacy policies and terms which are beyond our
              control. Please be sure to check the Privacy Policies of these
              sites as well as their &quot;Terms of Service&quot; before
              engaging in any business or uploading any information.
            </p>
            <h2>Consent</h2>
            <p>
              By using our website, you hereby consent to our disclaimer and
              agree to its terms.
            </p>
            <h2>Update</h2>
            <p>
              Should we update, amend or make any changes to this document,
              those changes will be prominently posted here.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
};
