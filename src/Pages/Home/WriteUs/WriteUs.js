import React from 'react';
import './WriteUs.css'
const WriteUs = () => {
	return (
		<div>
			<div className="mt-5">
				<h1 className="text-primary">Write Us</h1>
				<div className="contact-form p-3">
					<div className="row  d-flex justify-content-center ">
						<div className="col-md-6 mt-5">
							<input
								className="input-field"
								type="text"
								placeholder="Enter Your Name"
							/>
							<br />
							<input
								className="input-field"
								type="Email"
								placeholder="Enter Your Email"
							/>
							<br />
							<input
								className="input-field"
								type="text"
								placeholder="Write Details"
							/>
							<br />
							<input className="input-button" type="submit" value="Submit" />
						</div>
						<div className="col-md-6">
							<div className="contact-im">
								<img
									className="w-100"
									src="https://i.ibb.co/VJdS431/Image-008.png"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WriteUs;