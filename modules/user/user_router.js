import express from 'express'
import validate from 'express-validation'
import paramValidation from './user_param-validation'
import userCtrl from './user_ctrl'

let router = express.Router()

router.route('/')  
  .get(userCtrl.list)
  .post(validate(paramValidation.createUser), userCtrl.create)

router.route('/:userId')
  .get(userCtrl.get)
  .put(validate(paramValidation.updateUser), userCtrl.update)
  .delete(userCtrl.remove)

router.param('userId', userCtrl.load)

export { router }