import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@shopgate/engage/components';
import { css } from 'glamor';
import {
  barColor, barFontColor, purchaseRedirectHref, favoritesNotice,
} from '../../config';
import connect from '../connector';

const container = css({
  textAlign: 'center',
  fontSize: '12px',
  width: '100%',
  color: `${barFontColor} !important`,
  borderRadius: '0 !important',
  padding: '5px !important',
  background: `${barColor} !important`,
}).toString();

/**
 * @returns {JSX}
 */
const FavoritesProductNameAfter = ({ flaggedProduct }) => {
  if (!flaggedProduct) {
    return null;
  }

  const content = (
    <div className={container}>
      <div>
        {favoritesNotice}
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

FavoritesProductNameAfter.propTypes = {
  flaggedProduct: PropTypes.bool,
};

FavoritesProductNameAfter.defaultProps = {
  flaggedProduct: false,
};

export default connect(FavoritesProductNameAfter);
