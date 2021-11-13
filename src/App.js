
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import AboutUs from './Pages/AboutUs/AboutUs';
import BuyNow from './Pages/BuyNow/BuyNow/BuyNow';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Review from './Pages/Dashboard/Review/Review';
import ExploreAll from './Pages/Home/ExploreAll/ExploreAll';
import Home from './Pages/Home/Home/Home';
import Product from './Pages/Home/Product/Product';
import ProductDetails from './Pages/Home/ProductDetails/ProductDetails';
import ProductDetailss from './Pages/Home/ProductDetailss/ProductDetailss';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import MyOrders from './Pages/MyOrders/MyOrders';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';


function App() {
	return (
		<div className="App">

			<AuthProvider>
				<Router>
					<Header></Header>
					<Switch>
						<Route exact path="/">
							<Home></Home>
						</Route>
						<Route exact path="/home">
							<Home></Home>
						</Route>
						<Route exact path="/exploreAll">
							<ExploreAll></ExploreAll>
						</Route>
						<Route path="/login">
							<Login></Login>
						</Route>
						<Route path="/register">
							<Register></Register>
						</Route>
						<Route path="/product">
							<Product></Product>
						</Route>
						<Route path="/review">
							<Review></Review>
						</Route>
						<Route path="/productDetails/:id">
							<ProductDetails></ProductDetails>
						</Route>
						<Route path="/productDetailss/:id">
							<ProductDetailss></ProductDetailss>
						</Route>


						<PrivateRoute path="/myOrders">
							<MyOrders></MyOrders>
						</PrivateRoute>
						<PrivateRoute path="/buyNow">
							<BuyNow></BuyNow>
						</PrivateRoute>
						<PrivateRoute path="/dashboard">
							<Dashboard></Dashboard>
						</PrivateRoute>
						<PrivateRoute path="/buyNow/:productId">
							<BuyNow></BuyNow>
						</PrivateRoute>

						<Route path="*">
							<NotFound></NotFound>
						</Route>

					</Switch>
					<Footer></Footer>
				</Router>

			</AuthProvider>
		</div>
	);
}

export default App;
