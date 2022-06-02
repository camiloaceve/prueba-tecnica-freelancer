const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function add(req, res, next) {
  try {
    const { isbn, title, price, editorial, stock } = req.body
    const book = await prisma.book.create({
      data: {
        isbn: isbn,
        title: title,
        price: price,
        editorial: editorial,
        stock: stock
      }
    })
    res.status(200).json(book)
  } catch (error) {
    res.status(500).send({
      message: 'Ocurrio un error'
    })
    next(error)
  }
}

async function getBook(req, res, next) {
  try {
    const books = await prisma.book.findMany({
      where: { active: true }
    })
    res.json(books)
  } catch (error) {
    res.status(500).send({
      message: 'Ocurrio un error'
    })
    next(error)
  }
}

async function updateBook(req, res, next) {
  try {
    const { isbn, title, price, editorial, stock, active } = req.body
    const { id } = req.params
    const book = await prisma.book.update({
      where: { id },
      data: {
        isbn: isbn,
        title: title,
        price: price,
        active: active,
        editorial: editorial,
        stock: stock
      }
    })
    res.status(200).json(book)
  } catch (error) {}
}

module.exports = {
  add,
  getBook,
  updateBook
}
