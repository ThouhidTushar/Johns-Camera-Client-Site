import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Products from '../Home/Products/Products';


const Appointment = () => {
	return (
		<div className="row">
			<div className="col-md-3 m-5">
				<Form>
					<h1 className="m-5 text-primary">Pre Order Your Fav Camera</h1>
					<Row className="mb-3">
						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Label>Your Name</Form.Label>
							<Form.Control type="email" placeholder="Your Name" />
						</Form.Group>


					</Row>

					<Form.Group className="mb-3" controlId="formGridAddress1">
						<Form.Label>Write Destination Name</Form.Label>
						<Form.Control placeholder="Paris, Maldives etc" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formGridAddress2">
						<Form.Label>Your Address</Form.Label>
						<Form.Control placeholder="Apartment, studio, or floor" />
					</Form.Group>

					<Row className="mb-3">
						<Form.Group as={Col} controlId="formGridCity">
							<Form.Label>City</Form.Label>
							<Form.Control />
						</Form.Group>

						<Form.Group as={Col} controlId="formGridState">
							<Form.Label>State</Form.Label>
							<Form.Select defaultValue="Choose...">
								<option>Choose...</option>
								<option>...</option>
							</Form.Select>
						</Form.Group>

						<Form.Group as={Col} controlId="formGridZip">
							<Form.Label>Zip</Form.Label>
							<Form.Control />
						</Form.Group>
					</Row>

					<Form.Group className="mb-3" id="formGridCheckbox">
						<Form.Check type="checkbox" label="Check me out" />
					</Form.Group>

					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</div>

			<div className="col-md-8">

				<Products></Products>

			</div>

		</div>
	);
};

export default Appointment;