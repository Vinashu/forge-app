const express = require('express');
const router = express.Router();
const { checkReward, rewardList } = require('../controllers/rewardController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, checkReward);
router.get('/', protect, rewardList)

module.exports = router;