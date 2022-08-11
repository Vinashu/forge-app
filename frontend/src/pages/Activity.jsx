import React, {useEffect, useState} from 'react';
import DOMPurify from 'dompurify'
import {useSelector, useDispatch} from 'react-redux';
import {useParams, useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import {getReward} from '../features/rewards/rewardSlice';
import {BackButton, Spinner} from '../components';

// const customStyles = {
//     content: {
//         width: '600px',
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         marginRight: '-50%',
//         transform: 'translate(-50%, -50%)',
//         position: 'relative',
//     }
// };

function Activity() {
    const { reward, isLoading, isSuccess, isError, message } = useSelector((status) => status.rewards);
    const { user } = useSelector((status) => status.auth);
    
    const navigate = useNavigate();
    // const params = useParams();
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
        // dispatch(closeTicket(ticketId));
        toast.success('Ticket Closed');
        navigate('/tickets');
    };

    const onNoteSubmit = (event) => {
        event.preventDefault();
        // dispatch(createNote({noteText, ticketId}));
    }

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
                            {reward._id}
                        </span>
                    </h2>
                    <h3>{reward.title}</h3>
                    <hr />
                    <div className='activity-desc'>
                        <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(reward.description)}}></p>                        
                    </div>
                </header>
                {(user.rewards.indexOf(reward._id) === user.rewards.length-1 ) && (user.rewards.includes(reward._id)) ? (
                    <button onClick={onTicketClose} className='btn btn-block btn-std'>Complete This Activity</button>
                ) : (<></>)}
            </div>
        </>
    );
}

export default Activity;