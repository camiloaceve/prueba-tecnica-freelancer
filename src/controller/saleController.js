const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function disminuirStocks(bookId, amount) {
  let { stock } = await prisma.book.findUnique({ id: bookId })
  let nStock = parseInt(stock) - parseInt(amount)
  const reg = await models.Articulo.findByIdAndUpdate(
    { id: bookId },
    { stock: nStock }
  )
}

async function addSale(req, res, next) {
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

async function getSales(req, res, next) {
  try {
    const sales = await prisma.sale.findMany({
      where: { active: true }
    })
    res.json(sales)
  } catch (error) {
    res.status(500).send({
      message: 'Ocurrio un error'
    })
    next(error)
  }
}

async function getSale(req, res, next) {
  try {
    const {id}=req.params
    const sale = await prisma.sale.findFirst({
      where: {id}
    })
    res.status(200).json(sale)
  } catch (error) {
    res.status(500).send({
      message: 'Ocurrio un error'
    })
    next(error)
  }
}


module.exports = {
  addSale,
  getSales,
  getSale
}
