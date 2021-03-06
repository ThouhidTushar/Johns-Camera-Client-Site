import React from 'react';
import { Link } from 'react-router-dom';
import './Explore.css'

const Explore = (props) => {
	const { explore } = props;
	const { _id, name, description, img, price } = explore;
	return (
		<div className='product'>
			<div>
				<img className="img w-75" src={img} alt="" />
				<h3>{name}</h3>
				<h5>Price : ${price}</h5>
				<p>{description}</p>
			</div>

			<Link to={`/productDetailss/${ _id }`}>
				<button className="btn btn-primary mb-3">Buy {name}</button>
			</Link>
		</div>

	);
};

export default Explore;