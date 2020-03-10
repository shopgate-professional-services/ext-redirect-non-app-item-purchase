import { connect } from 'react-redux';
import { isFlaggedProduct } from '../selectors';

/**
 * @param {Object} state state
 * @param {Object} props Component properties.
 * @returns {Object}
 */
const mapStateToProps = (state, props) => ({
  flaggedProduct: isFlaggedProduct(state, props),
});

export default connect(mapStateToProps);
