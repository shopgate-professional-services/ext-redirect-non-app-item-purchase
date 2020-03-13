import React from 'react';
import { I18n, Link } from '@shopgate/engage/components';
import styles from './style';
import { barText, purchaseRedirectHref } from '../../config';

/**
 * @returns {JSX}
 */
const FlaggedBar = () => {
  const content = (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.base}>
          <div className={styles.statusBar}>
            <I18n.Text string={barText} />
          </div>
        </div>
      </div>
    </div>
  );

  if (!purchaseRedirectHref) {
    return content;
  }

  return (
    <Link href={purchaseRedirectHref}>
      {content}
    </Link>
  );
};

export default FlaggedBar;
