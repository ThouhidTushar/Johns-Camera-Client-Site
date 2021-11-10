import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../../src/images/404-1.png'

const NotFound = () => {
	return (
		<div>
			<img className="w-50 mt-5" src={error} alt="" />
			<br />
			<Link to="/">
				<button className="btn btn-warning mt-5"> <h2>Go Back</h2></button>
			</Link>
		</div>
	);
};

export default NotFound;