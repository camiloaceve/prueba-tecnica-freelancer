# Test-Freelancer

el reto estuvo desarrollado con node js, manejo de jsonwebtoken para el inicio de sesion se trabajaron con middlewares y funciones reutilizabes para no repetir codigo, encriptacion para las cntraseñas y configuracion del eslint y prettier para el manejo de un buen codigo con buernas practicas como error por variables declaradas si utilizar.

Se debe clonar el repositorio e instalar las dependencias antes de correrlo de manera local.

###### npm install

configure .env

Run migration database

###### npx prisma migrate dev

## Run localhost:

###### npm run dev

## Endpoints

### Register

http://localhost:4001/api/user/register

#### Data

{
"name": "Juan pedro",
"email":"juan2@test.com",
"password":"12345678"
}

### SignIn

http://localhost:4001/api/user/login

#### Data

{
"email":"juan2@test.com",
"password":"12345678"
}

### Profile
http://localhost:4001/api/user/update/profile/a96f5ff0-04f9-4bba-8283-a2624188f4fb

Token

#### Data
{
    "address":"avndad viva",
    "userId":"af060e90-c9e7-440e-b8ee-eaf0eaaeb850"
}

### Book

#### Add

http://localhost:4001/api/book/add

Token

##### Data

{
"isbn":"asda",
"title":"El arte de la guerra",
"price":12000,
"editorial":"no se",
"stock":8
}

#### Find All

http://localhost:4001/api/book/find

Token


##### Response

[
{
"id": "dd4ee536-89d3-4598-a0a3-c9eac40b5e0c",
"isbn": "asda",
"title": "Cien años de soledad",
"price": 12000,
"active": true,
"editorial": "no se",
"stock": 10
},
{
"id": "c8bfec52-5b42-41ca-bbe4-c803d404c3c8",
"isbn": "asda",
"title": "El arte de la guerra",
"price": 12000,
"active": true,
"editorial": "no se",
"stock": 8
}
]

#### Update book

http://localhost:4001/api/book/update/676fa982-9889-4a11-9269-9a702289a300

Token

##### Data

{
"isbn":"asda",
"title":"El arte de la guerra",
"price":12000,
"editorial":"no se",
"stock":8
}
