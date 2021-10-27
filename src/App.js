
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Card } from './pages/Card';
import { Wallet } from './pages/Wallet';
import { ContactUs } from './pages/ContactUs';
import 'antd/dist/antd.css';

function App() {

	return (
		<Router>
			<Switch>
				<Route exact component={Home} path="/" />
				<Route exact component={Card} path="/card" />
				<Route exact component={Wallet} path="/wallet" />
				<Route exact component={ContactUs} path="/contactus" />
			</Switch>
		</Router>
	);
}

export default App;
