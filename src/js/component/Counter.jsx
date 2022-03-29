import React, { useState, useEffect } from "react";

const Counter = (props) => {
	const [timer, setTimer] = useState(0);
	useEffect(() => {
		setInterval(() => {
			setTimer((timer) => timer + 1);
		}, props.count);
	}, []);
	if (timer === 10) {
		setTimer(0);
	}
	return <span>{timer}</span>;
};

export default Counter;
