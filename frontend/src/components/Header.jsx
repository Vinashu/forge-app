import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';
import { reset as resetReward } from '../features/rewards/rewardSlice';
import {FcContacts} from 'react-icons/fc';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import {FiUserCheck} from 'react-icons/fi';
import {MdOutlineMarkEmailRead} from 'react-icons/md';

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
	
    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
		dispatch(resetReward());
        navigate('/');
    }	

	return (
		<header className='header'>
			<div className='logo'>
				<Link to='/'><FcContacts /> FORGE APP</Link>
      		</div>
      		<ul>
			{user ? (
				<>
				<li>
					<Link to='/'>
						<FiUserCheck size={25} /> {user.name}
					</Link>  
				</li>
				<li>
					<Link to='/'>
						<MdOutlineMarkEmailRead size={25} /> ({user.email}) 
					</Link>  					
				</li>
				<li>
					<button onClick={onLogout} className="btn btn-std">
						<FaSignOutAlt className="btl-fa" /> <span className="btn-lbl">Logout</span>
					</button>
				</li>
				</>
			) : ( 
				<>
				<li>
					<Link to='/login'>
						<FaSignInAlt /> Login
					</Link>          
				</li>
				<li>
					<Link to='/register'>
						<FaUser /> Register
					</Link>
				</li>
				</> 
				)
			}        
      		</ul>
		</header>
	);
}

export default Header;