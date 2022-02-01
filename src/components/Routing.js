import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Stocks from './Stocks';
import StockDetail from './StockDetail';
import LoadingPage from './LoadingPage';

function Routing(props) {
	return (
		<Router>
			<div>
				<h2>Protium - App</h2>
				<header>
					<nav className="navbar navbar-expand bg-dark navbar-dark">
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>

						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav mr-auto">
								<li className="nav-item active">
									<Link to="/stocks" className="nav-link">Stocks</Link>
								</li>
							</ul>
						</div>
					</nav>
				</header>
				<LoadingPage />
				<Routes>
					<Route path="/" element={<Stocks />} />
					<Route path="/stocks" element={<Stocks />} />
					<Route path="/stock_details/:id" element={<StockDetail />} />
				</Routes>
			</div>
		</Router>
	);
}

export default Routing