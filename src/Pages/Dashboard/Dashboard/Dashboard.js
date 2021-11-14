import React, { useState } from "react";
import "./Dashboard.css";
import Review from "../Review/Review";
import MyOrders from "../../MyOrders/MyOrders";
import Button from "@restart/ui/esm/Button";
import useAuth from "../../../hooks/useAuth";
import PayNow from "../PayNow/PayNow";
import ExploreAll from "../../Home/ExploreAll/ExploreAll";
import AllOrders from "../../Home/AllOrders/AllOrders";
import AddAdmin from "../../AddAdmin/AddAdmin";

const Dashboard = () => {
	const [control, setControl] = useState("addServices");
	const { logout } = useAuth();

	console.log(control);

	console.log(control);
	return (
		<div className="admin-container">
			<div className="dashboard">
				<div className="admin-box">
					<div className="row admin-container">
						<div className="col-md-3 ">
							<div className="admin-area p-1">
								<h1>Dashboard</h1>
								<div className="all-menu mt-5">
									<li
										onClick={() => setControl("payNow")}
										className="admin-menu p-2"
									>
										<h3>Pay Now</h3>
									</li>
									<li
										onClick={() => setControl("myOrders")}
										className="admin-menu p-2"
									>
										<h3>My Orders</h3>
									</li>
									<li
										onClick={() => setControl("addServices")}
										className="admin-menu p-2"
									>
										<h4>Give us a Review!!</h4>
									</li>

									{/* ---------------------------------- */}

									<li
										onClick={() => setControl("allOrders")}
										className="admin-menu p-2"
									>
										<h3>Manage All Orders</h3>
									</li>

									<li
										onClick={() => setControl("manageProducts")}
										className="admin-menu p-2"
									>
										<h3>Manage Products</h3>
									</li>
									<li
										onClick={() => setControl("makeAdmin")}
										className="admin-menu p-2"
									>
										<h3>Make Admin</h3>
									</li>

									<li
										onClick={() => setControl("logOut")}
										className="admin-menu p-2"
									>
										<h4>Logout</h4>
									</li>

								</div>
							</div>
						</div>
						<div className="col-md-9 text-center  text-center">


							{/* { {control === "services" && <Services></Services>} */}
							{control === "myOrders" && <MyOrders></MyOrders>}
							{control === "allOrders" && <AllOrders></AllOrders>}
							{control === "addServices" && <Review></Review>}
							{control === "payNow" && <PayNow></PayNow>}
							{control === "makeAdmin" && <AddAdmin></AddAdmin>}
							{control === "manageProducts" && <ExploreAll></ExploreAll>}

							{control === "logOut" && <Button onClick={logout} variant="danger"><h6 className="btn btn-danger ">Logout</h6></Button>}

						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
