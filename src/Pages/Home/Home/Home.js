
import React from 'react';
import AllReview from '../../Dashboard/AllReview/AllReview';

import Banner from '../Banner/Banner';
import Products from '../Products/Products';

import UpcomingProducts from '../UpcomingProducts/UpcomingProducts';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Products></Products>
			<UpcomingProducts></UpcomingProducts>
			<AllReview></AllReview>
		</div>
	);
};

export default Home;