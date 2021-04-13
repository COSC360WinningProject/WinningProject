var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');


// ROOT ROUTE
var indexRouter = require('./routes/index');

// DB INIT & TESTING
var dbTestRouter = require('./routes/dbTest');
var dbInitRouter = require('./routes/dbInit');
var dbInsertTestRouter = require('./routes/dbInsertTest');
var testAPIRouter = require('./routes/testAPI');

// GENERAL USER ROUTES
var usersRouter = require('./routes/users');
var postsRouter = require('./routes/posts');
var singlepostCommentsRouter = require('./routes/singlepostComments');
var userCommentHistoryRouter = require('./routes/userCommentHistory');
var createPostRouter = require('./routes/createPost');
var createCommentRouter = require('./routes/createComment');
var showProfileRouter = require('./routes/showProfile');
var loginRouter = require('./routes/login');
var signupRouter = require('./routes/signup');
var updateProfileRouter = require('./routes/updateProfile');
var updateProfilePictureRouter = require('./routes/updateProfilePicture');

// ADMIN ROUTES
var adminSearchForUsers = require('./routes/adminSearchForUser');
var adminReports = require('./routes/adminReports');
var adminNumUsersRouter = require('./routes/adminNumUsers');
var updateEnabledRouter = require('./routes/changeUserEnabledStatus');
var adminDeleteCommentRouter = require('./routes/adminDeleteComment');
var adminDeletePostRouter = require('./routes/adminDeletePost');
var adminEditCommentRouter = require('./routes/adminEditComment');
var adminEditPostRouter = require('./routes/adminEditPost');
var adminGetCommentsRouter = require('./routes/adminGetComments');
var adminSearchForPostRouter = require('./routes/adminSearchForPost');


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

// ROOT ROUTE
app.use('/', indexRouter);

// DB INIT & TESTING
app.use('/dbTest', dbTestRouter);
app.use('/dbInit', dbInitRouter);
app.use('/dbInsertTest', dbInsertTestRouter);
app.use('/testAPI', testAPIRouter);

// GENERAL USER ROUTES
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/showProfile', showProfileRouter);
app.use('/userCommentHistory', userCommentHistoryRouter);
app.use('/posts', postsRouter);
app.use('/singlepostComments', singlepostCommentsRouter);
app.use('/createPost', createPostRouter);
app.use('/createComment', createCommentRouter);
app.use('/updateProfile', updateProfileRouter);
app.use('/updateProfilePicture', updateProfilePictureRouter);

// ADMIN ROUTES
app.use('/adminSearchForUser', adminSearchForUsers);
app.use('/adminReports', adminReports);
app.use('/adminNumUsers', adminNumUsersRouter)
app.use('/updateEnabled', updateEnabledRouter);
app.use('/adminDeleteComment', adminDeleteCommentRouter);
app.use('/adminDeletePost', adminDeletePostRouter);
app.use('/adminEditPost', adminEditPostRouter);
app.use('/adminEditComment', adminEditCommentRouter);
app.use('/adminGetComments', adminGetCommentsRouter);
app.use('/adminSearchForPost', adminSearchForPostRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
