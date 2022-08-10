import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';
import {FcContacts} from 'react-icons/fc';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
	
    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate('/');
    }	

	return (
		<header className='header'>
			<div className='logo'>
				<Link to='/'><FcContacts /> FORGE APP</Link>
      		</div>
      		<ul>
			{user ? (
				<li>
					<button onClick={onLogout} className="btn btn-std">
						<FaSignOutAlt className="btl-fa" /> <span className="btn-lbl">Logout</span>
					</button>
				</li>                    
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