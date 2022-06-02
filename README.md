# Test-Freelancer

el reto estuvo desarrollado con node js, manejo de jsonwebtoken para el inicio de sesion se trabajaron con middlewares y funciones reutilizabes para no repetir codigo, encriptacion para las cntraseñas y configuracion del eslint y prettier para el manejo de un buen codigo con buernas practicas como error por variables declaradas si utilizar.

Se debe clonar el repositorio e instalar las dependencias antes de correrlo de manera local.

###### npm install

configure .env

## Run localhost:

npm run dev

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
