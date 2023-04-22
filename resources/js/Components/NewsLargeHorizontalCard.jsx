export default function NewsLargeHorizontalCard(props){
	return(
		<div className="cardHorizontal grid grid-cols-4 items-center pb-4 border-b-2 border-white mb-5" id="news">
			<img src={'/img/'+props.img} alt="" className="w-52 h-36 bg-red-600 object-cover mr-5"/>
			<h6 className="cardHorizontalTitle col-span-3 mx-5 break-words text-black text-base font-black" id="newsTitle">
				<a href={'/news?code='+props.title} >{props.title}</a>
			</h6>
		</div>
	)
}