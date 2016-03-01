import express from "express"
import apiCtrl from "./api_ctrl"


let router = express.Router()

router.route('/hello')
  .get(apiCtrl.hello)






export { router }
