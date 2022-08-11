import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import rewardReducer from '../features/rewards/rewardSlice';
// import ticketReducer from '../features/tickets/ticketSlice';
// import noteReducer from '../features/notes/noteSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    rewards: rewardReducer
    // tickets: ticketReducer,
    // notes: noteReducer,
  },
});
