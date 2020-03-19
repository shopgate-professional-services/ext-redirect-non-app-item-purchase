# Shopgate Connect - Redirect Non-App Item Purchase

This extension prevents items with one or more of the triggering tags or product properties from being added to the cart. A configurable notice that the item cannot be purchased is displayed on the product detail page and in the favorites list. By adding an href value to the purchaseRedirectHref configuration the notice on non app products becomes a link. The href can start a phone call, initiate an email, direct the shopper to a page within the app or a page outside of the app. The external page will be displayed in its own view within the app.

## Configuration
This extension requires six configurations to be configured.

triggerTags
```json
{
  "triggerTags": ["is-firearm", "is-knife"]
}
```

triggerProperties
```json
{
  "triggerProperties": [{ "label": "type", "value": "firearm" }]
}
```

barText
```json
{
  "barText": "Firearm purchases are disabled. Click to contact for purchasing."
}
```

barColor
```json
{
  "barColor": "orange"
}
```

barFontColor
```json
{
  "barFontColor": "white"
}
```

contactNumber
```json
{
  "purchaseRedirectHref": "tel:123-456-7890"
}
```

favoritesNotice
```json
{
  "favoritesNotice": "Cannot add this product to cart. Click to contact merchant"
}
```

## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.

## License

Shopgate Connect - Extension Boilerplate is available under the Apache License, Version 2.0.

See the [LICENSE](./LICENSE) file for more information.
