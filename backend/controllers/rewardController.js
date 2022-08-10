const asyncHandler = require('express-async-handler');
const http = require('http');
const https = require('https');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const FORGE_URI = process.env.FORGE_URI;

// @desc    Check for rewards
// @route   POST /api/rewads
// @access  Private
const checkReward = asyncHandler(async (req, res) => {
    // Get user using the id in the JWT
    const user = await User.findById(req.user.id);
    const messages = req.body;

    if(!user) {
        res.status(401);
        throw new Error("User not found.");
    }

    if(!messages) {
        res.status(401);
        throw new Error("Missing messages.");
    }

    const url = `${FORGE_URI}/api/rewards`;
    const postData = JSON.stringify(messages);   
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(postData)
        }
    };
    const request = await http.request(url, options, (response) => {
        response.setEncoding('utf8');
        response.on('data', (data) => {
            res.status(200).json(JSON.parse(data));
        });
        response.on('end', () => {
            // console.log('No more data in response.');
        });        
    });

    request.on('error', (e) => {
        res.status(500);
        throw new Error(e.message);
    });
    request.write(postData);
    request.end();
});

// @desc    Get reward list
// @route   Get /api/rewads
// @access  Private
const rewardList = asyncHandler(async (req, res) => {
    // Get user using the id in the JWT
    const user = await User.findById(req.user.id);

    if(!user) {
        res.status(401);
        throw new Error("User not found.");
    }

    const url = `${FORGE_URI}/api/rewards`;

    const request = await http.get(url, (response) => {
        response.on('data', (data) => {
            res.status(response.statusCode).json(JSON.parse(data));
        });

        response.on('error', (data) => {
            res.status(response.statusCode).json({message: data});            
        });
    });
    request.on('error', (e) => {
        res.status(500);
        throw new Error(e.message);
    });    
});


module.exports = { checkReward, rewardList };