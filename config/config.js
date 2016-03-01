import glob from 'glob'
import _ from 'lodash'

exports.config = {
  port: 3060,
  bodyparserSizeLimit: "10mb",
  extended: true,
  routes: './routes/**/*.js',
  models: './models/**/*.js',
  //db: 'mongodb://localhost/express-es6-mongoose',
  db: 'mongodb://localhost:27017/blog',
  title : 'express es6 mongoose',
  globFiles: function(location) {
    var files = glob.sync(location)
    var output = []
    output = _.union(output, files)
    return output
  }
}
