
//Express related requires
const express = require('express') 
const app = express()


//Files requires
const router = require('./routes/router.js')
const controller = require('./controllers/controller.js')

//Node modules requires
const dotenv = require('dotenv')


//Application uses
app.use(express.json())
app.use(router)

//Other's configuration
dotenv.config()

//Destructuring  process.env to get the PORT variable


const {PORT} = process.env


//Endpoints 

app.get('/', (request, response) => {
 response.send('Hello World!')
})


//Port Listening
app.listen(PORT, err => {
  let listeningAt  = `The server is running at the port: ${PORT}`
  if(err) throw err
  console.log(listeningAt)
})

