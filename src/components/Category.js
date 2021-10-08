import React from "react";
import { Link } from "react-router-dom";

import sanityClient from "../Client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
	return builder.image(source);
}

const Category = ({ category }) => {
	return (
		<div
			className="bg-gray-100 rounded-xl p-10 w-full lg:w-1/3"
			style={{ backgroundColor: `#${category.hexCode}` }}
		>
			<img
				src={urlFor(category.image).url()}
				alt={category.title}
				className="w-40"
			/>
			<h4 className="text-2xl py-3 font-bold capitalize">{category.title}</h4>
			<p>{category.description}</p>
			<Link to={"/filteredfoods/" + category.slug.current}>
				<button
					style={{ backgroundColor: "#FE043C" }}
					className="rounded mt-3 px-5 py-2 text-white"
				>
					View
				</button>
			</Link>
		</div>
	);
};

export default Category;
