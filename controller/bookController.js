const Book = require("../model/book");

const bookController = {};

bookController.getAllData = async (req, res, next) => {
  try {
    const book = await Book.find()
      .populate("author", "-_id -__v")
      .populate("genres", "-_id -__v");
    res.status(200).json({
      status: "Success",
      data: book,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: error.message,
    });
  }
};

bookController.getData = async (req, res, next) => {
  try {
    // How to get the data
    const book = await Book.findById(req.params.id)
      .populate("author", "-_id -__v")
      .populate("genres", "-_id -__v");

    res.status(200).json({
      status: "Success",
      data: book,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: error.message,
    });
  }
};

bookController.createData = async (req, res, next) => {
  try {
    // How can we create book data
    const { title, description, author, genres } = req.body;
    const book = new Book({
      title: title,
      description: description,
      author: author,
      genres: genres,
    });
    await book.save();

    res.status(200).json({
      status: "Success",
      data: book,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: error.message,
    });
  }
};

bookController.updateData = async (req, res, next) => {
  try {
    const { title, description, author, genres } = req.body;
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      {
        title: title,
        description: description,
        author: author,
        genres: genres,
      },
      { new: true }
    );

    res.status(200).json({
      status: "Success",
      data: book,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: error.message,
    });
  }
};

bookController.deleteData = async (req, res, next) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "Success",
      data: book,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: error.message,
    });
  }
};

module.exports = bookController;
