
import React from 'react';
import { Carousel } from 'react-bootstrap';

const CustomerReview = () => {
	return (
		<div className="row mt-5">
			<h1>~~What Our Clients Say~~</h1>

			<div className="col-lg-6 container mt-5 ">
				<Carousel>
					<Carousel.Item>
						<img
							className="w-75"
							src="https://i.ibb.co/PD4yx5D/client-1.png"
							alt="First slide"
						/>

					</Carousel.Item>
					<Carousel.Item>
						<img
							className="w-75"
							src="https://i.ibb.co/pR8P5py/client-2.png"
							alt="Second slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="w-75"
							src="https://i.ibb.co/zHCVM2m/client-3.png"
							alt="Third slide"
						/>
					</Carousel.Item>
				</Carousel>
			</div>

			<div className="col-lg-6 container mt-5 ml-3">
				<Carousel>
					<Carousel.Item>
						<img
							className="w-75"
							src="https://i.ibb.co/CtQf3Yy/client-6.png"
							alt="First slide"
						/>

					</Carousel.Item>
					<Carousel.Item>
						<img
							className="w-75"
							src="https://i.ibb.co/9VDW43p/client-4.png"
							alt="Second slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="w-75"
							src="https://i.ibb.co/51WS0xW/client-7.png"
							alt="Third slide"
						/>
					</Carousel.Item>
				</Carousel>
			</div>

		</div>
	);
};

export default CustomerReview;