import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {FaLockOpen, FaLock} from 'react-icons/fa';

function ActivityItem({reward}) {
    const {user} = useSelector((state) => state.auth);

    return (
        <div className='activity'>
            <div>
                {
                    user.rewards.includes(reward._id) ? (
                        <FaLockOpen size={30}/>
                        ) : (
                            <FaLock size={30} />
                        )
                }

            </div>
            <div>{reward.name}</div>
            {/* <div className={`status status-${ticket.status}`}>{ticket.status}</div> */}
            <Link to={`/activity/${reward._id}`} className='btn btn-reverse btn-sm'>View</Link>
        </div>
    );
}

export default ActivityItem;