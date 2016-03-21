tsc
echo "var System = require('systemjs');" > dist/final.js
babel dist/typescript.js >> dist/final.js
echo "System.import('main');" >> dist/final.js
node dist/final.js
