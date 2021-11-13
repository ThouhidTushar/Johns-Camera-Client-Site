import React, { useEffect, useState } from "react";

const MyOrders = () => {
	const email = sessionStorage.getItem("email");
	const [services, setServices] = useState([]);
	const [control, setControl] = useState(false);

	useEffect(() => {
		fetch(`http://localhost:5000/myOrders/${ email }`)
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, [control]);

	const handleDelete = (id) => {
		fetch(`http://localhost:5000/deleteOrder/${ id }`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount) {
					setControl(!control);
				}
			});
		console.log(id);
	};

	return (
		<div>
			<h1>My orders </h1>

			<div className="services container">
				<div className="row container">
					{services?.map((pd) => (
						<div className="col-md-6 col-sm-12 col-lg-4 p-3">
							<div className="service border border p-3">

								<h6>{pd?.name}</h6>
								<h4>{pd?.date}</h4>
								<h4>{pd?.email}</h4>
								<p>{pd?.description}</p>
								<h3 className="text-dark"> Cost :{pd?.price}$</h3>

								<button
									onClick={() => handleDelete(pd?._id)}
									className="btn btn-danger"
								>
									Delete
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default MyOrders;
