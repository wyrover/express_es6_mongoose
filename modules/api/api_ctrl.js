import { config } from '../../config/config'

function hello(req, res) {
  res.json({
    message: "hello world"
  })
}


export default { hello }

