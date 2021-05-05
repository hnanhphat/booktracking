const Genres = require("../model/genres");

const genresController = {};

genresController.getAllData = async (req, res, next) => {
  try {
    const genres = await Genres.find();
    res.status(200).json({
      status: "Success",
      data: genres,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: error.message,
    });
  }
};

genresController.getData = async (req, res, next) => {
  try {
    const genres = await Genres.findById(req.params.id);
    res.status(200).json({
      status: "Success",
      data: genres,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: error.message,
    });
  }
};

genresController.createData = async (req, res, next) => {
  try {
    const { name } = req.body;
    const genres = new Genres({ name: name });
    await genres.save();

    res.status(200).json({
      status: "Success",
      data: genres,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: error.message,
    });
  }
};

genresController.updateData = async (req, res, next) => {
  try {
    const { name } = req.body;
    const genres = await Genres.findByIdAndUpdate(
      req.params.id,
      { name: name },
      { new: true }
    );

    res.status(200).json({
      status: "Success",
      data: genres,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: error.message,
    });
  }
};

genresController.deleteData = async (req, res, next) => {
  try {
    const genres = await Genres.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "Success",
      data: genres,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: error.message,
    });
  }
};

module.exports = genresController;
