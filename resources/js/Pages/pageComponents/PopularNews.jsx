import NewsMediumCard from '../../Components/NewsMediumCard';
export default function PopularNews (props) {
	return (
		<div className="popularNews my-5">
	 		<h3 className="popularNewsTitle text-3xl font-bold drop-shadow-xl text-black">Popular</h3>
	 		<div className="grid grid-cols-2 gap-2">
	 		{props.popularNews.map((news1, i) => {
		 		return <NewsMediumCard key={i} title={news1.title} img={news1.img}/>
	        })}
	 		</div>
	 	</div>
	)
}