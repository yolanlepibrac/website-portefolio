import React, { Component } from 'react';
import posed from 'react-pose';

import Popup from './Popup';

import ScrollLock, { TouchScrollable } from 'react-scrolllock';

const Zoom = posed.div({
    idle: {
      'transform': `scale(${1})`,
      transition: {
        duration: 100,
        ease: 'linear'
      }
     },
    hovered: {
      'transform': `scale(${1.5})`,
      transition: {
        backgroundColor: {duration: 100, ease: 'linear'},
        right : { duration: 300, ease : 'backInOut' },

      }
     },
});

const Titre = posed.div({
    idle: {
      backgroundColor: 'rgba(50,50,50,0.3)',
      color : 'rgba(255,255,255,1)',
       height: 0,
      transition: {
        duration: 100,
        ease: 'linear',
      }
     },
    hovered: {
      backgroundColor: 'rgba(255,255,255,0.8)',
      color : 'rgba(0,0,0,1)',
       height: 24,
      transition: {
        duration: 100,
        ease: 'linear',
      }
     },
});



const Description = posed.div({
    idle: {
      backgroundColor: 'rgba(50,50,50,0.3)',
       width:0,
      transition: {
        duration: 300,
        ease: 'linear',
      }
     },
    hovered: {
      backgroundColor: 'rgba(255,255,255,0.92)',
       width : "50%",
      transition: {
         duration: 300, ease : 'backInOut'
      }
     },
});

class InstanceProject extends Component {

  constructor(props) {
    super(props);
    this.state = {
      zindex : 10,
      hovered: false,
      isChanging : false,
      showPopup:false,
    };
  }

  select = () => {
    console.log('selected')
    if(this.state.isChanging == false){
      this.setState({
        zindex : 1,
        hovered: true,
      })
    }else{
        setTimeout(() => {this.setState({
          zindex : 1,
          hovered: true,
        })}, 100 )
    }
  }

  leave = () => {
    console.log('Deselected')
      this.setState({
        isChanging : true,
        zindex : 10,
        hovered: false,
    })
    setTimeout(() => {this.setState({  isChanging : false})}, 100 )
  }

  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup,
      hovered: false,
    });
  }



  render() {

    return (
      <div>
        {this.state.showPopup ?
          <ScrollLock>
            <Popup text='Close Me' closePopup={this.togglePopup}  content={this.props.content} titre={this.props.titre} date={this.props.date} download={this.props.download} open={this.props.open}  src={this.props.source}/>
          </ScrollLock>
          : null
        }

        <div onMouseOver={this.select} onMouseLeave={this.leave} style={{fontFamily: 'codebold', width:300, height : 300, margin:0, padding:0,  overflow : 'hidden', zIndex: 4, cursor :'pointer', backgroundColor:'rgba(1,1,1,0)', borderWidth:0, boxShadow: '5px 5px 3px 0 rgba(0, 0, 0, 0.5)', margin:15, display:"flex", flexDirection:"column", justifyContent:"flex-start", alignItems:"center", position:"relative"}} onClick={this.togglePopup}>



          <Description pose={this.state.hovered ? "hovered" : "idle"} style={{position:'absolute', top:0, left:0, zIndex:99, textAlign:'left',height:"100%", paddingTop:20}}>
          {this.state.hovered ?
            <div style={{fontFamily:'FuturaBT', fontSize:15, width : 120, marginLeft:10}}>
              <strong>{this.props.type}
              </strong><br/>
              {this.props.description}
          </div> : null }
          </Description>
          <Zoom pose={this.state.hovered ? "hovered" : "idle"} style={{width:'100%', height:'100%', zIndex: 1, backgroundImage: "url("+ this.props.src +")", backgroundSize: 'cover', flexDirection : 'column', justifyContent : 'space-between', overflow : 'hidden'}}>
          </Zoom>
          <div style={{width: '100%', color: this.props.color, backgroundColor:"rgba(200,200,200,1)", paddingTop:2, fontSize : 18, textAlign:'left', zIndex:100, textAlign:"center"}}>
              {this.props.titre}
          </div>

        </div>
      </div>

    )
  }

}

export default InstanceProject;
