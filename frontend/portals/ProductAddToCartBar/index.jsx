import React from 'react';
import PropTypes from 'prop-types';
import { withCurrentProduct } from '@shopgate/engage/core';
import connect from '../connector';
import FlaggedBar from '../../components/FlaggedBar';

/**
 * @returns {JSX}
 */
const ProductAddToCartBar = ({ children, productId, flaggedProduct }) => {
  if (!productId || !flaggedProduct) {
    return children;
  }

  return <FlaggedBar />;
};

ProductAddToCartBar.propTypes = {
  children: PropTypes.node.isRequired,
  flaggedProduct: PropTypes.bool,
  productId: PropTypes.string,
};

ProductAddToCartBar.defaultProps = {
  flaggedProduct: false,
  productId: null,
};

export default withCurrentProduct(connect(ProductAddToCartBar));
