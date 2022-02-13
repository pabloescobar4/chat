import React from "react";
import {Link } from "react-router-dom"
function HomeComponent(){
	return(
		<div>
			<div  className="flex">
			<Link to="/home">
                <button className="font-bold">Home</button>
              </Link>
			  <Link to="/contact">
                <button className="font-bold">Contact</button>
              </Link>
			  <Link to="/about">
                <button className="font-bold">About</button>
              </Link>
			  <Link to="/payment">
                <button className="font-bold">Payment</button>
              </Link>
			</div>
			
			<h1>	Welcome to Home Page</h1>

		</div>
	)
}

export default HomeComponent