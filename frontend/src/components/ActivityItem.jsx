import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {FaLockOpen, FaLock} from 'react-icons/fa';

function ActivityItem({reward}) {
    const {user} = useSelector((state) => state.auth);
    const {newReward} = useSelector((state) => state.rewards);

    return (
        <div className='activity'>
            <div className='activity-left'>
                {
                    user.rewards.includes(reward._id) || newReward.includes(reward._id) ? (
                        <FaLockOpen size={30}/>
                        ) : (
                            <FaLock size={30} />
                        )
                }

            </div>
            <div className='activity-mid'>{reward.name}</div>
            {
                (user.rewards.includes(reward._id) || newReward.includes(reward._id)) &&
                <Link 
                    to={`/activity/${reward._id}`} 
                    className='btn btn-reverse btn-sm activity-right' 
                >
                   View
                </Link>
            }
        </div>
    );
}

export default ActivityItem;