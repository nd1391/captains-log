require("dotenv").config()
const express = require('express');
const router = express.Router()
const app = express();
const PORT = process.env.PORT || 3000;
const { connect, connection } = require('mongoose')
const methodOverride = require('method-override');
const Log = require("./models/logs");

// Database connection
connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
connection.once('open', () => {
    console.log('connected to mongo')
})

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

  // Index
app.get('/logs', async (req, res) => {
    console.log('Index Controller Func. running...');
    try {
      const foundLog = await Log.find({}) 
      res.status(200).render('Index', { logs:
      foundLog });
    } catch (err) {
      res.status(400).send(err)
    }
});

  // New // renders a form to create a new fruit
app.get('/logs/new', (req, res) => {
    res.render('New');
});


// Create
app.post('/logs', async (req, res) => {
    console.log('we hittin it')
    try {
        req.body.shipIsBroken = req.body.shipIsBroken === 'on';
        const newLog = await Log.create(req.body);
        console.log(newLog)
        res.redirect('/logs')
    } catch (err) {
        res.status(400).send(err)
    }
})

// Show
app.get('/logs/:id', async (req, res) => {
    try {
        const foundLog = await Log.findById(req.params.id)
        res.render('Show', {
            log: foundLog,
        })
    } catch (err) {
        res.status(400).send(err)
    }
})

  // Listen
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});