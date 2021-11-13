import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const ProductDetails = () => {
	const { id } = useParams();
	const [allProduct, setAllProduct] = useState([]);
	const [product, setProduct] = useState({});

	useEffect(() => {
		fetch(`https://protected-plains-36260.herokuapp.com/products`)
			.then(res => res.json())
			.then(data1 => setAllProduct(data1))
	}, [])

	const email = sessionStorage.getItem("email");
	useEffect(() => {
		fetch(`http://localhost:5000/singleProduct/${ id }`)
			.then(res => res.json())
			.then(data => setProduct(data));
	}, [])


	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		data.email = email;
		console.log(data);
	};


	// ---------------------------------------------------------
	const ExactItem = allProduct.filter(td => td._id === id);
	return (
		<div>



			{/* <h1>this is product details</h1>
			<h1> Photo : {ExactItem[0]?.img}</h1>
			<h1> Name : {ExactItem[0]?.name}</h1>
			<h1> Price : {ExactItem[0]?.price}</h1>
			<h1> Description : {ExactItem[0]?.description}</h1> */}

			{/* ----------------------------------------- */}

			<div className="booking-container">
				<div className="container">
					<div className="col-md-12">

						<h1>Buy Now {product.name}</h1>
						<Card className='container' style={{ width: '30rem' }}>
							<Card.Img variant="top" src={ExactItem[0]?.img} />
							<Card.Body>
								<Card.Title className='container'> <h1>{ExactItem[0]?.name}</h1></Card.Title>
								<Card.Title> <h1>${ExactItem[0]?.price}</h1></Card.Title>
								<Card.Text>
									{ExactItem[0]?.description}
								</Card.Text>


							</Card.Body>
						</Card>
					</div>
					<div className="col-md-12">
						<h1>Order Form</h1>
						<form onSubmit={handleSubmit(onSubmit)}>
							<input
								{...register("name")}
								defaultValue={product?.name}
								className="p-2 m-2 w-100"
							/>
							<br />
							<input
								{...register("date")}
								placeholder="Desired Delivery Date"
								type="date"
								className="p-2 m-2 w-100"
							/>
							<br />
							{/* <input
								{...register("email", { required: true })}
								placeholder="Enter Your Email"
								type="email"
								className="p-2 m-2 w-100"
							/>
							<br /> */}
							<input
								{...register("comments")}
								placeholder="comments"
								className="p-2 m-2"
								className="p-2 m-2 w-100"
							/>
							<br />

							<input
								{...register("price", { required: true })}
								defaultValue={product?.price}
								className="p-2 m-2"
								className="p-2 m-2 w-100"
							/>
							<br />

							<br />

							<br />

							{errors.exampleRequired && <span>This field is required</span>}

							<input
								type="submit"
								value="Order Now"
								className="btn btn-primary w-50"
							/>
						</form>
					</div>
				</div>
			</div>



		</div>

	);
};

export default ProductDetails;