import React, { useState, useEffect } from "react";

// const Home = () => {
// 	setInterval(() => {
// 		alert(1);
// 	}, 1000);
// };
// export default Home;

const Home = () => {
	const [timer, setTimer] = useState(0);
	useEffect(() => {
		setInterval(() => {
			setTimer((timer) => timer + 1);
		}, 100000);
	}, []);
	// if (timer === 10) {
	// 	setTimer(0);
	// }
	// const [timer2, setTimer2] = useState(0);
	// useEffect(() => {
	// 	setInterval(() => {
	// 		setTimer2((timer) => timer + 1);
	// 	}, 10000);
	// }, []);
	// if (timer2 === 10) {
	// 	setTimer(0);
	// }
	// const [timer3, setTimer3] = useState(0);
	// useEffect(() => {
	// 	setInterval(() => {
	// 		setTimer3((timer) => timer + 1);
	// 	}, 1000);
	// }, []);
	// if (timer3 === 10) {
	// 	setTimer(0);
	// }
	const [timer4, setTimer4] = useState(0);
	useEffect(() => {
		setInterval(() => {
			setTimer4((timer) => timer + 1);
		}, 100);
	}, []);
	// if (timer4 === 10) {
	// 	setTimer(0);
	// }
	return (
		<div>
			<h1>
				{timer}
				{/* {timer2} */}
				{/* {timer3} */}
				{timer4}
			</h1>
		</div>
	);
};

export default Home;
