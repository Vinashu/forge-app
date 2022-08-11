import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import rewardService from './rewardService';

const initialState = {
    rewards: [],
    reward: {},
    newReward: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
};

// Check for rewards
export const checkRewards = createAsyncThunk('rewards/check', async (messages, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await rewardService.checkRewards(messages, token);
    } catch (error) {
       const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
       return thunkAPI.rejectWithValue(message);
    }
});

// Get reward list
export const getRewards = createAsyncThunk('rewards/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await rewardService.getRewards(token);
    } catch (error) {
       const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
       return thunkAPI.rejectWithValue(message);
    }
});

// Get reward list
export const getReward = createAsyncThunk('rewards/getOne', async (rewardId, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await rewardService.getReward(rewardId, token);
    } catch (error) {
       const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
       return thunkAPI.rejectWithValue(message);
    }
});

export const rewardSlice = createSlice({
    name: 'reward',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(checkRewards.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(checkRewards.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                if(action.payload.length > 0) {
                    state.newReward.push(...action.payload);
                }
            })
            .addCase(checkRewards.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })   
            .addCase(getRewards.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getRewards.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.message = "";
                state.rewards = action.payload;
                state.reward = {};
            })
            .addCase(getRewards.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
                state.message = action.payload;
            })   
            .addCase(getReward.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getReward.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.reward = action.payload;
            })
            .addCase(getReward.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
                state.message = action.payload;
            })                   
    }    
});

export const { reset, resetReward } = rewardSlice.actions;
export default rewardSlice.reducer;