import React from 'react';
import { I18n } from '@shopgate/engage/components';
import styles from './style';
import { barText, contactNumber } from '../../config';

/**
 * @returns {JSX}
 */
const FlaggedBar = () => (
  <a href={`tel:${contactNumber}`}>
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.base}>
          <div className={styles.statusBar}>
            <I18n.Text string={barText} />
          </div>
        </div>
      </div>
    </div>
  </a>
);

export default FlaggedBar;
