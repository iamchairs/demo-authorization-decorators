tsc
echo "var System = require('systemjs');" | Out-File -FilePath dist/final.js -Encoding utf8
babel dist/typescript.js | Out-File -FilePath dist/final.js -Encoding utf8 -Append
echo "System.import('main');" | Out-File -FilePath dist/final.js -Encoding utf8 -Append
node dist/final.js
