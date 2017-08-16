/* eslint no-console: 0 */

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');
const authConfig = require('./config.js');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: authConfig.username, // YOUR GMAIL USER HERE -> EXAMPLE@gmail.com
    pass: authConfig.mailPassword  // YOUR GMAIL PASSWORD, DO NOT HOST THIS INFO ON GITHUB!
  }
});

if (isDeveloping) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(webpackHotMiddleware(compiler));
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });
} else {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(express.static(__dirname + '/dist'));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

app.post('/email', function prep(req, res) {
  const mailOptions = {
    from: '"' + req.body.first + ' ' + req.body.last + '" <' + authConfig.username + '>', // sender address
    to: 'noahrolf1@gmail.com', // list of receivers
    subject: 'Buffalo House Contact', // Subject line
    text: req.body.text + 'thier email: ' + req.body.email + 'their phone: ' + req.body.phone, // plaintext body
    html: '<b>' + req.body.text + '<br/>' + 'thier email: ' +  req.body.email + '<br/>' + 'their phone: ' + req.body.phone + '</b>' // html body
  };
  console.log(mailOptions);
  transporter.sendMail(mailOptions, function send(error, info) {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
    res.send('success');
  });
});

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
