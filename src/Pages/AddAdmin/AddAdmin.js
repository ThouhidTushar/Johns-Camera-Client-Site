import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';

const AddAdmin = () => {
	return (
		<div>
			<h1>Add Admin</h1>
			<Form.Group className="mb-3 container w-50" controlId="formBasicEmail">

				<Form.Control type="email" placeholder="Enter email" />
				<Form.Text className="text-muted">

				</Form.Text>
			</Form.Group>
			<Button ClassName="primary" variant="primary">Add Admin</Button>{' '}
		</div>
	);
};

export default AddAdmin;