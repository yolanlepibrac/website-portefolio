import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import posed from 'react-pose';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { tween } from "popmotion";

const HeightChange = posed.div({
    idle: {
      height: 40,
      backgroundColor : 'rgba(255,255,255,0)',
      transition: {
        duration: 400,
        ease: 'linear'
      }
     },
    hovered: {
      height: 40,
      backgroundColor : 'rgba(255,255,255,1)',
      transition: {
        duration: 200,
        type: 'spring',
        stiffness: 150
      }
     },
});

const TextHeightChange = posed.div({
    idle: {
      marginTop: -150,
      transition: {
        duration: 400,
        ease: 'linear'
      }
     },
    hovered: {
      marginTop: 40,
      transition: {
        duration: 200,
        type: 'spring',
        stiffness: 150
      }
     },
});


class BoutonMenuContact extends React.Component {

  componentDidMount(){

  }

  constructor(props) {
    super(props);
    this.state = {
      text : "",
      backgroundColor :'rgba(0,0,0,0)',
      srcLogo : this.props.src,
      height : 40,
      marginTop : 0,
      borderWidth : 0,
      hovering : false,
    };
  }



  onHover = () => {
    this.setState({
      text : this.props.text,
      srcLogo : this.props.src2,
      borderWidth : 1,
      hovering : true,
    })
  }

  leave = () => {
    this.setState({
      text : "",
      srcLogo : this.props.src,
      borderWidth : 0,
      hovering : false,
    })
  }






  render() {



    return (
      <div style={styles.placement}>
          <button style={styles.lienmenu} onClick={this.props.lien} onMouseEnter={this.onHover} onMouseLeave={this.leave}>
                <HeightChange pose={this.state.hovering ? "hovered" : "idle"} style={{
                  height : 40,
                  backgroundImage: "url("+ this.state.srcLogo +")",
                  backgroundSize: "25px 25px",
                  backgroundPosition: "8px 5px",
                  overflow: 'visible',
                  backgroundRepeat : "no-repeat",
                  width : 40,
                  position : 'fixed',
                  top:9,
                  borderWidth: this.state.borderWidth,
                  borderColor: 'black',
                  borderRadius : 20,
                  borderStyle : 'solid',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  margin : 0,
                  padding : 0}}>
                </HeightChange>
                <TextHeightChange pose={this.state.hovering ? "hovered" : "idle"} style={{
                  position : 'fixed',
                  top:9,
                  marginLeft : 13,
                  flexDirection:'column',}}>
                    <div style={{fontSize:18, flex:1, marginTop : this.props.marginTop,}}>
                      {this.state.text}
                    </div>
                </TextHeightChange>
          </button>
      </div>
    )
  }
}

let styles = {
    placement: {
      display: 'flex',
      flexDirection: 'raw',
      justifyContent: 'center',
      width:  60,
      marginTop: 8,
      padding: 0,
      borderStyle: 'solid',
      borderWidth: 0,
      borderColor: 'black',
    },
    lienmenu : {
      display: 'flex',
      flex : 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
      width:  40,
      height : 40,
      margin: 0,
      padding: 0,
      "borderRadius": "50%",
      borderStyle: 'solid',
      borderWidth: 0,
      borderColor: 'black',
      cursor : 'pointer',
      backgroundColor : 'rgba(0,0,0,0)',
      overflow: 'visible',
      "outline": "none",
    },

}

export default BoutonMenuContact;
