import React, { Component } from 'react';
import posed from 'react-pose';
import {BrowserView,MobileView,isBrowser,isMobile} from "react-device-detect";

const PopUpAnimation = posed.div({
    idle: {

      'height':'0%',
      'top':'0%',
      'left':'0%',
      transition: {
        duration: 1000,
        ease: 'linear'
      }
     },
    hovered: {

      'height':'80%',
      'top':'10%',
      'left':'10%',
      transition: {
        duration: 300,
        ease: 'easeOut'

      }
     },
});


class Popup extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      appear : false,
      sizeC : 25,
      sizeD : 25,
      sizeO : 25,
      marginC : 0,
      marginD : 0,
      marginO : 0,
      hoverD : false,
      hoverO : false,
      hoverC : false,
      backgroundColorO:'rgba(248,248,248,1)',
      backgroundColorD:'rgba(248,248,248,1)',
      backgroundColorC:'rgba(248,248,248,1)',

    };
  }

  componentDidMount = () => {
    setTimeout(() => {this.setState({
      appear : true,
    })}, 0 );
  }

  enterD = () => {
    this.setState({
      sizeD : 20,
      marginD : 2.5,
      backgroundColorD:'rgba(240,240,240,1)',
    });
    this.myTimerD=setTimeout(()=>this.setState({ hoverD : true, }), 500)
  }
  leaveD = () => {
    this.setState({
      sizeD : 25,
      marginD : 0,
      hoverD : false,
      backgroundColorD:'rgba(248,248,248,1)',
    });
    clearTimeout(this.myTimerD)
  }
  enterO = () => {
    this.setState({
      sizeO : 20,
      marginO : 2.5,
      backgroundColorO:'rgba(240,240,240,1)',
    })
    this.myTimerO=setTimeout(()=>this.setState({ hoverO : true, }), 500)
  }
  leaveO = () => {
    this.setState({
      sizeO : 25,
      marginO : 0,
      hoverO : false,
      backgroundColorO:'rgba(248,248,248,1)',
    })
    clearTimeout(this.myTimerO)
  }
  enterC = () => {
    this.setState({
      sizeC : 20,
      marginC : 2.5,
      backgroundColorC:'rgba(240,240,240,1)',
    })
    this.myTimerC=setTimeout(()=>this.setState({ hoverC : true, }), 500)
  }
  leaveC = () => {
    this.setState({
      sizeC : 25,
      marginC : 0,
      hoverC : false,
      backgroundColorC:'rgba(248,248,248,1)',
    })
    clearTimeout(this.myTimerC)
  }



  render() {
    var Quit = require('../assets/images/quit.png')
    var Download = require('../assets/images/download.png')
    var Open = require('../assets/images/open.png')



    return (
      <div style={{ backgroundColor: 'rgba(155,155,155, 0)', top:'0%', left:'0%', height:'100%'}} >
        <div onClick={this.props.closePopup}  style={{position:"absolute", top: 0, left: 0, width:"100vw", height:"100%", backgroundColor: 'rgba(255,255,255, 0.95)', zIndex:1000}}>
        </div>
        <PopUpAnimation pose={this.state.appear ? "hovered" : "idle"} style={{background: 'white', position : 'fixed', width:'80%', zIndex : 1000, borderWidth:1, borderStyle:"solid", borderColor:"rgba(200,200,200,1)", boxShadow: '5px 5px 3px 0 rgba(0, 0, 0, 0.5)',overflow:"hidden"}}>
          <div className='menu' style={{width:'100%', height:25, color:'black', backgroundColor:'rgba(248,248,248,1)', display:'flex', justifyContent:'space-between'}}>
            <div style={{width:isMobile?50:250, textAlign:'left', marginLeft:20, display:'flex', alignItems:'center', fontSize:isMobile?12:22}}>{this.props.date}</div>
            <div style={{fontSize:isMobile?12:22, display:"flex", alignItems:"center"}}>
              {this.props.titre}
            </div>
            <div style={{display:'flex', flexDirection : 'row', alignItems : 'center', justifyContent : 'flex-end', width:isMobile?50:250, }}>
              {this.props.download ?
              <a href={this.props.src} download={this.props.titreDownload}>
                <div onMouseEnter={this.enterD} onMouseLeave={this.leaveD} style={{ width:25, height:25,marginRight : 5,  zIndex : 1000, backgroundColor:this.state.backgroundColorD, cursor:'pointer',}}>
                  <button  style={{'outline':'none', margin : this.state.marginD, width:this.state.sizeD, height:this.state.sizeD, backgroundColor:'rgba(0,0,0,0)', backgroundImage: "url("+ Download +")", backgroundSize: 'cover', cursor:'pointer', borderWidth:0, borderColor:'rgba(200,200,200,0)'}}>
                  </button>
                </div>
                {this.state.hoverD ? <div style={{position :'fixed', paddingLeft : 10, paddingRight :10, fontSize : 18, backgroundColor : '#EFEFEF', color:'black', borderColor : 'black', borderWidth : 1, borderStyle:'solid'}}>Download</div> : null }
              </a>

               : null }
              {this.props.open ?
              <div onClick={()=> window.open(this.props.src, "_blank")} onMouseEnter={this.enterO} onMouseLeave={this.leaveO} style={{ width:25, height:25,marginRight : 5, backgroundColor:this.state.backgroundColorO, cursor:'pointer'}}>
                <div>
                  <button style={{'outline':'none', margin : this.state.marginO, width:this.state.sizeO, height:this.state.sizeO, backgroundColor:'rgba(0,0,0,0)', backgroundImage: "url("+ Open +")", backgroundSize: 'cover', cursor:'pointer', borderWidth:0, borderColor:'rgba(200,200,200,0)'}}>
                  </button>
                </div>
                {this.state.hoverO ? <div style={{position :'fixed', paddingLeft : 10, paddingRight :10, fontSize : 18, backgroundColor : '#EFEFEF', color:'black', borderColor : 'black', borderWidth : 1, borderStyle:'solid'}}>Open in new window</div> : null }
                </div>
               : null }
               <div  onClick={this.props.closePopup} onMouseEnter={this.enterC} onMouseLeave={this.leaveC} style={{ width:25, height:25,marginRight : 5, backgroundColor:this.state.backgroundColorC, cursor:'pointer',  }}>
                <button  style={{'outline':'none', margin : this.state.marginC, width:this.state.sizeC, height:this.state.sizeC,  backgroundColor:'rgba(0,0,0,0)', backgroundImage: "url("+ Quit +")", cursor:'pointer', backgroundSize: 'cover', borderWidth:0, borderColor:'rgba(200,200,200,0)'}}>
                </button>
                {this.state.hoverC ? <div style={{position :'fixed', paddingLeft : 10, paddingRight :10, fontSize : 18, backgroundColor : '#EFEFEF', color:'black', borderColor : 'black', borderWidth : 1, borderStyle:'solid'}}>Quit</div> : null }
              </div>
            </div>
          </div>
          {this.props.content}
        </PopUpAnimation>
      </div>
    );
  }
}

let styles = {
    HomeMiddle: {
        backgroundColor : 'rgba(255,255,255,1)',

    },
}

export default Popup;
