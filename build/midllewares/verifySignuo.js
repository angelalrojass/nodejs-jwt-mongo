"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkRoloesExisted = exports.checkDuplicateUserorEmail = void 0;

var _Role = require("../models/Role");

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const checkDuplicateUserorEmail = async (req, res, next) => {
  const users = await _User.default.findOne({
    username: req.body.username
  });
  if (users) return res.status(400).json({
    message: 'the user already exists'
  });
  const emails = await _User.default.findOne({
    email: req.body.email
  });
  if (emails) return res.status(400).json({
    message: 'the email already exists'
  });
  next();
};

exports.checkDuplicateUserorEmail = checkDuplicateUserorEmail;

const checkRoloesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!_Role.ROLES.includes(req.body.roles[i])) {
        return res.status(400).json({
          message: 'Role ${req.body.roles[i]} does not exists'
        });
      }
    }
  }

  next();
};

exports.checkRoloesExisted = checkRoloesExisted;