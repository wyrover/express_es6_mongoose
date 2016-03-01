import express from "express"
import homeCtrl from "./home_ctrl"


let router = express.Router()

router.route('/')
  .get(homeCtrl.index)

router.route('/test')
  .get(homeCtrl.test)


//router.get("/", (req, res) => {
//    res.json({
//      message: "hello world"
//    })
//  })
//  .get("/test", (req, res) => {
//    res.json({
//      message: "test1"
//    })
//  })

export { router }
