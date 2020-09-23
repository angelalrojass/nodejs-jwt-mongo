"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signin = exports.signUp = void 0;

var _User = _interopRequireDefault(require("../models/User"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

var _Role = _interopRequireDefault(require("../models/Role"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const signUp = async (req, res) => {
  const {
    username,
    email,
    password,
    roles
  } = req.body;
  const newUser = new _User.default({
    username,
    email,
    password: await _User.default.encryptPassword(password)
  });

  if (roles) {
    const foundroles = await _Role.default.find({
      name: {
        $in: roles
      }
    });
    newUser.roles = foundroles.map(role => role._id);
  } else {
    const role = await _Role.default.findOne({
      name: "user"
    });
    newUser.roles = [role._id];
  }

  const saveUser = await newUser.save();
  console.log(saveUser);

  const token = _jsonwebtoken.default.sign({
    id: saveUser._id
  }, _config.default.SECRET, {
    expiresIn: 86400
  });

  res.json({
    token
  });
};

exports.signUp = signUp;

const signin = async (req, res) => {
  const userFound = await _User.default.findOne({
    email: req.body.email
  }).populate("roles");
  if (!userFound) return res.estatus(400).json({
    message: "User not found"
  });
  const matchPassword = await _User.default.comparePassword(req.body.password, userFound.password);
  if (!matchPassword) return res.status(401).json({
    token: null,
    message: 'Invalid password'
  });

  const token = _jsonwebtoken.default.sign({
    id: userFound._id
  }, _config.default.SECRET, {
    expiresIn: 86400
  });

  res.json({
    token
  });
};

exports.signin = signin;