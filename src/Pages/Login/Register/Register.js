
import { Alert, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
	const [loginData, setLoginData] = useState([]);
	const history = useHistory();

	const { user, registerUser, isLoading, authError } = useAuth();

	const handleOnBlur = e => {
		const field = e.target.name;
		const value = e.target.value;
		const newLoginData = { ...loginData };
		newLoginData[field] = value;
		setLoginData(newLoginData);
	}

	const handleLoginSubmit = e => {
		if (loginData.password !== loginData.password2) {
			alert('Your password did not match');
			return;
		}
		registerUser(loginData.email, loginData.password, loginData.name, history);
		e.preventDefault();
	}
	return (
		<div>
			<h2>Register</h2>
			{!isLoading && <form onSubmit={handleLoginSubmit}>
				<input name="name" onBlur={handleOnBlur} type="text" placeholder="Your Name" />
				<br />
				<br />
				<input name="email" onBlur={handleOnBlur} type="email" placeholder="Your Email" />
				<br />
				<br />
				<input name="password" onBlur={handleOnBlur} type="password" placeholder="Your Password" />
				<br />
				<br />
				<input name="password2" onBlur={handleOnBlur} type="password" placeholder="Retype Your Password" />
				<br />
				<br />
				<button className="btn btn-warning" type="submit">Register</button>
				<p> <h4>Already Registered?</h4>  <Link style={{ textDecoration: "none" }} to="login"><h4>Please Login</h4></Link> </p>

			</form>}
			{isLoading && <CircularProgress />}

			{user?.email && <Alert severity="success">Account Created Successfully !</Alert>}
			{authError && <Alert severity="error">{authError}</Alert>}

		</div>
	);
};

export default Register;