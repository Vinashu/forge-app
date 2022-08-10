import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Header,
  Footer
} from './components';
import {
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
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
				</Routes>
			</div>
			<Footer />
		</Router>
		<ToastContainer />
		</>    
	);	
}



export default App;
