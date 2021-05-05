const User = require("../model/user");

const userController = {};

userController.getAllData = async (req, res, next) => {
  try {
    const user = await User.find();
    res.status(200).json({
      status: "Success",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: error.message,
    });
  }
};

userController.getData = async (req, res, next) => {
  try {
    // How to get the data
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: "Success",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: error.message,
    });
  }
};

userController.createData = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username: username, password: password });
    await user.save();

    res.status(200).json({
      status: "Success",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: error.message,
    });
  }
};

userController.updateData = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { username: username, password: password },
      { new: true }
    );

    res.status(200).json({
      status: "Success",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: error.message,
    });
  }
};

userController.deleteData = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "Success",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: error.message,
    });
  }
};

module.exports = userController;
