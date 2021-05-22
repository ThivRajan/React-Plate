import './App.css';
import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import UserService from './services/userService';
import { useStore, setName } from './state';

const App = (): JSX.Element => {
	const [{ name }, dispatch] = useStore();

	useEffect(() => {
		getUsers(); // Example of call to firestore
		dispatch(setName('new name')); // Example usage of state
	});

	const getUsers = async () => {
		const users = await UserService.getAll();
		console.log('Users:', users);
	};

	console.log('Name:', name);

	return (
		<Switch>
			<Route path="/">
				<div className="App">
					React Boilerplate with Routing
				</div>
			</Route>
		</Switch>
	);
};

export default App;
