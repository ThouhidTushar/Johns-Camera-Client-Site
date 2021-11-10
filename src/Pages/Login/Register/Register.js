import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useHistory } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import useAuth from './../../../hooks/useAuth';

const Register = () => {
	const { googleSignIn, handleUserRegister } = useFirebase();
	const { register, handleSubmit, watch, errors } = useForm();
	const onSubmit = (data) => {
		handleUserRegister(data.email, data.password);
		console.log(data);


		const [loginData, setLoginData] = useState({});
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
				return
			}
			registerUser(loginData.email, loginData.password, loginData.name, history);
			e.preventDefault();
		}
		return (
			<div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						className="input-field"
						name="email"
						placeholder="Email"
						type="email"
						{...register("email", { required: true })}
					/>
					<br />
					<input
						className="input-field"
						name="password"
						type="password"
						placeholder="Password"
						{...register("password", { required: true })}
					/>
					<br />

					<input
						className="submit-btn btn btn-danger mt-3"
						type="submit"
						value="Register"
					/>
				</form>

			</div>
		);
	};


	export default Register;