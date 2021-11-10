import React from 'react';
import { Carousel } from 'react-bootstrap';
const AboutUs = () => {
	return (
		<div className="row mt-5">

			<div className="col-lg-6">
				<h1>
					Your Dream Destination With Us
				</h1>
				<p>
					<h5>Since 1975, ‘Meta Travels’ has been focused on bringing our customers the best in esteem and quality travel game plans. We are enthusiastic about movement and sharing the world’s marvels on the relaxation travel side, <br /> and giving corporate explorers hello there contact administrations to encourage their business travel needs.
					</h5>
					<h5>
						Our honor-winning organization reliably positions as a standout amongst other offices in the nation (Travel Weekly, Business Travel Weekly), and is the best individual from the renowned Signature Travel Network, <br /> an overall association enabling us to give our clients unmatched advantages.
					</h5>

					<h5>
						Travel magazines (Afar, Travel+Leisure), real inn brands, and that are only the tip of the iceberg. ‘Organization Name’ is a Premium Member of ASTA (American Society of Travel Advisors), <br /> and also an ASTA Green Member office, and CLIA (Cruise Line International Association).</h5></p>
			</div>

			<div className="col-md-5 mx-5">
				<div>
					<Carousel>
						<Carousel.Item>
							<img
								className="w-100"
								src="https://i.ibb.co/FK40cN6/girl-jumping-for-joy-3849870-640.jpg"
								alt="First slide"
							/>

						</Carousel.Item>
						<Carousel.Item>
							<img
								className="w-100"
								src="https://i.ibb.co/x7wQN0t/person-692406-640.jpg"
								alt="Second slide"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="w-100"
								src="https://i.ibb.co/KqVqW5y/freedom-4782870-640.jpg"
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