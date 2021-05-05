const Author = require("../model/author");
const Book = require("../model/book");

const authorController = {};

authorController.getAllData = async (req, res, next) => {
  try {
    const author = await Author.find();
    res.status(200).json({
      status: "Success",
      data: author,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: error.message,
    });
  }
};

authorController.getData = async (req, res, next) => {
  try {
    // How to get the data
    const author = await Author.findById(req.params.id);
    const books = await Book.find({ author: req.params.id });
    res.status(200).json({
      status: "Success",
      data: { author, books },
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: error.message,
    });
  }
};

authorController.createData = async (req, res, next) => {
  try {
    const { name } = req.body;
    const author = new Author({ name: name });
    await author.save();

    res.status(200).json({
      status: "Success",
      data: author,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: error.message,
    });
  }
};

authorController.updateData = async (req, res, next) => {
  try {
    const { name } = req.body;
    const author = await Author.findByIdAndUpdate(
      req.params.id,
      { name: name },
      { new: true }
    );

    res.status(200).json({
      status: "Success",
      data: author,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: error.message,
    });
  }
};

authorController.deleteData = async (req, res, next) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "Success",
      data: author,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: error.message,
    });
  }
};

module.exports = authorController;
