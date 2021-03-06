import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Fetch() {
	const [data, setData] = useState();

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
			setData(res.data);
		});
		return () => {};
	}, []);

	return <div>{data ? data.title : 'loading'}</div>;
}
