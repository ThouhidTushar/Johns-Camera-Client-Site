import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';

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
					<Button variant="primary" size="lg ">
						Oder Now
					</Button>

				</Card.Body>
			</Card>
		</div>

	);
};

export default ProductDetailss;