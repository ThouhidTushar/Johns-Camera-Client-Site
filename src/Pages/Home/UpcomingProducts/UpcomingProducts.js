
import React from 'react';
import { Carousel } from 'react-bootstrap';

const UpcomingProducts = () => {
	return (
		<div className="row mt-5">
			<h1>Our Upcoming Products</h1>

			<div className="col-lg-6 container mt-5">
				<Carousel>
					<Carousel.Item>
						<img
							className="w-100"
							src="https://i.ibb.co/fdm6GsM/brent-ninaber-Di-MBNo-B4i-WU-unsplash.jpg"
							alt="First slide"
						/>

					</Carousel.Item>
					<Carousel.Item>
						<img
							className="w-100"
							src="https://i.ibb.co/kMV50Vv/james-feaver-8v-R-Ds-Pt-Hw0-unsplash.jpg"
							alt="Second slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="w-100"
							src="https://i.ibb.co/rMfv072/james-feaver-cv3wn-Erx7w-unsplash.jpg"
							alt="Third slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="w-100"
							src="https://i.ibb.co/2nnw1tJ/robert-shunev-m-S1nl-Ybq1k-A-unsplash.jpg"
							alt="Forth slide"
						/>
					</Carousel.Item>
				</Carousel>
			</div>

			<div className="col-lg-6 container mt-5">
				<Carousel>
					<Carousel.Item>
						<img
							className="w-100"
							src="https://i.ibb.co/YkRwgPD/jan-kopriva-U9oh-R0ej-TAQ-unsplash.jpg"
							alt="First slide"
						/>

					</Carousel.Item>
					<Carousel.Item>
						<img
							className="w-100"
							src="https://i.ibb.co/GdGskvL/luca-bravo-fyo-EHlbcq-JQ-unsplash.jpg"
							alt="Second slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="w-100"
							src="https://i.ibb.co/jfhSpS1/nordwood-themes-F3-Dde-9thd8-unsplash.jpg"
							alt="Third slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="w-100"
							src="https://i.ibb.co/FmmxLcn/theregisti-HSXIp58y-Py-I-unsplash.jpg"
							alt="Forth slide"
						/>
					</Carousel.Item>
				</Carousel>
			</div>

		</div>
	);
};

export default UpcomingProducts;