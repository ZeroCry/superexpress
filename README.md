# SuperExpress

# Usage

You only need to call *scanRoutes* and pass the directory that contains your routes

```javascript
var superExpress = require('superexpress');

superExpress.scanRoutes(app, path.join(global.__basedir, 'routes'));
```
