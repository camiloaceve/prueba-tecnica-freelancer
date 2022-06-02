const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function aumentarStocks(bookId, cantidad) {
  let { stock } = await prisma.book.findOne({ id: bookId })
  let nStock = parseInt(stock) + parseInt(cantidad)
  const reg = await models.Articulo.findByIdAndUpdate(
    { id: bookId },
    { stock: nStock }
  )
}

async function addEntry(req, res, next) {
  try {
    const { dealer, bookId } = req.body
    const entry = await prisma.entry.create({
      data: {
        dealer: dealer,
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

module.exports = {
  addEntry
}
