import React from 'react';
import { Carousel } from 'react-bootstrap';


const AboutUs = () => {
	return (
		<div className="row mt-5">

			<div className="col-lg-6 container">
				<h1>
					Get to know the people who know your gear best.
				</h1>
				<h6>Johns Camera is not a big box store, or a faceless chain... or a personality-free zone. Johns Camera is a group of people who are passionate about the things you're passionate about—from photography, film, music and audio to art and technology, creating and imagining.We believe in making customers, not sales. That's why we've perfected the "art of the downsell": we'll always recommend the best options based on your specific needs, rather than the price tag. The customer comes first, second and third at Johns Camera.</h6>
				<h1>
					People, not algorithms
				</h1>
				<h6>We hire and extensively train our product specialists so that each one can speak from a place of confidence and expertise... which means when you need answers, we're ready with solutions, tailored to you.We believe in making customers, not sales. That's why we've perfected the "art of the downsell": we'll always recommend the best options based on your specific needs, rather than the price tag. The customer comes first, second and third at Johns Camera.</h6>
				<h1>
					Principles Over Profits
				</h1>
				<h6>We believe in making customers, not sales. That's why we've perfected the "art of the downsell": we'll always recommend the best options based on your specific needs, rather than the price tag. The customer comes first, second and third at Johns Camera.We believe in making customers, not sales. That's why we've perfected the "art of the downsell": we'll always recommend the best options based on your specific needs, rather than the price tag. The customer comes first, second and third at Johns Camera.</h6>


			</div>

			<div className="col-md-5 mx-5">
				<div>
					<Carousel>
						<Carousel.Item>
							<img
								className="w-100"
								src="https://i.ibb.co/jfhSpS1/nordwood-themes-F3-Dde-9thd8-unsplash.jpg"
								alt="First slide"
							/>

						</Carousel.Item>
						<Carousel.Item>
							<img
								className="w-100"
								src="https://i.ibb.co/rMfv072/james-feaver-cv3wn-Erx7w-unsplash.jpg"
								alt="Second slide"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="w-100"
								src="https://i.ibb.co/FmmxLcn/theregisti-HSXIp58y-Py-I-unsplash.jpg"
								alt="Third slide"
							/>
						</Carousel.Item>
					</Carousel>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;