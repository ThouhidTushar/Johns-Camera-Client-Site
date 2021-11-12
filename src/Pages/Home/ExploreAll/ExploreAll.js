import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Explore from '../Explore/Explore';
import './ExploreAll.css'

const ExploreAll = () => {
	const [exploreAll, setExploreAll] = useState([])

	useEffect(() => {
		fetch('https://protected-plains-36260.herokuapp.com/allproducts')
			.then(res => res.json())
			.then(data => setExploreAll(data))
	}, [])


	return (
		<div id="Products" className="mt-5 container">

			<h1>Our Best Selling Products</h1>

			{
				exploreAll.length === 0 ?
					<Spinner animation="border" variant="secondary" />
					:
					<div className="product-container mt-5 row">
						{
							exploreAll.map(explore => <Explore
								key={explore.id}
								name={explore.name}
								explore={explore}
							></Explore>)
						}
					</div>
			}
		</div>
	);
};

export default ExploreAll;