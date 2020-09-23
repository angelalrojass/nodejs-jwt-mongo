"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteProductById = exports.updateProductById = exports.getProductById = exports.getProducts = exports.createProduct = void 0;

var _Product = _interopRequireDefault(require("../models/Product"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createProduct = async (req, res) => {
  const {
    name,
    category,
    price,
    imgUrl
  } = req.body;
  const newProduct = new _Product.default({
    name,
    category,
    price,
    imgUrl
  });
  const productSave = await newProduct.save();
  res.status(201).json(productSave);
};

exports.createProduct = createProduct;

const getProducts = async (req, res) => {
  const products = await _Product.default.find();
  res.json(products);
};

exports.getProducts = getProducts;

const getProductById = async (req, res) => {
  const product = await _Product.default.findById(req.params.productId);
  res.status(200).json(product);
};

exports.getProductById = getProductById;

const updateProductById = async (req, res) => {
  const updateProduct = await _Product.default.findByIdAndUpdate(res.params.productId, req.body, {
    new: true
  });
  res.status(200).json(updateProduct);
};

exports.updateProductById = updateProductById;

const deleteProductById = async (req, res) => {
  const {
    productId
  } = req.params;
  await _Product.default.findByIdAndDelete(productId);
  res.status(204).json();
};

exports.deleteProductById = deleteProductById;