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





class PopupVariations extends React.Component {

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
        <div onMouseOver={this.afficherTitre} onMouseLeave={this.cacherTitre} >
          {this.state.affichageTitre ?
            <div>
              <div  style={{fontSize:30, fontFamily:'lemonmilk', color:'black', backgroundColor:'rgba(255,255,255, 0.7)', position:'absolute', width:'100%'}}>
                <div style={{marginRight:20}}>ALGORITMIC CONCEPTION | MASS CUSTOMIZATION
                </div>
              </div>
              <div  style={{marginLeft:10, cursor:'pointer', fontFamily:'FuturaBT', color:'white', backgroundColor:'rgba(0,0,0,0.5)', position:'absolute', textAlign:'left', fontSize:15, borderRadius:5, marginTop:10, borderColor:'black', borderWidth:1, borderStyle:'solid'}}>
                <div onClick={()=> window.open('http://yolan-pibrac.com/masscustomisation/', "_blank")} style={{marginLeft:10,marginRight:10}}>http://yolan-pibrac.com/masscustomisation/
                </div>
              </div>

            </div> : null
          }

          <div>
            <div style={{cursor:'pointer',  marginBottom:0, width:'100%', height:550,  backgroundImage: "url("+ require('../assets/images/projets/8_generation/view1.png') +")", backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center top'}}
                  onClick={()=> window.open(require('../assets/images/projets/8_generation/view1.png'), "_blank")}>
            </div>
          </div>
        </div>

        <div>
          <div style={{  marginBottom:20, width:'100%', marginBottom:20,  textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify', display:'flex', flexDirection:'row'}}>
            <div style={{ width :'40%',  fontSize:15, margin:'5%', display:'flex', alignItems:'center',justifyContent:'center'}}>
              <div>Ce projet vise à concrétiser la production de mobilier,
                  par des algorithmes qui schématisent différents processus créatif.
                  En définissant les objets de mobilier par des contraintes
                  spaciales, techniques et ergonomiques, on est capable d'adapter
                  sa composante esthétique grâce à différents patterns.
                  Ces schéma sont des algorithmes qui visent à décrire enrièrement
                  un processus de création (qui s'adapte aux contraintes de l'objets),
                  et non une disposition de matière dans l'espace.<br/><br/>
                  Si les premiers schémas sont simples, d'autres plus complexes
                  ont été mis en place, comme des algorithmes génétiques, permettant
                  de créer les objets par cette méthode de "problem solving".
                  Les objets ne sont alors qu'une solution parmis une infinité
                  de possibilité qui constitue l'ensemble des solutions possible
                  à l'équation apporté par l'ensemble des contraintes.
                  Ce point d'arrivé est issu d'une réflexion sur le potentiel qu'
                  offre l'informatique pour adapter le concept de customisation de masse
                  au domaine du design et de l'architecture.<br/>
                  <div onClick={()=> window.open('http://yolan-pibrac.com/masscustomisation/', "_blank")} style={{cursor:'pointer', color:'rgba(101, 8, 214, 1)', marginTop:10}}>  http://yolan-pibrac.com/masscustomisation/
                  </div>
                </div>
            </div>
            <div style={{cursor:'pointer', width:'45%', height:300, margin:'2.5%', backgroundImage: "url("+ require('../assets/images/projets/8_generation/interface.png') +")", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}}
                  onClick={()=> window.open(require('../assets/images/projets/8_generation/interface.png'), "_blank")}>
            </div>
          </div>
        </div>

        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:600, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/8_generation/mobilier.png')} onClick={()=> window.open(require('../assets/images/projets/8_generation/mobilier.png'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
            </div>
          </div>
        </div>

        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:2000, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/8_generation/tableMultiple.png')} onClick={()=> window.open(require('../assets/images/projets/8_generation/tableMultiple.png'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
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

export default PopupVariations;
