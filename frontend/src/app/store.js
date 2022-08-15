import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import rewardReducer from '../features/rewards/rewardSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    rewards: rewardReducer
  },
});
