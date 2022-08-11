import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {checkRewards, getRewards, resetReward} from '../features/rewards/rewardSlice';
import {Spinner, BackButton, ActivityItem} from '../components';

function Activities() {
    const {rewards, isLoading, isSuccess } = useSelector((state) => state.rewards);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     return () => {
    //         if(isSuccess) {
    //             dispatch(reset());
    //         }
    //     }
    // }, [dispatch, isSuccess]);

    useEffect(() => {
        dispatch(getRewards());
    }, [dispatch]);

    if(isLoading) {
        return <Spinner />;
    }

    return (
        <>
            <BackButton url='/' />
            <h1>Actitivies</h1>
            {/* <div className='activity'>
                <div className='activity-headings'>
                    <div>Date</div>
                    <div>Product</div>
                    <div>Status</div>
                </div>
            </div> */}
            <div className='activity-desc'>
                {rewards.map((reward) => (
                    <ActivityItem key={reward._id} reward={reward} />
                ))}                
            </div>
        </>
    )
}

export default Activities;
