# gatsby-plugin-sass-bulk-import
Extends gatsby-plugin-sass to give support for bulk import. Uses sass-bulk-import-loader as a dependency.

## Install
`yarn add gatsby-plugin-sass-bulk-import`

## How to use
1. Include the plugin in your `gatsby-config.js` file.
2. Bulk import your SCSS/SASS

```javascript
// in gatsby-config.js
plugins: [
  `gatsby-plugin-sass`
]
```

```javascript
// in sass file
@import "some/path/*";

// becomes
// @import "some/path/file1.scss";
// @import "some/path/file2.scss";
// ...
]
```
