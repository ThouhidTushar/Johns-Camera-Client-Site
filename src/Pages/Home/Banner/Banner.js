import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/Banner/banner (1).jpg'
import banner2 from '../../../images/Banner/banner (2).jpg'
import banner3 from '../../../images/Banner/banner (3).jpg'
import banner4 from '../../../images/Banner/banner (4).jpg'


const Banner = () => {
	return (
		<div >
			<Carousel fade>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={banner1}
						alt="First slide"
					/>
					<Carousel.Caption>
						<h1>Olympus is love</h1>

					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img
						className="d-block w-100"
						src={banner2}
						alt="Second slide"
					/>

					<Carousel.Caption>
						<h1>Amazing Lens Lineup</h1>

					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img
						className="d-block w-100"
						src={banner3}
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h1>Lens for Life</h1>

					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img
						className="d-block w-100"
						src={banner4}
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h1>Dont Miss a Chance</h1>

					</Carousel.Caption>
				</Carousel.Item>

			</Carousel>
		</div>
	);
};

export default Banner;