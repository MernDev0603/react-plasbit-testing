
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Card } from './pages/Card';
import 'antd/dist/antd.css';

function App() {

	return (
		<Router>
			<Switch>
				<Route exact component={Home} path="/">
					<Home />
				</Route>
				<Route exact component={Card} paht="/card">
					<Card />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
