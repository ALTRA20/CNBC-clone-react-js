import React from "react";
import Navbar from "../Components/Navbar";
import Headlines from "./pageComponents/Headlines";
import CategoryMdCard from "./pageComponents/CategoryMdCard";

export default function Category(props){
	console.log(props.news);
	const category_id = props.news[0].category_id;
	let newsCategory = '';
	for(let category of props.categories){
		if (category.id == category_id){
			newsCategory = category.name;
		}
	}
	return(
		<>
			<Navbar/>
			<section className="container mx-auto grid grid-cols-3">
				<div className="col-span-2">
					<CategoryMdCard news={props.news} category={newsCategory}/>
				</div>
				<div className="col-span-1">
					<div className="col-span-1">
					 	<Headlines recentlyNews={props.recentlyNews}/>
					</div>
				</div>
			</section>
		</>
	)
}