import React from 'react';
import logo from "./../../../images/Banner/shoplogo.png"

const Footer = () => {
	return (
		<div className="bg-secondary text-light container-fluid">
			<div className="mt-5 footer">
				<div className="">
					<div className="row">
						<div className="col-md-3  ">
							<div className="first-cart p-2 mt-2">
								<img className="w-75" src={logo} alt="" />


							</div>
						</div>
						<div className="col-md-3 mt-4">
							<div className="second-part">
								<h1 className="">Know More</h1>

								<p className="mt-4">Owner</p>
								<p className="mt-4">Destinations</p>
								<p className="mt-4">Who We Are</p>
								<p className="mt-4">Around The World</p>
							</div>
						</div>
						<div className="col-md-3">
							<div className="third-part mt-4">
								<h1>Our Histoy</h1>
								<p className="mt-4"> Asia</p>
								<p className="mt-4"> Europe</p>
								<p className="mt-4"> Africa</p>
								<p className="mt-4"> America</p>
							</div>
						</div>
						<div className="col-md-3">
							<div className="fourth-part mt-4">
								<h1>Contact Us</h1>
								<small className="mt-5">88 Downtown NY</small>
								<br />
								<small className="mt-3">Phone: (08) 5527 854</small>
								<br />
								<small className="mt-3">phone: 08) 0545 65 454</small>
								<br />
								<small className="mt-3">Mail: metatravels@gmail.com</small>
							</div>
						</div>
					</div>
					<hr />
					<div className="button text-center">
						<small>© 2021 Meta Travels : All Rights Reserved.</small>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;