import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  	Header,
  	Footer,
  	PrivateRoute
} from './components';
import {
	Activity,
	Activities,
  	Home,
  	Login,
  	Register
} from './pages';

function App() {
	return (
		<>
		<Router>
			<Header />
			<div className="container">
				<Routes>
					<Route path='/' element={<PrivateRoute />} >
              			<Route path='/' element={<Home />} />
            		</Route>
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/activities' element={<PrivateRoute />} >
              			<Route path='/activities' element={<Activities />} />
            		</Route>
					<Route path='/activity/:activityId' element={<PrivateRoute />} >
              			<Route path='/activity/:activityId' element={<Activity />} />
            		</Route>   					
				</Routes>
			</div>
			<Footer />
		</Router>
		<ToastContainer />
		</>    
	);	
}



export default App;
