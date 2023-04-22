import React from "react";
import '../../css/homepage.css';
import { Head } from '@inertiajs/react';
import Navbar from '../Components/Navbar';
import PopularNews from './pageComponents/PopularNews';
import LatesNews from './pageComponents/LatesNews';
import Headlines from './pageComponents/Headlines';

import NewsBigCard from '../Components/NewsBigCard';
import NewsMediumHorizontalCard from '../Components/NewsMediumHorizontalCard';
import NewsLargeHorizontalCard from '../Components/NewsLargeHorizontalCard';
import NotificationSucces from '../Components/NotificationSucces';

import NewsByCategory from './pageComponents/NewsByCategory';

import { useState, useEffect } from "react";
import axios from 'axios';


export default function Homepage(props){
	const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/api/news')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
    	console.log(data);
    },[data]);

	let notificationStatus=false;
	const img = '/img/3.jpg';
	console.log(notificationStatus);
	return(
		<>
			<NotificationSucces status={notificationStatus}/>
			<Head title={props.title}/>
			<Navbar/>
			<div className="container px-2 md:mx-auto grid grid-cols-3">
				 <div className="col-span-3 lg:col-span-2">
				 	<NewsBigCard img={img} />
				 	<PopularNews popularNews={props.popularNews}/>
				 	{/*<LatesNews latesNews={props.news}/>*/}
					<NewsByCategory newsByCategory={props.newsByCategory} />
				 </div>
				 <div className="col-span-3 md:col-span-1">
				 	<Headlines recentlyNews={props.recentlyNews}/>
				 </div>
			</div>


		</>
	)
}