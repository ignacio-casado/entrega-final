//
import productRouter from './router/product-router'
import cartRouter from './router/cart-router'
const express = require("express") 
// EXPRESS
const app = express();

//PUERTO
const PORT = process.env.PORT || 8080
//DATE
/* let dateNow = new date() */

//SERVER
const server = app.listen('PORT', ()=>{

    console.log(`Server Up ${PORT}  `)
})
// APP USE
app.use(express.json)
app.use(express.urlencoded({extended: true}))

//APP USE ROUTES
app.use('/api/productos', productRouter)
app.use('/api/carrito', cartRouter) 
