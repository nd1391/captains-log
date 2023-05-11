require("dotenv").config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const { connect, connection } = require('mongoose')
const methodOverride = require('method-override')

// View Engine Middleware Configure
const reactViewsEngine = require('jsx-view-engine').createEngine();
app.engine('jsx', reactViewsEngine);
// This line tells the render method the default file extension to look for.
app.set('view engine', 'jsx');
// This line sets the render method's default location to look for a jsx file to render. Without this line of code we would have to specific the views directory everytime we use the render method
app.set('views', './views');

// Middleware // this enables the req.body
app.use(express.urlencoded({ extended: false }));

//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));
//this tells the server to go look for static assets in the public folder, like for css, images, or fonts
app.use(express.static("public"))

// Custom Middleware
app.use((req, res, next) => {
  console.log('Middleware running...');
  next();
});

  // New // renders a form to create a new fruit
router.get('/new', (req, res) => {
    res.render('fruits/New');
});

  // Listen
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});