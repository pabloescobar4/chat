import React ,{useState} from "react";
import moment from "moment";
import "./Comment.css";
function Components(){
	moment().format();
	// var day = moment(["1995-12-25"],["1995-12-25"]);
	// console.log(day[0]);
	const data = [
		{
		id: "001",
		author: "albert",
		body: "Whats the status?",
		timestamp: "Sun Aug 02 2020 18:08:45 GMT+0530",
		points: "2",
		replies: [
		  {
			id: "003",
			author: "haren",
			body: "Wrote the test suites, waiting for approval?",
			timestamp: "Sun Aug 02 2020 18:12:45 GMT+0530",
			points: "3",
			replies: [
			  {
				id: "004",
				author: "albert",
				body: "Thanks for the update!",
				timestamp: "Sun Aug 02 2020 18:15:45 GMT+0530",
				points: "8"
			  }
			]
		  },
		  {
			id: "002",
			author: "Nrupul",
			body: "looking forward for the demo!",
			timestamp: "Sun Aug 02 2020 18:10:45 GMT+0530",
			points: "2"
		  }
		]
		}
	]

	console.log(data)

	// const [date,setDate] =  useState(data[0].timestamp)
	const [plus,setPlus] = useState("+")
	function newOne(){
		let val =plus;
	    console.log(val)
		// (val==="+") ?
        //  setPlus("-")  : setPlus("+")
		
	}

	
	
	  

// const datefromnow = (moment(date).fromNow(),"a")

// 	function dateSet(){
// 		setDate()
// 	}

	const [Ab,setAb] = useState(data)
// 	console.log(Ab)


	return (
		<>
	
		<div className="bgclr">
		<div className="plus" >
			<button onClick={newOne}>+</button>
		</div>
		{Ab.map((element) => {
				return (
					<div key = {element.id} >

						<div className ="flex">
							<div className ="gap">
							{element.author}
							</div>
						
						<div className ="gap">
						{element.points} points
						</div>
						<div className ="gap">
						{element.timestamp}
						</div>
						{/* {setDate} */}
						</div>
						
					<h2>{element.body}</h2>	
					</div>
					
									);
			})}
          <div className ="flex">
			  <div className ="gap">
				<button onClick = {""}>Reply</button>
			  
			  </div>
			  <div className ="gap">
			  <button> Give Award</button>
			  </div>
			  <div className ="gap">
			  <button> Share</button> 
			  </div>
			  <div className ="gap">
			  <button>  Report</button>
			  </div>
			  <div className ="gap">
			  <button> Save</button>
			  </div>
		  </div>

		</div>
		






		<div>
	<div className="bgclr1">
		<div className="plus" onClick={newOne}>
			+
		</div>
		{Ab.map((element) => {
				return (
					<div key = {element.id} >

						<div className ="flex">
							<div className ="gap">
							{element.replies[0].author}
							</div>
						
						<div className ="gap">
						{element.replies[0].points} points
						</div>
						<div className ="gap">
						{element.replies[0].timestamp}
						</div>
						{/* {setDate} */}
						</div>
						
					<h2>{element.replies[0].body}</h2>	
					</div>
					
									);
			})}
          <div className ="flex">
			  <div className ="gap">
				<button>Reply</button>
			  
			  </div>
			  <div className ="gap">
			  <button> Give Award</button>
			  </div>
			  <div className ="gap">
			  <button> Share</button> 
			  </div>
			  <div className ="gap">
			  <button>  Report</button>
			  </div>
			  <div className ="gap">
			  <button> Save</button>
			  </div>
		  </div>

		</div>
		
		<div className="bgclr2">
		<div className="plus" onClick={newOne}>
			+
		</div>
		{Ab.map((element) => {
				return (
					<div key = {element.id} >

						<div className ="flex">
							<div className ="gap">
							{element.replies[0].replies[0].author}
							</div>
						
						<div className ="gap">
						{element.replies[0].replies[0].points} points
						</div>
						<div className ="gap">
						{element.replies[0].replies[0].timestamp}
						</div>
						{/* {setDate} */}
						</div>
						
					<h2>{element.replies[0].replies[0].body}</h2>	
					</div>
					
									);
			})}
          <div className ="flex">
			  <div className ="gap">
				<button>Reply</button>
			  
			  </div>
			  <div className ="gap">
			  <button> Give Award</button>
			  </div>
			  <div className ="gap">
			  <button> Share</button> 
			  </div>
			  <div className ="gap">
			  <button>  Report</button>
			  </div>
			  <div className ="gap">
			  <button> Save</button>
			  </div>
		  </div>

		</div>
		
		<div className="bgclr1">
		<div className="plus" onClick={newOne}>
			+
		</div>
		{Ab.map((element) => {
				return (
					<div key = {element.id} >

						<div className ="flex">
							<div className ="gap">
							{element.replies[1].author}
							</div>
						
						<div className ="gap">
						{element.replies[1].points} points
						</div>
						<div className ="gap">
						{element.replies[1].timestamp}
						</div>
						{/* {setDate} */}
						</div>
						
					<h2>{element.replies[1].body}</h2>	
					</div>
					
									);
			})}
          <div className ="flex">
			  <div className ="gap">
				<button>Reply</button>
			  
			  </div>
			  <div className ="gap">
			  <button> Give Award</button>
			  </div>
			  <div className ="gap">
			  <button> Share</button> 
			  </div>
			  <div className ="gap">
			  <button>  Report</button>
			  </div>
			  <div className ="gap">
			  <button> Save</button>
			  </div>
		  </div>

		</div>
		

		</div>
		</>
	)
}
export default Components;