import React, { useState, useEffect } from "react";
import Counter from "./Counter.jsx";

const Home = () => {
	return (
		<>
			<div className="borderDiv">
				<i className="clock fa fa-clock" aria-hidden="true"></i>
				<span className="numb">
					<Counter count={1000000} />
				</span>
				<span className="numb">
					<Counter className="numb" count={100000} />
				</span>
				<span className="numb">
					<Counter className="numb" count={10000} />
				</span>
				<span className="numb">
					<Counter className="numb" count={1000} />
				</span>
			</div>
		</>
	);
};

export default Home;
