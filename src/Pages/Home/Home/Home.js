
import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Review from '../Review/Review';

import UpcomingProducts from '../UpcomingProducts/UpcomingProducts';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Products></Products>
			<UpcomingProducts></UpcomingProducts>
			<Review></Review>
		</div>
	);
};

export default Home;