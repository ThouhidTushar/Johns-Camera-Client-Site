import React from 'react';

const ProductDetail = () => {

	const ProductDetail = () => {
		const { id } = useParams();
		const [data, setData] = useState([]);
		useEffect(() => {
			fetch('/fakeData.json')
				.then(res => res.json())
				.then(data => setData(data))
		}, [])

		const ExactIteam = data.filter(td => td._id === id);
		return (
			<div>

			</div>
		);
	};

	export default ProductDetail;