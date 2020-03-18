import { connect } from 'react-redux';
import { isFlaggedProduct } from '../selectors';

/**
 * Check props for product to expose product id as productId
 * @param {Object} props Component properties.
 * @return {Object}
 */
const manipulateProps = (props) => {
  const { product } = props || {};

  if (!product) {
    return props;
  }

  const { id: productId } = product;

  return { productId };
};

/**
 * @param {Object} state state
 * @param {Object} props Component properties.
 * @returns {Object}
 */
const mapStateToProps = (state, props) => ({
  flaggedProduct: isFlaggedProduct(state, manipulateProps(props)),
});

export default connect(mapStateToProps);
