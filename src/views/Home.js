import React from "react";

import Categories from "../components/Categories";

const Home = () => {
	return (
		<section className="container w-full lg:px-0 px-5 lg:w-3/4 mx-auto">
			<div className="flex lg:flex-row flex-col my-10 justify-between">
				<div className="">
					<h2 className="text-3xl lg:text-4xl font-bold">Hello👋</h2>
					<p className="text-xl lg:text-2xl">What do you want?</p>
				</div>
				<div className="flex items-center lg:mt-0 mt-5 gap-3 lg:flex-row flex-col">
					<input
						type="text"
						className="w-full lg:w-80 p-2 border-2 border-gray-500 rounded focus:outline-none"
					/>
					<button
						style={{ backgroundColor: "#FE043C" }}
						className="rounded w-full lg:w-auto px-10 py-3 text-white"
					>
						Search
					</button>
				</div>
			</div>
			<hr className="my-10" />
			<Categories />
		</section>
	);
};

export default Home;
