export default function NewsMediumHorizontalCard(props){
	const maxLength = 63;
	const title = props.title.substring(0, maxLength) + "...";
	return(
		<div className="cardHorizontal w-full flex items-center border-b-2 border-white mb-4" id="news">
			<div className="w-96 h-36 bg-no-repeat bg-cover relative mr-5" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/img/`+ props.img +`)`}}>
			</div>
			<h6 className="cardHorizontalTitle w-full text-black text-base font-bold" id="newsTitle">
				<a href={'/news?code='+props.title}>{title}</a>
			</h6>
		</div>
	)
}