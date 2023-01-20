const express = require('express')
const morgan = require('morgan')
const { routes } = require('./routes')


const port = 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/static', express.static( __dirname + '/public'))
app.use(morgan('dev'))

routes(app)

app.listen(port, ()=>{
    console.log(`Server running at port ${port}`)
})