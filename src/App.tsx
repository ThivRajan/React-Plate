import './App.css';
import { Switch, Route } from 'react-router-dom';

const App = (): JSX.Element => {
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
