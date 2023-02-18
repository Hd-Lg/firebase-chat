import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ChatRoom from './pages/ChatRoom';
import Login from './pages/Login';
import { PrivateRoute } from './routes/PrivateRoute';
import { AuthProvider } from './utils/AuthContext';

const App = () => {
	return (
		<AuthProvider>
			<Navbar />
			<Routes>
				<Route path='/' element={<Login />} />
				<Route
					path='/chat'
					element={
						<PrivateRoute>
							<ChatRoom />
						</PrivateRoute>
					}
				/>
			</Routes>
		</AuthProvider>
	);
};

export default App;
