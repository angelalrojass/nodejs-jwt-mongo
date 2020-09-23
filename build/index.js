"use strict";

var _app = _interopRequireDefault(require("./app"));

require("./database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app.default.set('port', process.env.PORT || 4000);

_app.default.listen(_app.default.get('port'), () => {
  console.log('Server on Port', _app.default.get('port'));
});