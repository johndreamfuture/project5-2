let BookModel = require('../model/bookModel')

let controller = {
  create(request, response) {
    BookModel
      .create(request.body)
      .then(data => response.json(data))
      .catch(error => {
        console.error("Error on create()")
        response
          .status(500)
          .json({ error: "Something went wrong" })
      })
  },
  getById(request, response) {
    BookModel
      .findById(request.params.id)
      .then(data => response.json(data))
      .catch(error => {
        console.error("Error on getById()")
        response
          .status(500)
          .json({ error: "Something went wrong" })
      })
  },
  getAll(request, response) {
    BookModel
      .find()
      .then(data => response.json(data))
      .catch(error => {
        console.error("Error on getAll()")
        response
          .status(500)
          .json({ error: "Something went wrong" })
      })
  },
  update(request, response) {
    BookModel
      .findByIdAndUpdate(request.params.id, request.body, { new: true })
      .then(data => response.json(data))
      .catch(error => {
        console.error("Error on update()")
        response
          .status(500)
          .json({ error: "Something went wrong" })
      })
  },
  delete(request, response) {
    BookModel
      .findByIdAndRemove(request.params.id)
      .then(() => response.json({ success: true }))
      .catch(error => {
        console.error("Error on delete()" + error)
        response
          .status(500)
          .json({ error: "Something went wrong" })
      })
  },
}

module.exports = controller