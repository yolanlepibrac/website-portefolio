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





class PopupParametrisation extends React.Component {

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
                <div style={{marginRight:20}}>CREATION D'UNE BASE DE DONNEES DE PARAMETRISATION 3D
                </div>
              </div>
              <div  style={{marginLeft:10, cursor:'pointer', fontFamily:'FuturaBT', color:'white', backgroundColor:'rgba(0,0,0,0.5)', position:'absolute', textAlign:'left', fontSize:15, borderRadius:5, marginTop:10, borderColor:'black', borderWidth:1, borderStyle:'solid'}}>
                <div onClick={()=> window.open('http://yolan-pibrac.com/parametrisation/', "_blank")} style={{marginLeft:10,marginRight:10}}>http://yolan-pibrac.com/parametrisation/
                </div>
              </div>
            </div> : null
          }

          <div>
            <div style={{cursor:'pointer',  marginBottom:0, width:'100%', height:550,  backgroundImage: "url("+ require('../assets/images/projets/9_parametrisation/view1b.png') +")", backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center top'}}
                  onClick={()=> window.open(require('../assets/images/projets/9_parametrisation/view1b.png'), "_blank")}>
            </div>
          </div>
        </div>

        <div>
          <div style={{  marginBottom:20, width:'100%', marginBottom:20,  textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify', display:'flex', flexDirection:'row'}}>
            <div style={{ width :'40%',  fontSize:15, margin:'5%', display:'flex', alignItems:'center',justifyContent:'center'}}>
              <div>Dans l'objectif d'atteindre une production générative aléatoire
              par prolifération de motifs ornementaux, cet outil vise à produire
              la base de donnée qui répertorie les degrés de liberté des motifs.
              Partant d'un motif de base, n'importe quelle forme tridimensionelle,
              importée en .obj, cet outil permet la sélection des vertices de l'objets
              (ses sommets), puis, le choix d'un nombre illimité de transformations
              (rotation - translation - échelle), à appliquer. Après avoir réalisé une succession d'ensemble
              de transformations à une ou plusieurs vertices, il peut valider l'ensemble
              de ces actions comme un degré de liberté du motif.
              <br/><br/>
              En enchainant plusieurs degré de liberté, stockées dans un fichier .txt
              l'utilisateur pourra ensuite appliquer son schéma dégénératif au motif :
              un facteur aléatoire sera appliquéé pour chaque degré de liberté, à l'
              ensemble des transformations qui le constitue.
              <div onClick={()=> window.open('http://yolan-pibrac.com/parametrisation/', "_blank")} style={{cursor:'pointer', color:'rgba(101, 8, 214, 1)', marginTop:10}}>  http://yolan-pibrac.com/parametrisation/
              </div>
                </div>
            </div>
            <div style={{cursor:'pointer', width:'45%', height:300, margin:'2.5%', backgroundImage: "url("+ require('../assets/images/projets/9_parametrisation/motif2.png') +")", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}}
                  onClick={()=> window.open(require('../assets/images/projets/9_parametrisation/motif2.png'), "_blank")}>
            </div>
          </div>
        </div>

        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:600, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/9_parametrisation/interface.png')} onClick={()=> window.open(require('../assets/images/projets/9_parametrisation/interface.png'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
            </div>
          </div>
        </div>


        <div>
          <div style={{ display : 'flex', flexDirection : 'row', flex:1, marginBottom:20, minHeight:500, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div style={{cursor : 'pointer', width:'100%', height:500, margin:'0%', backgroundImage: "url("+ require('../assets/images/projets/9_parametrisation/menu1.png') +")", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}}
                onClick={()=> window.open(require('../assets/images/projets/9_parametrisation/menu1.png'), "_blank")}>
            </div>
            <div style={{cursor : 'pointer', width:'100%', height:500, margin:'02.5%', backgroundImage: "url("+ require('../assets/images/projets/9_parametrisation/menu2.png') +")", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}}
                onClick={()=> window.open(require('../assets/images/projets/9_parametrisation/menu2.png'), "_blank")}>
            </div>
          </div>
        </div>

        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:300, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/9_parametrisation/parametrisation1.png')} onClick={()=> window.open(require('../assets/images/projets/9_parametrisation/parametrisation1.png'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
            </div>
          </div>
        </div>

        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:230, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/9_parametrisation/parametrisation2.png')} onClick={()=> window.open(require('../assets/images/projets/9_parametrisation/parametrisation2.png'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
            </div>
          </div>
        </div>

        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:280, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/9_parametrisation/parametrisation3.png')} onClick={()=> window.open(require('../assets/images/projets/9_parametrisation/parametrisation3.png'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
            </div>
          </div>
        </div>

        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:1200, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/9_parametrisation/variations.png')} onClick={()=> window.open(require('../assets/images/projets/9_parametrisation/variations.png'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
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

export default PopupParametrisation;
