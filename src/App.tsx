import './App.css';
import { useEffect } from 'react';
import UserService from './services/userService';

const App = (): JSX.Element => {

	// Example of call to firestore
	useEffect(() => {
		getUsers();
	});
	const getUsers = async () => {
		const users = await UserService.getAll();
		console.log('Users:', users);
	};

	return (
		<div className="App">
			React Boilerplate for Firebase
		</div>
	);
};

export default App;
