import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import IconButton from "material-ui/IconButton"
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import { green600 } from 'material-ui/styles/colors';
import AutoComplete from 'material-ui/AutoComplete';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from "material-ui/Divider"
import Popover from 'material-ui/Popover';



class TweetButton extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Tweet" id = "blaze"
            onClick={this.handleOpen}
            style={{marginTop:"1.25%",marginLeft:"2%",position:"fixed",
            boxShadow:"rgba(0, 0, 0, 0.3) 0px 19px 60px, rgba(0, 0, 0, 0.22) 0px 15px 20px"}} 
            icon={<img  width="24px" height="24px" src="flame_icon.ico" alt=""/>}
        />
        <Dialog
          title="What you want to do ?"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Select anyone 
        </Dialog>
      </div>
    );
  }
}


export class SelfCard extends React.Component{
  render(){
    return(
      <div style={{position:"absolute",width:"290px",height:"214px",marginTop:"75px",marginLeft:"10px",
      boxShadow:"rgba(0, 0, 0, 0.4) 0px 19px 60px, rgba(0, 0, 0, 0.32) 0px 15px 20px",zIndex:"88"}}>
      <img src = {this.props.data.Cover} className="coverImage" alt = {this.props.Name+"'s Header Pic"}
          style={{position:"absolute",zIndex:"85",border:"1px ridge green",borderTop:"4px ridge green",width:"287px",height:"95px",
          boxShadow:"-5px -5px 50px -5px #004D40"}}/>
      <Paper zDepth={3} 
        style={{backgroundColor:green600,position:"absolute",top:"45%",
        zIndex:"86",width:"288.5px",height:"118px",
        boxShadow:"5px 5px 50px -5px #004D40"}}>
          <img src = {this.props.data.ava} alt = {this.props.Name+"'s Avatar"}
             style={{position:"absolute",top:"-36px",width:"72px",height:"72px",zIndex:'87',
             borderBottomLeftRadius:"50%",borderBottomRightRadius:"50%",
             borderTopLeftRadius:"50%",borderTopRightRadius:"50%",
             boxShadow:"rgba(0, 0, 0, 0.4) 0px 19px 60px, rgba(0, 0, 0, 0.32) 0px 15px 20px"
          }}/>
          <div className="SelfNameTag" style={{height:"58px"}}>
              <span style={{position:"absolute", display:"block",color:this.props.data.Theme,zIndex:"88",
                  paddingLeft:"30%",marginTop:"-5%"}}>
                  <h2>{this.props.data.Name}</h2>
              </span>
              <span style={{position:"absolute",display:"block",color:'white',zIndex:"88",
                  paddingLeft:"30%",marginTop:"3%"}}>   
                  <h3 style={{fontWeight:"normal"}}>{this.props.data.Tag}</h3>
              </span>
          </div>
           <button disabled={true} style={{width:"74px",height:"16px",border:"none",marginTop:"16px",
               color:"white",backgroundColor:"rgba(0,0,0,0)"}}><strong style={{fontSize:"16px"}}>Tweets</strong></button>     
           <button disabled={true} style={{width:"91px",height:"16px",border:"none",marginTop:"16px",
               color:"white",backgroundColor:"rgba(0,0,0,0)"}}><strong style={{fontSize:"16px"}}>Following</strong></button>
          <button style={{width:"91px",height:"16px",border:"none",marginTop:"16px",
               color:"white",backgroundColor:"rgba(0,0,0,0)"}}><strong style={{fontSize:"16px",marginLeft:"10px"}}>Followers</strong></button>
           <span style={{color:this.props.data.Theme,zIndex:'89'}}>
               <strong style={{paddingLeft:"25px",textAlign:"center"}}>{this.props.data.Tweets}</strong>
              <strong style={{paddingLeft:"50px",marginRight:"12px", textAlign:"center"}}>{this.props.data.FlingCount}</strong>
              <strong style={{paddingLeft:"50px",marginRight:"16px",textAlign:"center"}}>{this.props.data.FlerCount}</strong>
          </span>
      </Paper>
      </div>
    );
  }
}


export class TrendsBox extends React.Component{
  render(){
    return(
      <Paper zDepth={3} className = "Trends-Container"
      style={this.props.style}>
      <h1 style={{paddingLeft:"10px",borderBottom:"1px solid green",backgroundColor:"rgb(0, 255, 120)"}}>Trending</h1>
            <div id ="trend_tags">
              {
                this.props.taglist.map((item)=>
                  <div>
                    <div style = {{marginBottom:'10px'}}>
                      <strong style = {{display:'block',marginLeft:'10px',
                        color: 'rgba(0, 255, 120, 0.75)',fontSize: '20px'}}>
                        {'#'+item.title}
                      </strong>
                      <samp style={{marginLeft:'10px',fontSize: '14px'}}>
                        {item.count+"Tweets"}
                      </samp> 
                    </div>
                  </div>  
              )}
            </div>
      </Paper>
    );
  }
}


const details = ['Virat Kohli', 'Suresh Raina', 'Joe root', 'Brendon Mccullum', 'Steve Smith', 'ABDE Velliers', 'Sachin Tendulkar', 'Hardik Pandya'];

export class HeaderBar extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }
  handleTouchTap = (event) => {
    // 
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };
  render(){
     return(
        <div>
        <FlatButton
          onClick={this.handleTouchTap}
          label=" "
          disableTouchRipple = {true}
          backgroundColor="rgba(0,0,0,0)"
          style={{position:"fixed",top:"15px",right:"170px",zIndex:"99",backgroundColor:"rgba(0, 0, 0, 0)"}}
          />
        <Paper zDepth={3} style={{backgroundColor :green600,display:"flex",position:"fixed",width:"98.75%",zIndex:"98"}}>  
        <Tabs style={{height : "110%", width : "30%",
          boxShadow:"rgba(0, 0, 0, 0.3) 0px 120px px, rgba(0, 0, 0, 0.25) 0px 20px 15px"}}>
          <Tab label="Home"/>
          <Tab label="Notifications"/>
          <Tab label="Messages"/>
        </Tabs>
        <input type="image" id="logo" src="new_logo.png" width="48" height="48" alt="logo"
          style={{marginLeft:"12%",marginRight:"12%",marginTop:"0.75%",marginBottom:"0.25%"}}
          onMouseOver = {function (){
            document.getElementById("logo").src="new_logo2.png"
          }}
          onMouseOut = {function (){
            document.getElementById("logo").src="new_logo.png"
          }}  
        />
        <SearchBar/>
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_zW2tlalXT1z8-v0wRzkZrbHYrdSlFLTAka6iZAotYH6BdPEnUA" alt="Profile<->Settings" style={{marginTop:"1%",marginBottom:"0.25%",marginLeft:"25%",marginRight:"2.5%",
           boxShadow:"rgba(0, 22, 0, 0.3) 0px 19px 60px, rgba(0, 24, 0, 0.22) 0px 15px 20px"}}/>
          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.handleRequestClose}
          >
            <Menu>
              <MenuItem primaryText="MS Dhoni"/>
              <MenuItem primaryText="@mahi7781" style={{position:"absolute",top:"30px", fontSize:"16px"}} disabled={true}/>
              <Divider/>
              <MenuItem primaryText="Profile"/>
              <MenuItem primaryText="Lists"/>
              <MenuItem primaryText="Moments"/>
              <Divider/>
              <MenuItem primaryText="Promote Mode"/>
              <MenuItem primaryText="Twitter Ads"/>
              <MenuItem primaryText="Analytics"/>
              <Divider />
              <MenuItem primaryText="Settings and Privacy"/>
              <MenuItem primaryText="Help Center"/>
              <MenuItem primaryText="Keyboard Shortcuts"/>
              <MenuItem primaryText="Log out"/>
              <Divider />
              <MenuItem primaryText="Night mode"/>
            </Menu>
          </Popover>
        <TweetButton />
        </Paper>
        </div>
     );   
  }
}

export class WhoToFollow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      disp:[false,false,false,false]
    }
  }
  flip_disp_on(key){
    var temp = this.state.disp;
    temp[key]=!temp[key];
    this.setState({disp:temp});
  }
  flip_disp_off(key){
    var temp = this.state.disp;
    temp[key]=!temp[key];
    setInterval(()=>this.setState({disp:temp}),2500);
  }
  render(){
    return(
      <Paper zDepth={3}
         style={{backgroundColor:"#000",width:"300px",height:"500px", 
         marginRight:this.props.mright,marginLeft:this.props.mleft,marginTop:this.props.mtop,
         paddingTop: "5px", float:this.props.float,
         boxShadow:"5px 5px 50px #004D40",backgroundImage:"url('sagar1.png')",border:"1px solid green"}}>
         <h2 style={{paddingLeft:"10px",borderBottom:"1px solid green",backgroundColor:"rgb(0, 255, 120)"}}>Follow Recommendation</h2>
         <div>{this.props.userList.map((item)=>
            <div className = 'UserPanelCondensed' id = {'upc'+(item.key+1).toString()} key = {(item.key+1).toString()}>
              <UserCard id={"user_card"+(item.key+1).toString()} ref={"usercard"+(item.key+1).toString()}
                  Name={item.Name}
                  ava={item.ava} 
                  Tag={item.Tag} 
                  Cover={item.Cover} 
                  Theme= {item.Theme} 
                  Tweets={item.Tweets}
                  Status={item.Status}
                  FList={item.FollowerList} 
                  FlingCount={item.FlingCount} 
                  FlerCount={item.FlerCount} display={this.state.disp[item.key]?"block":"none"}/>   
              <Avatar id = {"ava"+(item.key+1).toString()} src = {item.ava} className = "avatars"
                  style={{width:'20%',height:'20%',marginRight:'5px',marginLeft:'10px',float:'left'}}
                  onMouseEnter={()=>this.flip_disp_on(item.key)}
                  onMouseLeave={()=>this.flip_disp_off(item.key)}/>
              <a href='javascript:void(0);' style={{marginLeft:'15px',color:"rgb(0, 255, 120)"}}>
                <h3 style={{display:'inline',fontFamily:'roboto',fontSize:'20px'}}>{item.Name}</h3>
              </a>
              <button onClick={()=>{document.getElementById('upc'+(item.key+1).toString()).style.display = 'none';}}
                style={{backgroundColor:"rgba(0,255,120,0)",color:"green600",border:"none",cursor:"pointer"}}>X</button>
              <FlatButton label = 'Follow' 
                style={{display: 'block', marginTop:'10px', marginLeft:'100px',borderBottomLeftRadius:'24px',borderBottomRightRadius:'24px',
                        borderTopLeftRadius:'24px',borderTopRightRadius:'24px',border:'0.5px solid white'}}/>
              <Divider style={{clear:'both',marginTop:'10px',marginBottom:"15px"}}/>
              </div>)}
         </div>    
      </Paper>
    );   
  }
}
TrendsBox.defaultProps = {
  style: {
    backgroundColor:"#000",backgroundImage:"url('sagar.png')",
    width:"300px",marginLeft:"10px",marginTop:"10px", paddingTop:"0.25px",
    boxShadow:"5px 5px 50px #004D40",border:"1px solid green600"
  }
}


class SearchBar extends React.Component{
  constructor(){
    super();
    this.state = {
      searchword: ""
    }
  }
  alterWord(){
    this.setState({searchword:this.refs.srch_inp.state.searchText});
  }
  render(){
    return(
      <div style={{position: 'fixed', display: 'inline-block', right: "350px"}}>
        <AutoComplete
            id = "search_input"

            ref = "srch_inp"

            style={{border: "1px solid #00FFFF",
              borderTopLeftRadius: "40px",
              borderTopRightRadius: "40px",
              borderBottomLeftRadius: "40px",
              borderBottomRightRadius: "40px",
              backgroundColor: "green600",
              paddingLeft: '20px',
              marginTop: '2.75%',
              height: '75%'
            }}

            textFieldStyle = {{width:'70%'}}

            filter={AutoComplete.fuzzyFilter}
            
            hintText="  Search Twitter"

            dataSource={details}
      
            maxSearchResults={3}

            onUpdateInput = {e=>this.alterWord(e)}
        />
       </div>
    )
  }
}

export class UserCard extends React.Component{
  constructor(props){
    super(props);
    var b=props.FList.toString();
    this.state={
      FList:b
    }
  }

  render(){
    return(
      <div id = {this.props.id} className="usercards" 
        style={{position:"absolute",display:this.props.display,width:"290px",height:"500px",
          transition:"ease-in",marginTop:"60px",marginLeft:"25px"}}>
        <img src = {this.props.Cover} className="coverImage" alt={this.props.Name+"'s Header Picture."}
            style={{position:"absolute",zIndex:"96",border:"1px ridge green",borderTop:"4px ridge green",width:"287px",height:"95px",
            boxShadow:"-5px -5px 50px -5px #004D40"}}/>
        <Paper zDepth={3} 
          style={{backgroundColor:green600,position:"absolute",top:"100px",
          zIndex:"97",width:"288.5px",height:"230px",
          boxShadow:"5px 5px 50px -5px #004D40"}}>
            <img src = {this.props.ava} alt={this.props.Name+"'s Avatar."}
               style={{position:"absolute",top:"-36px",width:"72px",height:"72px",zIndex:'98',
               borderBottomLeftRadius:"50%",borderBottomRightRadius:"50%",
               borderTopLeftRadius:"50%",borderTopRightRadius:"50%",
               boxShadow:"rgba(0, 0, 0, 0.42) 0px 19px 60px, rgba(0, 0, 0, 0.28) 0px 15px 20px"
            }}/>
            <FlatButton label = 'Follow' color= 'green600' 
                style={{display: 'block', marginTop:'10px',marginRight:'10px', float:"right",borderBottomLeftRadius:'24px',borderBottomRightRadius:'24px',
                borderTopLeftRadius:'24px',borderTopRightRadius:'24px',border:'0.5px solid white'}}/>
            <div className="SelfNameTag" style={{height:"58px",clear:"both"}}>
                <span style={{position:"absolute", display:"block",color:this.props.Theme,zIndex:"99",
                    paddingLeft:"10px",marginTop:"-5%"}}>
                    <h2>{this.props.Name}</h2>
                </span>
                <span style={{position:"absolute",display:"block",color:'green600',zIndex:"99",
                    paddingLeft:"10px",marginTop:"3%"}}>    
                    <h3 style={{fontWeight:"normal"}}>{this.props.Tag}</h3>
                </span>
            </div>
            <span style={{paddingLeft:"10px",color:this.props.Theme,display:"block"}}>{this.props.Status}</span>
            <button disabled={true} style={{width:"74px",height:"16px",border:"none",marginTop:"16px",
                color:"whiteA100",backgroundColor:"rgba(0,0,0,0)"}}><strong style={{fontSize:"16px"}}>Tweets</strong></button>      
            <button disabled={true} style={{width:"91px",height:"16px",border:"none",marginTop:"16px",
                color:"whiteA100",backgroundColor:"rgba(0,0,0,0)"}}><strong style={{fontSize:"16px"}}>Following</strong></button>
            <button style={{width:"91px",height:"16px",border:"none",marginTop:"16px",
                color:"whiteA100",backgroundColor:"rgba(0,0,0,0)"}}><strong style={{fontSize:"16px",marginLeft:"10px"}}>Followers</strong></button>
            <span style={{color:this.props.Theme,zIndex:'99'}}>
                <strong style={{paddingLeft:"25px",textAlign:"center"}}>{this.props.Tweets}</strong>
                <strong style={{paddingLeft:"50px",marginRight:"12px", textAlign:"center"}}>{this.props.FlingCount}</strong>
                <strong style={{paddingLeft:"50px",marginRight:"16px",textAlign:"center"}}>{this.props.FlerCount}</strong>
            </span>
            <span style={{display:"block",marginTop:"10px",marginLeft:"10px"}}>Followed by <samp>{this.state.FList}</samp></span>
        </Paper>
      </div>
    );
  }
}

export class Feeds extends React.Component{
  render(){
    return(
      <Paper zDepth={3} className = "Feeds-container"
        style={{backgroundColor:"#000",width:"50%",
         marginLeft:"330px",marginTop:"135px",position:"absolute",
         boxShadow:"5px 5px 50px #004D40", backgroundImage:"url('sagar.png')",border:"1px solid green"}}>
         {this.props.feedList.map((item)=>
         <div>
          <Paper zDepth={3} className = "Feed" key={item.key}
            style={{backgroundColor:"rgb(0, 255, 120)",width:"95%",height:"auto", margin:"2.5%",
            boxShadow:"5px 5px 5px #004D40",border:"1px light green"}}>
            <Avatar src= {item.user.ava} style={{margin:"10px"}}/>
            <h4 style={{display:"inline",marginTop:"10px",position:"absolute"}}>{item.user.Name}
              <span style={{display:"inline",paddingLeft:"20px",position:"absolute",color:"green600"}}>
                  {item.user.Tag}</span> 
            </h4>
            <span style={{display:"inline",position:"absolute",right:"250px",marginTop:"10px",color:"green600"}}>    
              &bull; {item.timestamp} </span>
              <DropDownMenu value="" 
                style={{position:"absolute",right:"10px"}}
                underlineStyle={{display:"none"}}
                anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}>
                <MenuItem value={1} primaryText="Copy link to Tweet" />
                <MenuItem value={2} primaryText="Embed Tweet" />
                <MenuItem value={3} primaryText={"Mute "+item.user.Tag} />
                <MenuItem value={4} primaryText={"Block "+item.user.Tag} />
                <MenuItem value={5} primaryText="Report Tweet" />
                <MenuItem value={5} primaryText="I don't like this Tweet" />
            </DropDownMenu> 
            <span>{item.text_content}</span>
            <div className="media-container">
                <object data={item.embed_data} 
                    style={{display:"block", maxHeight:"250px",width:"90%",marginLeft:"auto",
                      marginRight:"auto", marginTop:"10px",border:"3.5px ridge"+item.user.Theme}}>

                </object>         
            </div>         
            <div>7
              <IconButton style={{marginLeft:"50px",marginRight:"60px",marginTop:"10px"}} >
                <FontIcon className="material-icons" hoverColor="#EEEEEE"
                  onClick={(e)=>e.target.style = "color:#FAFAFA !important"}>
                  Comment
                </FontIcon>
              </IconButton>
              <IconButton style={{marginLeft:"50px",marginRight:"60x",marginTop:"10px"}} tooltip="Retweet">
                <FontIcon className="material-icons" hoverColor = "#EEEEEE" id="reblaze_icon"
                  onClick={(e)=>e.target.style = "color:#FAFAFA !important"}>
                  Retweet
                </FontIcon>
              </IconButton>
              <IconButton style={{marginLeft:"60px",marginRight:"80px",marginTop:"10px"}} tooltip="Like">
                <FontIcon className="material-icons" hoverColor="#EEEEEE"
                  onClick={(e)=>e.target.style = "color:#FAFAFA !important"}>
                  Favourite
                </FontIcon>
              </IconButton>
              <IconButton style={{marginLeft:"30px",marginRight:"50px",marginTop:"10px"}} tooltip="Inbox">
                <FontIcon className="material-icons" hoverColor="#EEEEEE"
                  onClick={(e)=>e.target.style = "color:#FAFAFA !important"}>
                  Message
                </FontIcon>
              </IconButton>
            </div>
          </Paper>
          <Divider/>
        </div>)}   
      </Paper>    
    );
  }
}