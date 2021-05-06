const mongoose = require("mongoose");

const authorSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Author name is required"],
    // trim: true, // not allow the space in the name: Barry Allen => BarryAllen
    // unique: true,
  },
});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
