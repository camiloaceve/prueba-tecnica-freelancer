const bcrypt = require('bcrypt')
const { jwtToken } = require('../utils/jwt')

// upload image
const multer = require('multer')
const sharp = require('sharp')

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

/*
Register users
*/
async function register(req, res, next) {
  try {
    const { name, email } = req.body
    const password = await bcrypt.hash(req.body.password, 10)
    const userExist = await prisma.user.findFirst({
      where: { email: email }
    })
    if (userExist) {
      return res.status(400).json({ error: 'El correo ya esta registrado' })
    }
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password
      }
    })
    res.status(200).json(user)
  } catch (error) {
    res.status(500).send({
      message: 'Ocurrio un error'
    })
    next(error)
  }
}

/*
SignIn for users
*/
async function sigIn(req, res, next) {
  try {
    const user = await prisma.user.findUnique({
      where: { email: req.body.email }
    })
    if (!user) {
      throw new Error('Usuario no encontrado')
    }

    const valid = await bcrypt.compare(req.body.password, user.password)
    if (!valid) {
      throw new Error('Contraseña invalida')
    }

    const token = await jwtToken.createToken(user)

    res.status(200).json({
      user,
      token
    })
  } catch (error) {
    res.status(500).send({
      message: 'Ocurrio un error'
    })
    next(error)
  }
}

/*
Profile
*/
async function profile(req, res, next) {
  try {
    const { address, photo, userId } = req.body
    const profile = await prisma.profile.create({
      data: {
        address: address,
        userId: userId
      }
    })
    res.status(200).json(profile)
  } catch (error) {
    res.status(500).send({
      message: 'Ocurrio un error'
    })
    next(error)
  }
}

async function updateProfile(req, res, next) {
  try {
    const { id } = req.params
    await upload()
    const profile = await prisma.profile.update({
      where: { id },
      data: { address: req.body.address, photo:req.body.photo }
    })
    res.json(profile)
  } catch (error) {
    res.status(500).send({
      message: 'Ocurrio un error'
    })
    next(error)
  }
}

//const a = require('../../uploads')

async function upload(req, res, next) {
  const storage = multer.diskStorage({
    destination: (req, photo, cb) => {
      cb(null, './uploads')
    },
    filename: (req, photo, cb) => {
      const ext = photo.originalname.split('.').pop()
      cb(null, `${Date.now()}.${ext}`)
    }
  })
  const upload = multer({ storage})
  upload.single('photo')
}

module.exports = {
  register,
  sigIn,
  profile,
  updateProfile,
  upload
}
