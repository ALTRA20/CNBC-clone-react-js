import React from "react";
import NewsMediumHorizontalCard from "../../Components/NewsMediumHorizontalCard";

export default function Headlines(props){
	return(
		<div className="headlines pl-3">
	 		<h3 className="headlinesTitle">Berita Utama</h3>
	 		<div className="headlinesList my-5">
	 		{
	 			props.recentlyNews.map((news, i) => {
	 				return <NewsMediumHorizontalCard key={i} title={news.title} img={news.img} />
	 			})
	 		}
	 		</div>
	 	</div>
	)
}