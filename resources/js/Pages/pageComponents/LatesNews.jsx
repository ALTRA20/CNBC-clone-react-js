import React from "react";
import NewsLargeHorizontalCard  from "../../Components/NewsLargeHorizontalCard";
export default function LatesNews(props){
	return(
		<div className="latestNews my-5">
	 		<h3 className="latestNewsTitle">Terbaru</h3>
	 		{props.latesNews.map((news1, i) => {
		 		return <NewsLargeHorizontalCard key={i} title={news1.title} img={news1.img}/>
	        })}
	 	</div>
	)
}