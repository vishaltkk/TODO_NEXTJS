import React from 'react';

import styles from './Advocate.module.css';

export const ReturnPolicy: React.FC<{
  companyEmailAddress: string;
  lastUpdateDate: string;
}> = ({ companyEmailAddress, lastUpdateDate }) => {
  return (
    <main>
      <article className={`${styles.terms_and_conditions}`}>
        <div className="container">
          <div
            className="tab-content translations-content-item en visible"
            id="en"
          >
            <div>
              <div>
                <strong>
                  <span className="text-xl">
                    <span data-custom-class="title">RETURN POLICY</span>
                  </span>
                </strong>
              </div>
              <div className="text-left text-lg">
                <br />
              </div>
              <div className="text-left text-lg">
                <span className="text-lg">
                  <span>
                    <strong>
                      <span>{lastUpdateDate}</span>
                    </strong>
                  </span>
                </span>
              </div>
              <div className="text-left text-lg">
                <br />
              </div>
              <div className="text-left text-lg">
                <span>
                  <br />
                  <a></a>
                </span>
              </div>
            </div>
            <div>
              <span></span>
            </div>
            <div data-custom-class="heading_1">
              <strong>
                <span>REFUNDS</span>
              </strong>
            </div>
            <div>
              <br />
            </div>
            <div data-custom-class="body_text">
              All sales are final and no refund will be issued.
            </div>
            <div>
              <br />
            </div>
            <div>
              <span>
                <strong>QUESTIONS</strong>
              </span>
            </div>
            <div>
              <br />
            </div>
            <div>
              <span>
                If you have any questions concerning our return policy, please
                contact us at:
              </span>
            </div>
            <div>
              <br />
            </div>
            <div>
              <span></span>
            </div>
            <div>
              <span>{companyEmailAddress}</span>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};
