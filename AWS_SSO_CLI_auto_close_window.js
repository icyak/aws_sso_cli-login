
// ==UserScript==
// @name        AWS SSO CLI - Auto Close Window
// @namespace   Ohpen
// @match       https://*.awsapps.com/start/user-consent/login-success.html
// @grant       window.close
// @version     1.0.1
// @author      Peter Valachovic
// @description Close the tab when successful AWS SSO CLI login
// @homepage    https://github.com/ohpen/cloudops-tampermonkey-app
// @downloadURL   https://github.com/ohpen/cloudops-tampermonkey-app/blob/test/AWS_SSO_CLI_auto_close_window.js?raw=true
// @updateURL   https://github.com/ohpen/cloudops-tampermonkey-app/blob/test/AWS_SSO_CLI_auto_close_window.js?raw=true
// ==/UserScript==

setInterval(() => {
    window.close()
  }, 1000)