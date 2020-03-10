import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { withCurrentProduct } from '@shopgate/engage/core';
import FlaggedBar from '../../components/FlaggedBar';
import connect from '../connector';

const buttonStyle = css({
  position: 'fixed !important',
  bottom: 0,
  left: 0,
  zIndex: 5,
}).toString();

/**
 * @returns {JSX}
 */
const ProductCTASAddToCartBar = ({ children, productId, flaggedProduct }) => {
  if (!productId || !flaggedProduct) {
    return children;
  }

  return (
    <div className={buttonStyle}>
      <FlaggedBar />
    </div>
  );
};

ProductCTASAddToCartBar.propTypes = {
  children: PropTypes.node.isRequired,
  flaggedProduct: PropTypes.bool,
  productId: PropTypes.string,
};

ProductCTASAddToCartBar.defaultProps = {
  flaggedProduct: false,
  productId: null,
};

export default withCurrentProduct(connect(ProductCTASAddToCartBar));
