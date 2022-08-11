import React, {useEffect} from 'react';
// import DOMPurify from 'dompurify'
import {useSelector, useDispatch} from 'react-redux';
import {useParams, useNavigate} from 'react-router-dom';
import {BsFillCaretRightFill} from 'react-icons/bs';
import {toast} from 'react-toastify';
import {getReward, checkRewards} from '../features/rewards/rewardSlice';
import {BackButton, Spinner} from '../components';

function Activity() {
    const { reward, isLoading, isError, message } = useSelector((status) => status.rewards);
    
    const navigate = useNavigate();
    const {activityId} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if(isError){
            toast.error(message);
        }
        dispatch(getReward(activityId));
        // eslint-disable-next-line
    }, [isError, message, activityId]);

    // Close ticket
    const onTicketClose = () => {
        dispatch(checkRewards([
            {
                variable: 'activityID',
                value: reward._id
            }
        ]));
        toast.success('Activity completed');
        navigate('/activities');
    };

    if(isLoading) {
        return <Spinner />;
    }

    if(isError) {
        return <>
            <BackButton url='/activities' />
            <h3>Something Went Wrong</h3>
        </>
    }

    return (
        <>            
            <div className='activity-page'>
                <header className='activity-header'>
                    <BackButton url='/activities' />
                    <h2>
                        {reward.name}
                        <span className="status status-closed">
                            <BsFillCaretRightFill size={20} /> {reward._id}
                        </span>
                    </h2>
                    <h3>{reward.title}</h3>
                    <hr />
                    <div className='activity-desc'>
                        <p dangerouslySetInnerHTML={{__html: reward.description}}></p>
                        {/* <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(reward.description)}}></p> */}
                    </div>
                </header>
                {/* {(user.rewards.indexOf(reward._id) === user.rewards.length-1 ) && (user.rewards.includes(reward._id))  ? ( */}
                    <button onClick={onTicketClose} className='btn btn-block btn-std'>Complete This Activity</button>
                {/* ) : (<></>)} */}
            </div>
        </>
    );
}

export default Activity;