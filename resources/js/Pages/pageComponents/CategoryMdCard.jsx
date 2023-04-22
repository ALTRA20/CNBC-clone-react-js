import NewsMediumCard from '../../Components/NewsMediumCard';
export default function CategoryMdCard (props) {
	// console.log(props);

	return (
		<div className="CategoryMdCard my-5">
	 		<h3 className="CategoryMdCardTitle text-3xl font-bold drop-shadow-xl text-black">Category : {props.category}</h3>
	 		<div className="grid grid-cols-2 gap-2">
	 		{props.news.map((news, i) => {
		 		return <NewsMediumCard key={i} title={news.title} img={news.img}/>
	        })}
	 		</div>
	 	</div>
	)
}