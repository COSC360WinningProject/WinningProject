var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require('./routes/testAPI');
var postsRouter = require('./routes/posts');
var dbTestRouter = require('./routes/dbTest');
var dbInitRouter = require('./routes/dbInit');
var dbInsertTestRouter = require('./routes/dbInsertTest');
var adminSearchForUsers = require('./routes/adminSearchForUser');
var adminReports = require('./routes/adminReports');
const router = require('./routes/adminNumUsers');
var singlepostCommentsRouter = require('./routes/singlepostComments');
var userCommentHistoryRouter = require('./routes/userCommentHistory');
var createPostRouter = require('./routes/createPost');
var createUserRouter = require('./routes/createUser');
var createCommentRouter = require('./routes/createComment');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// This DB Config is accessible globally
dbConfig = {
  host: 'cosc360forumsite-do-user-8985545-0.b.db.ondigitalocean.com',
  port: '25060',
  user: 'doadmin',
  password: 'onh69ins6p82hx6c',
  database: 'defaultdb',
  sslmode: 'REQUIRED'
};

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/testAPI', testAPIRouter);
app.use('/posts', postsRouter);
app.use('/dbTest', dbTestRouter);
app.use('/dbInit', dbInitRouter);
app.use('/dbInsertTest', dbInsertTestRouter);
app.use('/adminSearchForUser', adminSearchForUsers);
app.use('/adminReports', adminReports);
app.use('/singlepostComments', singlepostCommentsRouter);
app.use('/userCommentHistory', userCommentHistoryRouter);
app.use('/createPost', createPostRouter);
app.use('/createUser', createUserRouter);
app.use('/createComment', createCommentRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
