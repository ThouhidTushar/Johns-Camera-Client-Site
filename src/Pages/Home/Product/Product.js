import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
	const { product } = props;
	const { id, name, description, img, price } = product;
	return (
		<div className='product'>
			<div>
				<img className="img w-75" src={img} alt="" />
				<h3>{name}</h3>
				<h5>Price : ${price}</h5>
				<p>{description}</p>
			</div>
			<Link to={`/BuyNow/${ id }`}>
				<button className="btn btn-primary mb-3">Buy {name}</button>
			</Link>
		</div>

	);
};

export default Product;