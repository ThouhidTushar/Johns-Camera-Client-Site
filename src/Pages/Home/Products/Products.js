import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		fetch(`https://protected-plains-36260.herokuapp.com/products`)
			.then(res => res.json())
			.then(data => setProducts(data))
	}, [])


	return (
		<div id="Products" className="mt-5 container">

			<h1>Our Best Selling Products</h1>

			{
				products.length === 0 ?
					<Spinner animation="border" variant="secondary" />
					:
					<div className="product-container mt-5 row">
						{
							products.map(products => <Product
								key={products._id}
								name={products.name}
								product={products}

							></Product>)
						}

					</div>
			}


		</div>
	);
};

export default Products;