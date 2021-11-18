## Develop a tempermonkey scripe with typescript and vscode.

Thank to https://stackoverflow.com/questions/41212558/develop-tampermonkey-scripts-in-a-real-ide-with-automatic-deployment-to-openuser

1. Install nvm/node/npm/typescript
2. Run `tsc test --watch` to auto compile the typescript to javascript when you save the file.
3. Install tampermonkey on you browser and allow it to access local script, then add @require `local script path` to user script header, from example:
```
// ==UserScript==
// @name         my test ide ts develop
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://localhost:3000/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_addStyle
// @require      file:///Users/zengyingqing/code/ts_stuff/test_ts/test.js
// ==/UserScript==
```
4. Setting up browser-sync so when you save a file, it will automatically reload the browser
``` bash
npm install -g browser-sync
browser-sync init
# gene crt
openssl req -x509 -out localhost.crt -keyout localhost.key \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
# add crt to mac system and change ssl setting of that crt to Always trust
# make changes to your bs-config.js, including files/proxy/https
browser-sync start --config bs-config.js
```