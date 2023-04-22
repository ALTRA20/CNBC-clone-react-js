import { WindowSize } from "../Function/MyFunctions";
import React, { useState, useEffect } from "react";

export default function NewsBigCard (props) {
	let windowSizeWidth = WindowSize();
	return(
		<div className="newsBanner my-3">
		 	<div className="newsCardBig h-96 bg-no-repeat bg-cover relative" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(`+ props.img +`)`}}>
		 		<span className="absolute bottom-0 p-6">
		 			<h3 className="text-4xl font-bold drop-shadow-xl text-white" id="newsTitle" style={{ textShadow: `2px 2px black`}}>
		 				<a href="/news?code=siapa yang mau nonton animek">Siapa yang mau nonton Animek</a>
		 			</h3>
		 			<div>
		 				<span className="text-orange-500" id="newsCategory">Sport</span>
		 				<span className="text-white" id="newsTimeAgo ">7 menit yang lalu</span>
		 			</div>
		 		</span>
		 	</div>
			{(windowSizeWidth >= 640 ? <div className="related">
							<ul className="relatedList grid grid-cols-7 bg-white text-black">
								<span className="relatedTitle col-span-1 h-26 bg-blue-600 flex justify-center items-center">
									<h4 className="text-white fw-bold">Terkait</h4>
								</span>
								<li className="relatedArticel1 col-span-3 h-26 p-5 text-black flex items-center border-r-2 border-black bg-stone-300">
									<a href="" className="">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. 
									</a>
								</li>
								<li className="relatedArticel2 col-span-3 h-26 p-5 text-black flex items-center bg-stone-200">
									<a href="" className="">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. 
									</a>
								</li>
							</ul>
						</div>
			: '')}
		</div>
	)
}