
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Home } from './pages/Home';
import { Card } from './pages/Card';
import { Wallet } from './pages/Wallet';
import { ContactUs } from './pages/ContactUs';
import { Privacy } from './pages/Privacy';
import { Calculator } from './pages/Calculator';
import { Legal } from './pages/Legal';
import { DashboardView } from './pages/DashboardView';
import { DashboardPage } from './components/DashboardPage';
import 'antd/dist/antd.css';

function App() {

	const isLoggedIn = true;
	const isVerified = true;
	const isAdmin = true;

	return (
		<Router>
			<Switch>
				<Route exact component={Home} path="/" />
				<Route exact component={Card} path="/card" />
				<Route exact component={Wallet} path="/wallet" />
				<Route exact component={ContactUs} path="/contact" />
				<Route component={Privacy} path="/privacy" />
				<Route exact component={Calculator} path="/calculator" />
				<Route component={Legal} path="/legal" />
				<Redirect exact from="/home" to={{ pathname: '/home/dashboard' }} />
				<DashboardView exact path="/home/dashboard" component={DashboardPage} isLoggedIn={isLoggedIn} isVerified={isVerified} admin={isAdmin} />
				<DashboardView exact path="/home/wallet" component={DashboardPage} isLoggedIn={isLoggedIn} isVerified={isVerified} admin={isAdmin} />
				{/* <PrivateRoute exact path="/home/cards" component={CardsView} isLoggedIn={isLoggedIn} isVerified={isVerified} admin={isAdmin} />
				<PrivateRoute exact path="/home/cards/:id" component={OpenCard} isLoggedIn={isLoggedIn} isVerified={isVerified} admin={isAdmin} />
				<PrivateRoute exact path="/home/deposit" component={NewDepositsView} isLoggedIn={isLoggedIn} isVerified={isVerified} admin={isAdmin} />
				<PrivateRoute exact path="/home/wallet" component={NewWallet} isLoggedIn={isLoggedIn} isVerified={isVerified} admin={isAdmin} />
				<PrivateRoute exact path="/home/change-password" component={ChangePassword} isLoggedIn={isLoggedIn} isVerified={isVerified} admin={isAdmin} />
				<PrivateRoute exact path="/home/user-profile" component={UserProfile} isLoggedIn={isLoggedIn} isVerified={isVerified} admin={isAdmin} />
				<PrivateRoute exact path="/home/verification-main" component={VerificationMainView} isLoggedIn={isLoggedIn} isVerified={isVerified} admin={isAdmin} />
				<PrivateRoute exact path="/home/verification" component={VerificationLightView} isLoggedIn={isLoggedIn} isVerified={isVerified} admin={isAdmin} />
				<PrivateRoute exact path="/home/security" component={SecurityView} isLoggedIn={isLoggedIn} isVerified={isVerified} admin={isAdmin} />
				<PrivateRoute exact path="/home/transactions" component={CardTransactionView} isLoggedIn={isLoggedIn} isVerified={isVerified} admin={isAdmin} />
				<PrivateRoute exact path="/home/support" component={Support} isLoggedIn={isLoggedIn} isVerified={isVerified} admin={isAdmin} />
				<PrivateRoute exact path="/home/*" component={() => <h1>Home Page Not Found</h1>} isLoggedIn={isLoggedIn} isVerified={isVerified} admin={isAdmin} /> */}
			</Switch>
		</Router>
	);
}

export default App;
