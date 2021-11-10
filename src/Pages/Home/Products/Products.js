import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		fetch(`./products.json`)
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
							products.map(product => <Product
								key={product.id}
								name={product.name}
								product={product}
							></Product>)
						}
					</div>
			}
		</div>
	);
};

export default Products;