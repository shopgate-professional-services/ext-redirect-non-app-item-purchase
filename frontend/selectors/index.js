import { createSelector } from 'reselect';
import { getProductDataById } from '@shopgate/engage/product';
import config from '../config';

const { targetTag = null } = config;

export const getProductTags = createSelector(
  getProductDataById,
  (productData) => {
    const { tags = null } = productData || {};

    return tags;
  }
);

export const isFlaggedProduct = createSelector(
  getProductTags,
  (productTags) => {
    if (!productTags) {
      return false;
    }

    return productTags.includes(targetTag);
  }
);
