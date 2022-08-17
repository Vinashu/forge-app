import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getRewards} from '../features/rewards/rewardSlice';
import {checkRewards} from '../features/rewards/rewardSlice';
import {BsBookmarkCheckFill} from 'react-icons/bs';
import {Spinner, BackButton, ActivityItem} from '../components';

function Activities() {
    const {rewards, isLoading} = useSelector((state) => state.rewards);
    const {user} = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRewards());
    }, [dispatch]);

    useEffect(() => {
        if(user.rewards.length === 0) {
            dispatch(checkRewards([
                {
                    variable: 'activityID',
                    value: 0
                }
            ]));
        }
    }, [dispatch, user]);

    if(isLoading) {
        return <Spinner />;
    }

    return (
        <>
            <BackButton url='/' />
            <h1><BsBookmarkCheckFill size={40}/>Actitivies</h1>
            {/* <div className='activity'>
                <div className='activity-headings'>
                    <div>Date</div>
                    <div>Product</div>
                    <div>Status</div>
                </div>
            </div> */}
            <div className='activity-desc'>
                {rewards?.map((reward) => (
                    <ActivityItem key={reward?._id} reward={reward} />
                ))}                
            </div>
        </>
    )
}

export default Activities;
