const express = require('express');
const path = require('path');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, '/dist')));

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

var $7Q09z$handlebars = require("handlebars");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $a995b90faa20e26c$export$2e2bcd8739ae039);

const $a995b90faa20e26c$var$templateFunction = ($parcel$interopDefault($7Q09z$handlebars)).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "\r\n  <main>\r\n      <div class=\"sign\">\r\n          <form novalidate id=\"form\">\r\n            <h3 class=\"heading\">Sign In</h3>\r\n            <div class=\"fields\">\r\n              <p>Login</p>\r\n" + ((stack1 = container.invokePartial(lookupProperty(partials, "input/input"), depth0, {
            "name": "input/input",
            "hash": {
                "minlength": "4",
                "autocomplete": "on",
                "placeholder": "",
                "id": "login",
                "name": "login",
                "type": "login",
                "class": "field"
            },
            "data": data,
            "indent": "              ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + "              <span class=\"error\"></span>\r\n              <p>Password</p>\r\n" + ((stack1 = container.invokePartial(lookupProperty(partials, "input/input"), depth0, {
            "name": "input/input",
            "hash": {
                "minlength": "8",
                "placeholder": "",
                "autocomplete": "on",
                "id": "password",
                "name": "password",
                "type": "password",
                "class": "field"
            },
            "data": data,
            "indent": "              ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + "              <span class=\"error\"></span>\r\n            </div>\r\n            <div class=\"buttons\">\r\n" + ((stack1 = container.invokePartial(lookupProperty(partials, "button/button"), depth0, {
            "name": "button/button",
            "hash": {
                "text": "Enter",
                "type": "submit",
                "class": "btn"
            },
            "data": data,
            "indent": "              ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "a/a"), depth0, {
            "name": "a/a",
            "hash": {
                "text": "Sign Up",
                "href": "#",
                "class": "btn link"
            },
            "data": data,
            "indent": "              ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + "            </div>\r\n          </form>\r\n        </div>\r\n  </main>";
    },
    "usePartial": true,
    "useData": true
});
var $a995b90faa20e26c$export$2e2bcd8739ae039 = $a995b90faa20e26c$var$templateFunction;


//# sourceMappingURL=index.js.map
