import React from "react";
import NewsMediumHorizontalCard from "../../Components/NewsMediumHorizontalCard";

export default function NewsByCategory(props){
	return(
		Object.keys(props.newsByCategory).map((category) => (
			props.newsByCategory[category].data.length > 0 && (
					<div className="NewsByCategory pl-3 pt-5 mt-5 border-t-2 w-full" key={category}>
					{/*{console.log(props.newsByCategory)}*/}
				 		<h3 className="NewsByCategoryTitle">{category}</h3>
				 		<div className="NewsByCategoryList my-5 ">
					      {props.newsByCategory[category].data.map((news, index) => (
					        <NewsMediumHorizontalCard key={index} title={news.title} img={news.img} />
					      ))}
				 		</div>
				 		<a href={'/'+category}>Lihat lebih banyak...</a>
				 	</div>
			)

		))
	)
}