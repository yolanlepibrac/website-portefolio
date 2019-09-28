import React, { Component } from 'react';
import posed from 'react-pose';
import { Document, Page } from "react-pdf";
import CV from '../assets/pdf/CV_YolanPibrac.pdf';

const Pos = posed.div({
    idle: {
      'width':'0%',
      'height':'0%',
      'top':'0%',
      'left':'0%',
      transition: {
        duration: 1000,
        ease: 'linear'
      }
     },
    hovered: {
      'width':'80%',
      'height':'80%',
      'top':'10%',
      'left':'10%',
      transition: {
        duration: 300,
        ease: 'easeOut'

      }
     },
});





class PopupArduino extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  afficherTitre = () => {
    this.setState({
      affichageTitre:true,
    })
  }

  cacherTitre = () =>{
    this.setState({
      affichageTitre:false,
    })
  }


  render() {

    return (
      <div style={{width: '100%', marginLeft : '0%',  height:'100%', backgroundColor: 'rgba(245,245,245, 1)', overflowY: 'scroll', borderWidth:0, borderColor:'#00173d', borderStyle:'solid', display:'flex', flexDirection:'column', flex:1}}>
        <div onMouseOver={this.afficherTitre} onMouseLeave={this.cacherTitre}>
          {this.state.affichageTitre ?
            <div  style={{fontSize:30, fontFamily:'lemonmilk', color:'black', backgroundColor:'rgba(255,255,255, 0.5)', position:'absolute', width:'100%'}}>
              <div style={{marginRight:20}}>MICRO CONTROLEUR
              </div>
            </div> : null
          }

          <div>
            <div style={{cursor:'pointer',  marginBottom:0, width:'100%', height:550,  backgroundImage: "url("+ require('../assets/images/projets/10_arduino/view2.png') +")", backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center top'}}
                  onClick={()=> window.open(require('../assets/images/projets/10_arduino/view2.png'), "_blank")}>
            </div>
          </div>
        </div>

        <div>
          <div style={{  marginBottom:20, width:'100%', marginBottom:20,  textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify', display:'flex', flexDirection:'row'}}>
            <div style={{ width :'40%',  fontSize:15, margin:'5%', display:'flex', alignItems:'center',justifyContent:'center'}}>
              <div>Ayant la curiosité d'apprendre l'utilisation d'un micro-controleur,
                  j'ai utilisé un arduino pour créer différents mécanismes.
                  J’ai mené des essais allant d’un simple clignotement de
                  LED, à la réalisation de schéma plus complexes, utilisants,
                  moteurs, servo-moteurs, potentiomètres, interupteurs, etc...
                </div>
            </div>
            <div style={{cursor : 'pointer', width:'45%', height:300, margin:'2.5%', backgroundImage: "url("+ require('../assets/images/projets/10_arduino/view1min.jpg') +")", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}}
                  onClick={()=> window.open(require('../assets/images/projets/10_arduino/view1min.jpg'), "_blank")}>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

let styles = {
    HomeMiddle: {
        backgroundColor : 'rgba(255,255,255,1)',

    },
}

export default PopupArduino;
