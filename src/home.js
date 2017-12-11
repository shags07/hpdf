import React from 'react';
import {TrendsBox,WhoToFollow,SelfCard,Feeds} from './Commons';
import Avatar from "material-ui/Avatar";

import Paper from "material-ui/Paper"



class HomePage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			searchword:this.props.searchword,
		}
	}
	render(){
	   return(
		  <div>
			<SelfCard data = {SelfJSON}/>  
			<Paper zDepth={3}
			   	  style={{backgroundColor:"rgb(0, 255, 120)",width:"50%",height:"62px",
				  marginLeft:"330px",marginTop:"75px",position:"absolute",zIndex:"95",
				  boxShadow:"5px 5px 50px #100",border:"2.5px ridge black"}}>

				  <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_zW2tlalXT1z8-v0wRzkZrbHYrdSlFLTAka6iZAotYH6BdPEnUA" style={{margin:"1%",marginLeft:"25px"}}/>
				  <input type="text" style={{position:"absolute",margin:"10px",height:"30px",width:"75%",
					borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",
					borderTopRightRadius:"10px",borderTopLeftRadius:"10px", paddingLeft:"15px",
					backgroundColor:"rgba(0,0,0,0.90)",color:"white",
					fontSize:"16px"}} placeholder="What's happenning buddy"/>
				  <input type="file" name="file" id="file" className="input-file"
						 accept="image/gif,image/jpeg,image/jpg,image/png,video/mp4,video/x-m4v" 
						 style={{position:"absolute",right:"100px",top:"19px",marginRight:"10px",
						 		width:"0.1px",height:"0.1px",zIndex:"-1",opacity:"0",overflow:"hidden"}}/>
				  <label id="inp_label" htmlFor="file" style={{backgroundColor: "rgb(0, 255, 120)",display: "inline",cursor:"pointer",position:"absolute",
					right:"95px",top:"13.5px",width:"35px",height:"30px"}}>
				  	<svg width="20" height="17" viewBox="0 0 20 17" style={{margin:"6px",marginLeft:"8px"}}>
					    <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
					  </svg>
				  </label>				 
				  		 	
			</Paper>	  
			<Feeds feedList={feedJSON}/>
			<TrendsBox style={{position:"absolute",width:"300px",marginLeft:"10px",top:"350px", paddingTop:"0.25px",
				boxShadow:"5px 5px 500px #green", backgroundImage:"url('sagar.png')",border:"1px solid green"}} taglist={tagJSON}/>
			<WhoToFollow float="right" mright = "20px" mtop = "75px" userList = {UserJSON}/>	  
		  </div>
	   );	 	 
	}

	
}

var SelfJSON = {
	"key":0,
	"Name": "MS Dhoni",
	"ava": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_zW2tlalXT1z8-v0wRzkZrbHYrdSlFLTAka6iZAotYH6BdPEnUA",
	"Tag":"@mahi7781",
	"Cover":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKAb7F0YTLPQ5hvaraC4ToilgLwJ9bIYNQcYh3L4kWH_6FP1tZ",
	"Theme":"black",
	"Status":"Serving the country in form of Indian National Team",
	"Tweets":"94k",
	"FlingCount":"195",
	"FlerCount":"18.1m",
	"FollowerList":["Virat Kohli"]
}

var tagJSON = [
	{
		"title": "INDvsSL",
		"count": "14k"
	},
	{
		"title": "CskReturns",
		"count": "10k"
	},
	{
		"title": "Virushka",
		"count": "8k"
	},
	{
		"title": "ENGvsAus",
		"count": "5k"
	},
	{
		"title": "MissWorld",
		"count": "10k"
	},
	{
		"title": "FukreyReturns",
		"count": "1k"
	},
	{
		"title": "ChicagoStorm",
		"count": "1.12K"
	},
	{
		"title": "WWE",
		"count": "580"
	}
]

var UserJSON = [
	{
		"key":0,
		"Name": "Sachin Tendulkar",
		"ava": "https://pbs.twimg.com/profile_images/2504398687/344204969_400x400.jpg",
		"Tag":"@sachin_rt",
		"Cover":"http://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/01/26/Pictures/_62463454-e39e-11e6-9542-52468f740e4a.jpg",
		"Theme":"yellow",
		"Status":"This Victory was Amazing #after28years ",
		"Tweets":"45k",
		"FlingCount":"260",
		"FlerCount":"12.6M",
		"FollowerList":["Virat Kohli","Virender Sehwag","Brett Lee"]
	},
	{
		"key":1,
		"Name": "Amitabh Bachchan",
		"ava": "http://im.rediff.com/movies/2011/nov/07tribute1.jpg",
		"Tag":"@srBachchan",
		"Cover":"https://www.99gossip.com/wp-content/uploads/2017/05/446939-amitabh-1.jpg",
		"Theme":"yellow",
		"Status":"overwhelmed by your love",
		"Tweets":"48k",
		"FlingCount":"15",
		"FlerCount":"16.5m",
		"FollowerList":["Sashi Kapoor","Tom Cruise","Gautam Gambhir"]
	},
	{
		"key":2,
		"Name": "Manushi Chillar",
		"ava": "https://pbs.twimg.com/media/DO7P0H0VAAAaWTd.jpg",
		"Tag":"@manushiChillar",
		"Cover":"https://i.ndtvimg.com/i/2017-11/manushi-chhillar-afp_650x400_71511171018.jpg",
		"Theme":"yellow",
		"Status":"Beauty comes from within #MissWorld2k17 ",
		"Tweets":"11.8K",
		"FlingCount":"166",
		"FlerCount":"98.4K",
		"FollowerList":["Virender Sehwag"]
	},
	{
		"key":3,
		"Name": "Sundar pichai",
		"ava": "https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg",
		"Tag":"@SundarPichai",
		"Cover":"https://timesofindia.indiatimes.com/thumb/msid-48444738,width-400,resizemode-4/48444738.jpg",
		"Theme":"yellow",
		"Status":"If You never try you will never know what awaits you ",
		"Tweets":"25.6K",
		"FlingCount":"198",
		"FlerCount":"139K",
		"FollowerList":["Mark Zuckerberg","Ratan Tata","Sagar"]
	}
]

var feedJSON = [
	{	
		key:0,
		user:UserJSON[0],
		"timestamp":"10 months",
		"text_content":UserJSON[0].Status,
		"embed_data":UserJSON[0].Cover
	},
	{
		key:1,
		user:UserJSON[1],
		"timestamp":"9 months",
		"text_content":UserJSON[1].Status,
		"embed_data":UserJSON[1].Cover
	},
	{
		key:2,
		user:UserJSON[2],
		"timestamp":"47 days",
		"text_content":UserJSON[2].Status,
		"embed_data":UserJSON[2].Cover
	},
	{
		key:3,
		user:UserJSON[3],
		"timestamp":"3 months",
		"text_content":UserJSON[3].Status,
		"embed_data":UserJSON[3].Cover
	}
]

export default HomePage