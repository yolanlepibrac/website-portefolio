import React, { Component } from 'react';
import posed from 'react-pose';
import {BrowserView,MobileView,isBrowser,isMobile} from "react-device-detect";


const WindowHomeTransition = posed.div({
    idle: {
      left : ({left1})=>(left1),
      top : ({top1})=>(top1),
      width : ({width1})=>(width1),
      height : ({height1})=>(height1),
      fontSize : ({fontSize1})=>(fontSize1),
      transition: {
        duration: 100,
        ease: 'linear'
      }
     },
    hovered: {
      left : ({left2})=>(left2),
      top : ({top2})=>(top2),
      width : ({width2})=>(width2),
      height : ({height2})=>(height2),
      fontSize : ({fontSize2})=>(fontSize2),
      transition: {
        duration: 100,
        ease: 'linear'
      }
     },
});

class WindowHome extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      hover:false,

    };
  }

  toggleHover = ()=>{
    this.setState({hover:!this.state.hover})
  }




  render() {

    return (
      <div onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} pose={this.state.hover ? "hovered" : "idle"}
       style={{position:"absolute", display:"flex", flexDirection:"column",  alignItems:"flex-start", backgroundColor:'rgba(0,0,0,0)', borderStyle:"solid", borderWidth:10, borderColor:"rgba(255,255,255,1)", top:this.props.top, left:this.props.left, width:this.props.width, fontSize:this.props.fontSize, transform:this.state.hover?"scale("+this.props.scale+")":"scale(1)"}}>
        {this.props.children}
      </div>
    );
  }
}

let styles = {
    HomeMiddle: {
        backgroundColor : 'rgba(255,255,255,1)',

    },
}

export default WindowHome;
