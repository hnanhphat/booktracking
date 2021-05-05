const mongoose = require("mongoose");

const genresSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Genre name is required"],
    trim: true,
    unique: true,
  },
});

const Genres = mongoose.model("Genres", genresSchema);

module.exports = Genres;
