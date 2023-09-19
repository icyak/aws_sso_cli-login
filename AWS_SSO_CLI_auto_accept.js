// ==UserScript==
// @name        Auto AWS SSO CLI - Login
// @namespace   Violentmonkey Scripts
// @match       https://*.awsapps.com/start/user-consent/authorize.html?clientId=*
// @match       https://*.amazonaws.com/?user_code=*
// @grant       none
// @version     1.0
// @author      Nicholas Hawkes
// @description Automatically presses the "Sign in to AWS CLI" button
// @homepage    https://gist.github.com/hawkesnc/ae9fc22fc5d17ac250f6376b0591161c
// ==/UserScript==

setTimeout(function () {
  document.getElementById('cli_verification_btn').click()
}, 1000)
setTimeout(function () {
  document.getElementById('cli_login_button').click()
}, 1000)