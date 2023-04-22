import React from "react";
import { useState, useEffect } from "react";


export default function NotificationSucces(props){
	const [ notification, setNotification ] = useState(!!props.status);
	const [ countdown, setCountdown ] = useState(0);

	const showNotification = () => {
		setNotification(!notification);
	}
	useEffect(() => {
	  let timeoutId;
	  if (notification) {
		setCountdown(5);
	    timeoutId = setTimeout(() => {
	      setNotification(false);
	      console.log(props.status);
	    }, 5000);
	  }
	  return () => {
	    clearTimeout(timeoutId);
	  };
	}, [notification]);

	useEffect(() => {
	  const interval = setInterval(() => {
	    setCountdown((prevCountdown) => prevCountdown - 1);
	    props.status=notification;
	      console.log('ini diklik'+props.status);
	  }, 1000);

	  if (countdown === 0) {
	    clearInterval(interval);
	  }

	  return () => clearInterval(interval);
	}, [countdown, notification]);

	return(
		<>
		<button onClick={() => setNotification(!notification)} >KLIK</button>
		{ notification && <div className="notificationSuccesFloat w-96 border-l-8 border-green-400 p-3 fixed right-5 bottom-5 bg-white z-50 rounded" style={{ boxShadow: "2px 5px 10px black" }} >
				<div className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" fill="currentColor" className=" text-green-500 mr-3" viewBox="0 0 16 16" style={{ color: "green" }}>
						<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
						<path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
					</svg>
					<span>
						<h5 className="text-base p-0 m-0">Succes</h5>
						<p className="text-sm">Data berhasil diubah</p>
					</span>
					<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x absolute top-0 right-0 m-2 cursor-pointer" viewBox="0 0 16 16" onClick={()=>showNotification()}>
					  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
					</svg>
				</div>
				<div class="loading-bar mt-2"></div>		
				<small className="text-sm">Popup akan hilang selama <span>{countdown}</span> detik</small>
			</div>}	
		</>
	)
}