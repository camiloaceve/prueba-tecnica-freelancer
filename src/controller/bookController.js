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

async function getBooks(req, res, next) {
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

async function getBook(req, res, next) {
  try {
    const {id}=req.params
    const book = await prisma.book.findFirst({
      where: {id}
    })
    res.status(200).json(book)
  } catch (error) {
    res.status(500).send({
      message: 'Ocurrio un error'
    })
    next(error)
  }
}

async function updateBook(req, res, next) {
  try {
    const { isbn, title, price, editorial, stock } = req.body
    const { id } = req.params
    const book = await prisma.book.update({
      where: { id },
      data: {
        isbn: isbn,
        title: title,
        price: price,
        editorial: editorial,
        stock: stock
      }
    })
    res.status(200).json(book)
  } catch (error) {}
}

async function deleteBook(req, res, next) {
  try {
    const {id}= req.params
    const book = await prisma.book.update({
      where: {id},
      data: {active:false}
    })
    res.status(200).json(book)
  } catch (error) {
    res.status(500).send({
      message: 'Ocurrio un error'
    })
    next(error)
  }
}

module.exports = {
  add,
  getBooks,
  getBook,
  updateBook,
  deleteBook
}
