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

    app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../', 'frontend', 'build', 'index.html')));
} else {
    app.get('/', (req, res) => {
        res.status(200).json({message: "Welcome to the FORGE framework"});
     });    
}

// Middleware
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server successfully running on ${PORT}`.yellow);
});