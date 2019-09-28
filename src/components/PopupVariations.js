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
        <div onMouseOver={this.afficherTitre} onMouseLeave={this.cacherTitre}>
          {this.state.affichageTitre ?
            <div>
              <div  style={{fontSize:30, fontFamily:'lemonmilk', color:'black', backgroundColor:'rgba(255,255,255, 0.5)', position:'absolute', width:'100%'}}>
                <div style={{marginRight:20}}>VARIATIONS ET ORNEMENT
                </div>
              </div>
              <div style={{display:'flex', flexDirection:'row', }}>
                <div  style={{width:120, marginLeft:10, cursor:'pointer', fontFamily:'FuturaBT', color:'white', backgroundColor:'rgba(0,0,0, 0.7)', position:'absolute', textAlign:'left', fontSize:15, borderRadius:5, marginTop:10, borderColor:'black', borderWidth:1, borderStyle:'solid'}}>
                  <div onClick={()=> window.open(require('../assets/pdf/Notice_PFE_YolanPibrac.pdf'), "_blank")} style={{marginLeft:10,marginRight:10}}>Notice de PFE
                  </div>
                </div>
                <div  style={{marginLeft:140, cursor:'pointer', fontFamily:'FuturaBT', color:'white', backgroundColor:'rgba(0,0,0, 0.7)', position:'absolute', textAlign:'left', fontSize:15, borderRadius:5, marginTop:10, borderColor:'black', borderWidth:1, borderStyle:'solid'}}>
                  <div onClick={()=> window.open(require('../assets/pdf/Planches_PFE_YolanPibrac.pdf'), "_blank")} style={{marginLeft:10,marginRight:10}}>Planches de PFE
                  </div>
                </div>
              </div>

            </div> : null
          }

          <div>
            <div style={{cursor:'pointer',  marginBottom:0, width:'100%', height:550,  backgroundImage: "url("+ require('../assets/images/projets/7_variations/pers.png') +")", backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center top'}}
                  onClick={()=> window.open(require('../assets/images/projets/7_variations/pers.png'), "_blank")}>
            </div>
          </div>
        </div>

        <div>
          <div style={{  marginBottom:20, width:'100%', marginBottom:20,  textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify', display:'flex', flexDirection:'row'}}>
            <div style={{ width :'40%',  fontSize:15, margin:'5%', display:'flex', alignItems:'center',justifyContent:'center'}}>
              <div>Suite à la rédaction d’un article scientifique sur
                le potentiel qu’offrent le développement des
                nouvelles technologies de l’information et du
                numériques pour la création d’un ornement
                contemporain digitalisé, ce projet vient
                donner une vision futuriste et provocatrice de
                l’utilisation du design génératif.<br/><br/>
                La mise en place de ce processus expérimental,
                par la création d’un outil informatique permet
                la conception d’éléments architecturaux
                ornementaux. Cet outil de conception, codé
                dans un environnement JavaScript, se base
                sur l’import du motif ornemental, l’application
                des variations internes, ainsi que leur
                mémorisation. Puis, il intègre la possibilité
                de matérialiser des éléments concrets, par
                la répétition spatiale du motif, basé sur les
                contraintes dimensionnelles que doit satisfaire
                l’objet.<br/><br/>
                Ce projet se concrétise par la production de
                séries d’objets ornementaux non standard,
                par l’utilisation du processus génératif.
                <div onClick={()=> window.open(require('../assets/pdf/Notice_PFE_YolanPibrac.pdf'), "_blank")} style={{cursor:'pointer', color:'rgba(101, 8, 214, 1)', marginTop:10, width:120}}>Notice de PFE
                </div>
                <div onClick={()=> window.open(require('../assets/pdf/Planches_PFE_YolanPibrac.pdf'), "_blank")} style={{cursor:'pointer', color:'rgba(101, 8, 214, 1)', marginTop:10, width:120}}>Planches de PFE
                </div>
              </div>

            </div>
            <div style={{cursor : 'pointer', width:'45%', height:300, margin:'2.5%', backgroundImage: "url("+ require('../assets/images/projets/7_variations/chaises.png') +")", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}}
                  onClick={()=> window.open(require('../assets/images/projets/7_variations/chaises.png'), "_blank")}>
            </div>
          </div>
        </div>

        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:1000, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/7_variations/colonnes.png')} onClick={()=> window.open(require('../assets/images/projets/7_variations/colonnes.png'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
            </div>
          </div>
        </div>





        <div>
          <div style={{ display : 'flex', flexDirection : 'row', flex:1, marginBottom:20, minHeight:300, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div style={{width: 500, height:350, fontSize:15, margin:20, display:'flex', alignItems:'center',}}>
              <div>Grâce à une prolifération maîtrisée de plusieurs motifs
              ornementaux, l'outil informatique permet la conception
              de différents éléments architecturaux, dont la structure est
              constituée entièrement par les motifs Les chaises sont
              créées à partir des motifs ornementaux de la colonne corinthienne.
              </div>
            </div>
          </div>
        </div>


        <div>
          <div style={{ display : 'flex', flexDirection : 'row', flex:1, marginBottom:20, minHeight:800, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div style={{cursor : 'pointer', width:'45%', height:800, margin:'2.5%', backgroundImage: "url("+ require('../assets/images/projets/7_variations/motifs.png') +")", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}}
                onClick={()=> window.open(require('../assets/images/projets/7_variations/motifs.png'), "_blank")}>
            </div>
            <div style={{cursor : 'pointer', width:'45%', height:800, margin:'2.5%', backgroundImage: "url("+ require('../assets/images/projets/7_variations/maquette.png') +")", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}}
                onClick={()=> window.open(require('../assets/images/projets/7_variations/maquette.png'), "_blank")}>
            </div>
          </div>
        </div>





        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:2000, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/7_variations/frontontous.png')} onClick={()=> window.open(require('../assets/images/projets/7_variations/frontontous.png'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
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
