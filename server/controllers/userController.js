const { User, Blog } = require("../database/config");
require("dotenv").config();

const addUser = (req, res) => {
  const data = {
    name: req.body.name,
  };
  console.log("BodyData:- ", data);
  User.findOne({
    where: {
      name: req.body.name,
    },
  })
    .then((author) => {
      if (!author) {
        User.create(data)
          .then((author) => {
            res.json(author);
          })
          .catch((error) => {
            res.status(500).json({ error: error.message });
          });
      } else {
        res.json({ error: "Author already added!" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

const addBlog = (req, res) => {
  if (req.body.params) {
    Blog.create(req.body)
      .then((postData) => {
        res.json({
          postData,
        });
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  } else {
    res.status(500).json({ error: "something went wrong" });
  }
};
const updateBook = (req, res) => {
  Blog.update(
    { title: req.body.title },
    { returning: true, where: { id: req.params.bookId } }
  )
    .then(function ([rowsUpdate, [updatedBook]]) {
      res.json(updatedBook);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};
module.exports = {
  addUser,
  addBlog,
  updateBook,
};
