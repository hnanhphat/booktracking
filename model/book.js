const mongoose = require("mongoose");
const Author = require("./author");

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "Book title is required"],
    },
    description: {
      type: String,
      require: [true, "Description is required"],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
      require: [true, "Author is required"],
    },
    genres: [{ type: mongoose.Schema.Types.ObjectId, ref: "Genres" }],
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: [true, "Owner is required"],
    },
  },
  { timestamps: true }
);

bookSchema.pre("save", async function (next) {
  // Check the author is exist in system
  const author = await Author.findById(this.author);
  if (author) {
    next();
  } else {
    throw new Error("That author is not exist");
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
