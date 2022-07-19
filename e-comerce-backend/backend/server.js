require('dotenv').config()
const express = require('express')
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
const cartRoutes = require('./routes/cartRoutes')
const storeRoutes = require('./routes/storeRoutes')
const orderRoutes = require('./routes/orderRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
const {connectDB} = require('./config/db')
const cors = require('cors')

connectDB()

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.json({message: 'API running...'})
})

app.use('/api/products', productRoutes)
app.use('/api/user', userRoutes)
app.use('/api/cart', cartRoutes)
app.use('/api/categories', categoryRoutes)
app.use('/api/stores', storeRoutes)
app.use('/api/orders', orderRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

process.on('warning', e => console.warn(e.stack));
