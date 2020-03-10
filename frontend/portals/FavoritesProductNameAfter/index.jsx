import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import {
  barColor, barFontColor, targetTag, contactNumber, favoritesNotice,
} from '../../config';

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
const FavoritesProductNameAfter = ({ product }) => {
  const { tags = [] } = product || {};

  const flag = tags.includes(targetTag);

  if (!flag) {
    return null;
  }

  return (
    <a href={`tel:${contactNumber}`} className={container}>
      <div>
        {favoritesNotice}
      </div>
    </a>
  );
};

FavoritesProductNameAfter.propTypes = {
  product: PropTypes.shape(),
};

FavoritesProductNameAfter.defaultProps = {
  product: null,
};

export default FavoritesProductNameAfter;
