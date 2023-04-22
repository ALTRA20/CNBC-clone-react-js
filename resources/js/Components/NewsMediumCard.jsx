export default function NewsMediumCard (props){
	return(
		<div className="col-span-1 h-56 bg-no-repeat bg-cover relative" id="cardMedium" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/img/`+ props.img +`)`}}>
			<h6 className="absolute bottom-0 m-5 text-white">
				<a href={'/news?code='+props.title}>{props.title}</a>
			</h6>
		</div>
	)
}