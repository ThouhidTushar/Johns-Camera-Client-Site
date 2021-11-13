import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const ProductDetailss = () => {
	const { id } = useParams();
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch(`https://protected-plains-36260.herokuapp.com/allproducts`)
			.then(res => res.json())
			.then(data => setData(data))
	}, [])

	const ExactItem = data.filter(td => td._id === id);
	console.log(ExactItem);

	return (
		<div>
			<h1>Product Details</h1>
			<Card className='container' style={{ width: '30rem' }}>
				<Card.Img variant="top" src={ExactItem[0]?.img} />
				<Card.Body>
					<Card.Title className='container'> <h1>{ExactItem[0]?.name}</h1></Card.Title>
					<Card.Title> <h1>${ExactItem[0]?.price}</h1></Card.Title>
					<Card.Text>
						{ExactItem[0]?.description}
					</Card.Text>
					<Button variant="primary" size="lg">
						Buy Now
					</Button>
				</Card.Body>
			</Card>

			{/* <h1>this is product details</h1>
			<h1> Photo : {ExactItem[0]?.img}</h1>
			<h1> Name : {ExactItem[0]?.name}</h1>
			<h1> Price : {ExactItem[0]?.price}</h1>
			<h1> Description : {ExactItem[0]?.description}</h1> */}
		</div>

	);
};

export default ProductDetailss;