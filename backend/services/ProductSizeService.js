const ProductSizeModel = require('../models/ProductSizeModel');

const createProductSize = async (name, isActive = true, showOnPublic = true) => {
  const productSize = new ProductSizeModel({ name, isActive, showOnPublic });
  return await productSize.save();
};

const updateProductSize = async (id, name, isActive, showOnPublic) => {
  return await ProductSizeModel.findByIdAndUpdate(id, { name, isActive, showOnPublic }, { new: true });
};

const getAllProductSizes = async () => {
  return await ProductSizeModel.find().select('-createdAt -updatedAt');
};

const getProductSizeById = async (id) => {
  return await ProductSizeModel.findById(id).select('-createdAt -updatedAt');
};

const deleteProductSize = async (id) => {
  return await ProductSizeModel.findByIdAndDelete(id);
};

module.exports = {
  createProductSize,
  updateProductSize,
  getAllProductSizes,
  getProductSizeById,
  deleteProductSize
};