const express = require('express');
const router = express.Router();
const { checkReward, rewardList, getReward } = require('../controllers/rewardController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, checkReward);
router.get('/:id', protect, getReward);
router.get('/', protect, rewardList);

module.exports = router;