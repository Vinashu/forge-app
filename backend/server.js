const dotenv = require('dotenv').config();
const path = require('path');
const express = require('express')
const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const colors = require('colors');
const PORT = process.env.PORT || 5002;

// Connect to database
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/rewards', require('./routes/rewardRoutes'));

// Serve Frontend
if(process.env.NODE_ENV === 'production') {
    // Set build folder as static
    app.use(express.static(path.join(__dirname, '../frontend/build')));

    app.get('*', (req, res) => res.sendFile(__dirname, '../', 'frontend', 'build', 'index.html'));
} else {
    app.get('/', (req, res) => {
        res.status(200).json({message: "Welcome to the FORGE framework"});
     });    
}

// Middleware
app.use(errorHandler);

app.use(function(req, res, next) {
    res.status(404);
  
    // respond with html page
    if (req.accepts('html')) {
      res.render('404', { url: req.url });
      return;
    }
  
    // respond with json
    if (req.accepts('json')) {
      res.json({ error: 'Not found' });
      return;
    }
  
    // default to plain-text. send()
    res.type('txt').send('Not found');
});

process.on('uncaughtException', (error)  => {
    console.log('Alert! ERROR : ',  error);
    process.exit(1); // Exit your app 
});

process.on('unhandledRejection', (error, promise)  => {
    console.log('Alert! ERROR : ',  error);
    process.exit(1); // Exit your app 
});

app.listen(PORT, () => {
    console.log(`Server successfully running on ${PORT}`.yellow);
});