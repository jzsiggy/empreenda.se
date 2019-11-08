const { mongooseConnect } = require('./resources');
const router = require('./routes');
const { serializer, deserializer, localStrategy } = require('./config/passport')

const flash = require('connect-flash');
const passport = require('passport');
const express = require('express');
const session = require('express-session');
const hbs = require('hbs');
const bodyParser = require('body-parser');

const app = express();

mongooseConnect();

app.use(session({
  secret: "123",
  resave: false,
  saveUninitialized: false,
}));

passport.serializeUser(serializer);
passport.deserializeUser(deserializer);
app.use(flash());
passport.use(localStrategy);

app.use(passport.initialize());
app.use(passport.session());

// app.use((req, res, next) => {
//   console.log(req.session);
//   next();
// });

hbs.registerPartials(`${__dirname}/views/partials`);
app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);
app.set(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded( { extended : true } ));
app.use("/", router);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});