import React from 'react';
import { css } from 'glamor';
import PropTypes from 'prop-types';
import { withCurrentProduct } from '@shopgate/engage/core';
import isIOSTheme from '@shopgate-ps/pwa-extension-kit/env/helpers/isIOSTheme';
import connect from '../connector';

const extraMargin = css({
  marginBottom: 62,
}).toString();

/**
 * @returns {JSX}
 */
const ProductTaxDisclaimerAfter = ({ productId, flaggedProduct }) => {
  if (isIOSTheme() || !productId || !flaggedProduct) {
    return null;
  }

  return (
    <div className={extraMargin} />
  );
};

ProductTaxDisclaimerAfter.propTypes = {
  flaggedProduct: PropTypes.bool,
  productId: PropTypes.string,
};

ProductTaxDisclaimerAfter.defaultProps = {
  flaggedProduct: false,
  productId: null,
};

export default withCurrentProduct(connect(ProductTaxDisclaimerAfter));
