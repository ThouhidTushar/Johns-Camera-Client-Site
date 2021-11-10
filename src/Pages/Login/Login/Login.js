import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
	const { signInUsingGoogle } = useAuth();
	const location = useLocation();
	const redirect_uri = location.state?.from || '/home'

	const history = useHistory();
	const handleGoogleLogin = () => {
		signInUsingGoogle()
			.then(result => {
				history.push(redirect_uri)
			})
	}

	const [loginData, setLoginData] = useState({});
	const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

	// const location = useLocation();
	// const history = useHistory();

	const handleOnChange = e => {
		const field = e.target.name;
		const value = e.target.value;
		const newLoginData = { ...loginData };
		newLoginData[field] = value;
		setLoginData(newLoginData);
	}
	const handleLoginSubmit = e => {
		loginUser(loginData.email, loginData.password, location, history);
		e.preventDefault();
	}



	return (
		<div>

			<div className="container w-25">
				<form>
					<h3>Sign In</h3>

					<div className="form-group">
						<label>Email address</label>
						<input type="email" className="form-control mt-2" placeholder="Enter email" />
					</div>

					<div className="form-group mt-3">
						<label>Password</label>
						<input type="password" className="form-control mt-2" placeholder="Enter password" />
					</div>

					<div className="form-group">
						<div className="custom-control custom-checkbox">
						</div>
					</div>

					<button onSubmit={handleLoginSubmit} type="submit" className="mt-3 btn btn-primary btn-block">Submit</button>
					<p className="forgot-password text-right mt-3">
						Forgot <a href="#">password?</a>
					</p>
				</form>
			</div>

			<div>
				<h2>Or <br />
					Sign in With Google</h2>
				<button onClick={handleGoogleLogin} className="btn btn-primary">Google Sign In</button>
			</div>
		</div>
	);
};

export default Login;