import React from 'react';
import { useParams } from 'react-router';
import { Card, Button } from 'react-bootstrap';
import Products from '../../Home/Products/Products';




const BuyNow = ({ }) => {
	const { productId } = useParams();


	return (
		<div>

			<Products></Products>

			<div>
				<h1>Buy Now</h1>
			</div>

			<div className="row mx-5 d-flex justify-content-center">




			</div>
		</div>

	);
};

export default BuyNow;