'use strict';

require('dotenv').config();
var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
const swaggerUi = require('swagger-ui-express');

module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware

  const swaggerUiMiddleware = swaggerUi.setup(
    swaggerExpress.runner.swagger
  );

  app.use('/api-docs', swaggerUi.serve, swaggerUiMiddleware);

  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});
