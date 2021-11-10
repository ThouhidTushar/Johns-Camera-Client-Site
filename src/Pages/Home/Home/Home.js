
import React from 'react';
import Banner from '../Banner/Banner';
import CustomerReview from '../CustomerReview/CustomerReview';
import Products from '../Products/Products';
import WriteUs from '../WriteUs/WriteUs';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Products></Products>
			<CustomerReview></CustomerReview>
			<WriteUs></WriteUs>
		</div>
	);
};

export default Home;