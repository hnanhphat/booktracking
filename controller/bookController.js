const Book = require("../model/book");

const bookController = {};

bookController.getAllData = async (req, res, next) => {
  try {
    // 1. Read the query information
    let { page, limit, sortBy, ...filter } = req.query;
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10;

    // 2. Get total blog number
    const totalBooks = await Book.countDocuments({
      ...filter,
      // isDelete: false,
    });

    // 3. Calculate total page number
    const totalPages = Math.ceil(totalBooks / limit);

    // 4. Calculate how many data you will skip (offset)
    const offset = (page - 1) * limit;

    // 5. Get blog based on query info
    const books = await Book.find(filter)
      .skip(offset)
      .limit(limit)
      .populate("author")
      .populate("owner");

    // 6. Send bookData + totalPages info
    res.status(200).json({
      status: "Success",
      data: { books, totalPages },
    });

    // const book = await Book.find()
    //   .populate("author", "-_id -__v")
    //   .populate("genres", "-_id -__v")
    //   .populate("owner");

    // res.status(200).json({
    //   status: "Success",
    //   data: book,
    // });
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
      .populate("genres", "-_id -__v")
      .populate("owner", "-_id -__v");

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

bookController.getCurrentUserBooks = async (req, res, next) => {
  try {
    const userId = req.userId;
    const book = await Book.find({ owner: userId })
      .populate("author", "-_id -__v")
      .populate("genres", "-_id -__v")
      .populate("owner");

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
    const userId = req.userId;
    const { title, description, author, genres } = req.body;
    const book = new Book({
      title: title,
      description: description,
      author: author,
      genres: genres,
      owner: userId,
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
