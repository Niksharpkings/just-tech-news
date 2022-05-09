const path = require('path');  //  for path.join()
const express = require('express'); //  for express.Router()
const session = require('express-session'); //  for session.
const exphbs = require('express-handlebars'); //  for handlebars.

const app = express(); //  for app.use()
const PORT = process.env.PORT || 3001; //  for PORT.

const sequelize = require('./config/connection'); //  for sequelize.
const SequelizeStore = require('connect-session-sequelize')(session.Store); //  for SequelizeStore.

const sess = { //  for sess. (session. ) (session.Store) (session.Store.Store) 
  secret: 'Super secret secret', //  for sess.secret. This is used to sign the session ID cookie. This is also used to encrypt the session data on the client side. This is also used to decrypt the session data on the server side. This is also used to sign the session ID cookie.  This is also used to encrypt the session data on the client side. This is also used to decrypt the session data on the server side. This is also used to sign the session ID cookie.
  cookie: {}, //  for sess.cookie. (empty object) (default: { path: '/', httpOnly: true, secure: false, maxAge: null }) (https://www.npmjs.com/package/connect-session-sequelize) (https://www.npmjs.com/package/connect-session-sequelize#options) (https://www.npmjs.com/package/connect-session-sequelize#options-object) 
  resave: false, //  for sess.resave. (false = don't save session if unmodified) (true = save session anyway) (default = true)  (false = don't save session if unmodified)
  saveUninitialized: true, // for sess.saveUninitialized. 
  store: new SequelizeStore({ //  for sess.store. new SequelizeStore({ ... }).
    db: sequelize //  for sess.store.db. (= sequelize) 
  }) //  for sess.store. 
}; //  for sess. (end)

app.use(session(sess)); //  for app.use(). Use session middleware. Pass in sess object. This will create a new session for each user. This is a cookie that will be stored on the user's computer. It will be used to identify the user. This is a cookie that will be stored on the user's computer. It will be used to identify the user. This is a cookie that will be stored on the user's computer. It will be used to identify the user.  

const hbs = exphbs.create({}); //  for hbs.   

app.engine('handlebars', hbs.engine); //  for app.engine(). (handlebars is the engine name, hbs is the engine itself.)
app.set('view engine', 'handlebars'); //  for app.set(). set view engine to handlebars.   (handlebars is the engine) 

app.use(express.json()); //  for app.use(). 
app.use(express.urlencoded({ extended: false })); //  for app.use(). extended: false means that only the first value will be parsed. This is because we only want to parse the first value in the query string. If we wanted to parse all values, we would set extended: true. 
app.use(express.static(path.join(__dirname, 'public'))); //  for app.use().

app.use(require('./controllers/')); //  for app.use(). (controllers/index.js)

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
