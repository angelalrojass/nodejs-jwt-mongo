"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mongoose["default"].connect("mongodb+srv://angel:Angel1234@cluster0.rqys7.mongodb.net/test?authSource=admin&replicaSet=atlas-x8v8a1-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true
}).then(function (db) {
  return console.log('db is connected');
})["catch"](function (error) {
  return console.log(error);
});