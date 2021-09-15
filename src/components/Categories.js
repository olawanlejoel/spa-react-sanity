import React, { useState, useEffect } from "react";
import sanityClient from "../Client";

import Category from "./Category";

// import fruitsIcon from "../images/fruits-icon.png";
// import grainIcon from "../images/grain-icon.png";
// import proteinIcon from "../images/protein-icon.png";
// import vegetableIcon from "../images/vegetable-icon.png";

const Categories = () => {
	const [categories, setCategories] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "category"]{
      title,
      slug,
      description,
      image{
        asset->{
          _id,
          url
        },
      },
      hexCode,
    }`
			)
			.then((data) => setCategories(data))
			.catch(console.error);
	}, []);

	return (
		<div className="">
			<h3 className="text-3xl font-bold text-center my-10 lg:my-5">
				All Categories🥘
			</h3>

			<div className="flex flex-col lg:flex-row lg:justify-center flex-wrap w-full gap-10 my-10">
				{categories &&
					categories.map((category) => (
						<Category key={category.id} category={category} />
					))}
			</div>
		</div>
	);
};

export default Categories;
