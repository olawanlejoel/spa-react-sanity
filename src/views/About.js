import React from "react";

import foodsAboutImg from "../images/foods-abt-img.jpg";

const About = () => {
	return (
		<section className="container w-full lg:px-0 px-5 lg:w-3/4 mx-auto min-h-screen">
			<div className="mt-16">
				<h3 className="text-3xl font-bold text-center my-10 lg:my-5">
					About Us🦻
				</h3>
				<div className="flex gap-10 justify-center items-center flex-col lg:flex-row mt-10">
					<div className="">
						<img
							src={foodsAboutImg}
							className="w-96 rounded-xl lg:rounded-l-xl"
							alt=""
						/>
					</div>
					<div className="w-full lg:w-1/3 flex gap-5 mb-10 lg:mb-0 flex-col">
						⭐⭐⭐
						<p>
							A healthy diet rich in fruits, vegetables, whole grains and
							low-fat dairy can help to reduce your risk of heart disease by
							maintaining blood pressure and cholesterol levels. High blood
							pressure and cholesterol can be a symptom of too much salt and
							saturated fats in your diet.
						</p>
						<p>
							Many healthful foods, including vegetables, fruits, and beans, are
							lower in calories than most processed foods.
						</p>
						<p>
							Children learn most health-related behaviors from the adults
							around them, and parents who model healthful eating and exercise
							habits tend to pass these on.
						</p>
						⭐⭐⭐
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
