import axios from 'axios';

const API_URL = '/api/rewards';

// Check for rewards
const checkRewards = async (messages, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const response = await axios.post(API_URL, messages, config);

    return response.data;
};

// Get rewards list
const getRewards = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const response = await axios.get(API_URL, config);

    if(response.data) {
        localStorage.setItem('rewards', JSON.stringify(response.data));
    }

    return response.data;
};

// Get a reward
const getReward = async (rewardId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const response = await axios.get(`${API_URL}/${rewardId}`, config);

    if(response.data) {
        localStorage.setItem('rewards', JSON.stringify(response.data));
    }

    return response.data;
};

const rewardService = {
    checkRewards,
    getRewards, 
    getReward,    
};

export default rewardService;