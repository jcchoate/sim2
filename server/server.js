require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const controller = require('./controller')

const app = express()
app.use(bodyParser.json())
app.use(express.static('SuperCool.jpg'))

const port = process.env.PORT
massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('You have connected to the database, my lord.')
    app.listen(port, () => { console.log(port + ' troopers at your command, my lord.') })
}).catch(err => console.log(err))




app.post('/homes', controller.create)
app.get('/homes', controller.getAll)
app.get('/homes/:id', controller.getOne)
app.put('/homes/:id', controller.update)
app.delete('/homes/:id', controller.delete)

