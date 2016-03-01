import { config } from '../../config/config'

function index(req, res) {
  res.render('index', {title : config.title })
}

function test(req, res) {
  res.json({
    message: "hello world"
  })
}


export default { index, test }

