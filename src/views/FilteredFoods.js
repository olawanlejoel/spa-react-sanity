import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import sanityClient from "../Client";
import imageUrlBuilder from "@sanity/image-url";

// import foodImage from "../images/protein/001.jpg";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
	return builder.image(source);
}

const Foods = () => {
	const [filteredFoods, setFilteredFoods] = useState(null);
	const { slug } = useParams();

	useEffect(() => {
		sanityClient
			.fetch(
				` *[_type == "foods" && category._ref in *[_type=="category" && title=="${slug}"]._id ]{
          _id,
              foodName,
              foodDesc,
              foodImage{
                asset->{
                  _id,
                  url
                },
              },
              category->{
                title
              }
        }`
			)
			.then((data) => setFilteredFoods(data))
			.catch(console.error);
	}, [slug]);

	return (
		<section className="container w-full lg:px-0 px-5 lg:w-3/4 mx-auto min-h-screen">
			<div className="flex lg:flex-row flex-col my-10 justify-center">
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
			<div className="my-5">
				<h3 className="text-3xl font-bold text-center my-10 lg:my-5">
					All Foods🥗
				</h3>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{filteredFoods &&
						filteredFoods.map((food) => (
							<div
								className="bg-gray-100 rounded shadow-xl p-5 std-border"
								key={food.foodName}
							>
								<div className="flex flex-col items-center">
									<img
										src={urlFor(food.foodImage.asset.url).url()}
										alt=""
										className="rounded-full object-cover w-40 h-40 border-4 shadow-inner std-border"
									/>
									<h4 className="text-2xl pt-3 font-bold capitalize">
										{food.foodName}
									</h4>
									<Link to={"/filteredfoods/" + food.category.title}>
										<small className="uppercase text-gray-400 font-semibold">
											{food.category.title}
										</small>
									</Link>
								</div>
								<p className="mt-5">{food.foodDesc}</p>
							</div>
						))}
				</div>
			</div>
		</section>
	);
};

export default Foods;
