const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function aumentarStocks(bookId, amount) {
  let { stock } = await prisma.book.findUnique({ id: bookId })
  let nStock = parseInt(stock) + parseInt(amount)
  const reg = await models.Articulo.findByIdAndUpdate(
    { id: bookId },
    { stock: nStock }
  )
}

async function addEntry(req, res, next) {
  try {
    const { dealer, bookId, amount } = req.body
    const entry = await prisma.entry.create({
      data: {
        dealer: dealer,
        amount: amount,
        book: {
          connect: {
            id: bookId
          }
        }
      }
    })
    res.status(200).json(entry)
  } catch (error) {
    res.status(500).send({
      message: 'Ocurrio un error'
    })
    next(error)
  }
}

async function getEntries(req, res, next) {
  try {
    const entries = await prisma.entry.findMany({
      where: { active: true }
    })
    res.json(entries)
  } catch (error) {
    res.status(500).send({
      message: 'Ocurrio un error'
    })
    next(error)
  }
}

async function getEntry(req, res, next) {
  try {
    const {id}=req.params
    const entry = await prisma.entry.findFirst({
      where: {id}
    })
    res.status(200).json(entry)
  } catch (error) {
    res.status(500).send({
      message: 'Ocurrio un error'
    })
    next(error)
  }
}

module.exports = {
  addEntry,
  getEntries,
  getEntry
}
