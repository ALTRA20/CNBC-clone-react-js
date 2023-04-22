import { Head } from '@inertiajs/react';
import '../../css/homepage.css';
import Navbar from '../Components/Navbar';
import NewsMediumHorizontalCard from '../Components/NewsMediumHorizontalCard';
import PopularNews from './pageComponents/PopularNews';
import NewsByCategory from './pageComponents/NewsByCategory';

export default function DetailNews (props) {
	const convertDatetime = (created_at) => {
		const months = [
		  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
		];
		const dateObj = new Date(created_at);
		const date = dateObj.getDate();
		const monthIndex = dateObj.getMonth();
		const year = dateObj.getFullYear();
		const hour = dateObj.getHours();
		const minute = dateObj.getMinutes();
		const second = dateObj.getSeconds();

		const monthName = months[monthIndex];
		// Format tanggal dan jam
		let datetime = `${date} ${monthName} ${year} ${hour}:${minute}`;
		return datetime;
	}
	return(
		<>
			<Navbar />
			<div className="container mx-5 lg:mx-auto grid grid-cols-3">
				<div className="lg:col-span-2 col-span-3">
					{ (props.detailNews ? 
						props.detailNews.map((news, i) => {
							let datetime = convertDatetime(news.created_at);
							return <div key={i} className="detailNews pr-5">
								<Head title={news.title}/>
								<h1 className="detailNewsTitle mb-0">{news.title}</h1>
								<div className="detailNewsInfo text-lg">
									{props.categories.map((category, i) => {
										console.log(category.id == news.category_id);
										if (category.id == news.category_id ){
											return <a href={'/'+category.name} key={i} className="text-blue-600 font-black" id="category">{category.name}</a> 
										}
									})}
									<span> - </span>
									<span id="author">{news.author+', '}</span>
									<span id="media">doTech</span>
								</div>
								<span className="mb-5 text-slate-600" id="detailNewsDate">{datetime}</span>
								<img src={'/img/'+news.img} alt="" className="detailNewsImg w-full h-96 object-cover object-center"/>
								<p className="detailNewsContent text-black my-5">
									{news.content}
								</p>
							</div>
						})
					: '')}

				 	{props.popularNews && (
						<PopularNews popularNews={props.popularNews}/>
					)}


				</div>
				<div className="lg:col-span-1 col-span-3 lg:pl-5">
					<div className="newsRelated">	
						<h3>Terkait</h3>
						{( props.newsRelated ? 
							props.newsRelated.map((news, i) => {
								return <NewsMediumHorizontalCard key={i} img={news.img} title={news.title} />
							})
						: '')}
					</div>
					<NewsByCategory newsByCategory={props.newsByCategory} />



				</div>
			</div>
		</>
	)
}