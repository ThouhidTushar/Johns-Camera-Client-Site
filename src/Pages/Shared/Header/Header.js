import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import Logo from '../../../images/shoplogo.png';

const Header = () => {
	const { user, logout } = useAuth();
	return (
		<>
			<Navbar bg="light" variant="light" collapseOnSelect expand="lg">
				<Container>
					<Navbar.Brand href="#home"><img className="w-25" src={Logo} alt="" /></Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end ">

						<Nav.Link as={HashLink} to="/home#home" className="text-dark"><h5>Home</h5>
						</Nav.Link>
						<Nav.Link as={HashLink} to="/exploreAll" className="text-dark"><h6>Explore</h6>
						</Nav.Link>
						<Nav.Link as={HashLink} to="/dashboard" className="text-dark"><h6>Dashboard</h6>
						</Nav.Link>

						<Nav.Link as={HashLink} to="/myOrders" className="text-dark"><h6>My Orders</h6>
						</Nav.Link>
						<Nav.Link as={HashLink} to="/review" className="text-dark"><h6>Review</h6>
						</Nav.Link>


						{user?.email ?
							<Button onClick={logout} variant="light"><h6>Logout</h6></Button> :
							<Nav.Link as={Link} to="/login" className="text-dark"><h6>Login</h6>
							</Nav.Link>}

						<Navbar.Text>
							Signed in as: <a href="#login"><h6>{user?.displayName}</h6></a>
						</Navbar.Text>

					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;