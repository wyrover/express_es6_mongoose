import { config } from './config/config'
import Promise from 'bluebird'
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import mongoose from 'mongoose'
import _ from 'lodash'
import path from 'path'
import { allowCrossDomain } from "./middlewares/crossDomain"
import { router as homeRouter } from "./modules/home/home_router"
import { router as apiRouter } from "./modules/api/api_router"
import { router as driverRouter } from "./modules/driver/driver_router"
import { router as userRouter } from "./modules/user/user_router"

Promise.promisifyAll(mongoose)

// connect to mongo db
mongoose.connect(config.db, { server: { socketOptions: { keepAlive: 1 } } })
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.db}`)
})


let app = express()

// views
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'jade')

// app use
app.use(allowCrossDomain)
app.use(express.static(path.join(__dirname, './public')))
app.use(logger('dev'))
app.use(bodyParser.json({
  limit: config.bodyparserSizeLimit
}))
app.use(bodyParser.urlencoded({
  limit: config.bodyparserSizeLimit,
  extended: config.extended
}))
app.use(cookieParser())


app.use("/home", homeRouter)
app.use("/api", apiRouter)
app.use("/driver", driverRouter)
app.use('/api/users', userRouter)


// Catch any other routes and send a 404
app.all("*", (req, res) => {
  res.status(404).json({
    message: "Error: Route does not exist!"
  })
})

app.listen(config.port, function() {
  console.log(`App Running on http://localhost:${config.port}`);
})


export default app