import React from 'react';
import PropTypes from 'prop-types';
import connect from '../connector';

/**
 * @returns {JSX}
 */
const FavoritesAddToCart = ({ children, productId, flaggedProduct }) => {
  if (!productId || !flaggedProduct) {
    return children;
  }

  return React.cloneElement(children, { isDisabled: true });
};

FavoritesAddToCart.propTypes = {
  children: PropTypes.node.isRequired,
  flaggedProduct: PropTypes.bool,
  productId: PropTypes.string,
};

FavoritesAddToCart.defaultProps = {
  flaggedProduct: false,
  productId: null,
};

export default connect(FavoritesAddToCart);
