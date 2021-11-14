import React from 'react';
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const AllOrders = () => {

	const [allOrders, setAllOrders] = useState([]);

	useEffect(() => {
		fetch("https://protected-plains-36260.herokuapp.com/allOrders")
			.then((res) => res.json())
			.then((data) => setAllOrders(data));
	}, []);

	console.log(allOrders);

	return (
		<div>
			<div className="container m-2 p-2">
				<h1>Manage Orders </h1>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>#</th>
							<th>Product</th>
							<th>Status</th>
							<th>Order Date</th>
						</tr>
					</thead>
					{allOrders?.map((pd, index) => (
						<tbody>
							<tr>
								<td>{index}</td>
								<td>{pd.name}</td>
								<td>{pd.price}</td>
								<td>{pd.date}</td>
								<td>{pd.comment}</td>
								<button className="btn bg-primary m-2">Delete</button>

							</tr>
						</tbody>
					))}
				</Table>
			</div>
		</div>
	);
};

export default AllOrders;