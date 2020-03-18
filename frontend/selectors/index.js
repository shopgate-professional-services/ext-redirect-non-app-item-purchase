import { createSelector } from 'reselect';
import { getProductDataById } from '@shopgate/engage/product';
import config from '../config';

const { triggerTags = [], triggerProperties = [] } = config;

export const getProductTags = createSelector(
  getProductDataById,
  (productData) => {
    const { tags = [] } = productData || {};

    return tags;
  }
);

export const getProductProperties = createSelector(
  getProductDataById,
  (productData) => {
    const { additionalProperties = [] } = productData || {};

    return additionalProperties;
  }
);

export const hasTriggerTag = createSelector(
  getProductTags,
  (productTags) => {
    if (!productTags.length) {
      return false;
    }

    return productTags.some(productTag => triggerTags.includes(productTag));
  }
);

export const hasTriggerProperty = createSelector(
  getProductProperties,
  (productProperties) => {
    if (!productProperties.length) {
      return false;
    }

    return productProperties.some(property => (
      triggerProperties.some(triggerProperty => (
        property.label === triggerProperty.label && property.value === triggerProperty.value
      ))
    ));
  }
);

export const isFlaggedProduct = createSelector(
  hasTriggerTag,
  hasTriggerProperty,
  (triggeredByTag, triggeredByProperty) => triggeredByTag || triggeredByProperty
);
