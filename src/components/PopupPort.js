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





class PopupPort extends React.Component {

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
              <div style={{marginRight:20}}>40°38'07" N 22°55'47" E
              </div>
            </div> : null
          }
          <div>
            <div style={{cursor:'pointer',  marginBottom:0, width:'100%', height:550,  backgroundImage: "url("+ require('../assets/images/projets/4_port/pers6.jpg') +")", backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center top'}}
                  onClick={()=> window.open(require('../assets/images/projets/4_port/pers6.jpg'), "_blank")}>
            </div>
          </div>
        </div>

        <div>
          <div style={{  marginBottom:20, width:'100%', marginBottom:20,  textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify', display:'flex', flexDirection:'row'}}>
            <div style={{ width :'40%',  fontSize:15, margin:'5%', display:'flex', alignItems:'center',justifyContent:'center'}}>
              <div>Le port de Thessalonique est le deuxième plus grand port de marchandises de Grèce, après le port du Pirée. Il constitue une passerelle majeure pour l’arrière-pays balkanique et l’Europe du Sud-Est,
              et est composé de 4 différents types de terminaux : Container, Cargo, Oil & Gas et le terminal pour croisières. Il apparait comme un paysage singulier, entremêlant bâtiments industriels, entrepôts, grues,
              et gigantesques bateaux.
                  <br/><br/>
                  Tout proche du centre-ville, ce port est voué à délaisser son statut de zone industrielle pour devenir un espace accueillant, ouvert aux habitants.
                  Ce projet ouvre une voie à l’appropriation de ce lieu fort, par la création d’un parc multi usages. Trois promenades, passant au travers, sur, ou au-dessus de l’eau,
                  dans une matérialité et des dimensions peu communes, intrinsèques au port, plongent l’habitant au cœur d’une expérience sensorielle, par la redécouverte de cette zone industrielle.
              </div>
            </div>
            <div style={{cursor:'pointer', width:'45%', height:400, margin:'2.5%', backgroundImage: "url("+ require('../assets/images/projets/4_port/planmasse1.jpg') +")", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}}
                onClick={()=> window.open(require('../assets/images/projets/4_port/planmasse1.jpg'), "_blank")}>
            </div>
          </div>
        </div>

        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:500, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/4_port/analyse.jpg')} onClick={()=> window.open(require('../assets/images/projets/4_port/analyse.jpg'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
            </div>
          </div>
        </div>

        <div>
          <div style={{ display : 'flex', flexDirection : 'row', flex:1, marginBottom:20, minHeight:400, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div style={{width: 500, height:350, fontSize:15, margin:20, display:'flex', alignItems:'center',}}>
              <div>Depuis le port, on aperçoit le centre historique sur les hauteurs de la ville. Les éléments marquant de ce port, sont la démesure des échelles, bien supérieures à celle de l’homme,
              ainsi que les matériaux industriels qui le composent.
                  Le concept principal se base sur la matière, les dimensions et les flux, humains et matériels, qui dessinent le port, pour offrir une perspective différente de l’environnement dans lequel il s’intègre. <br/>
                  La formalisation de l’expérience du lieu se fait par la création de trois promenades calquées sur les flux principaux. Ces chemins ont un point de départ différent,
                  mais résultent d’une même courbe ayant un point de croisement commun, situé à la limite entre la terre et la mer. Chaque promenade offre une expérience différente :
                  une direction singulière, sous, sur, et au-dessus de l’eau et au travers d’éléments de surfaces verticales, aux motifs alternatifs, utilisées comme obstacles visuels.
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:500, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/4_port/coupes.jpg')} onClick={()=> window.open(require('../assets/images/projets/4_port/coupes.jpg'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
            </div>
          </div>
        </div>


        <div>
          <div style={{ display : 'flex', flexDirection : 'row', flex:1, marginBottom:20, minHeight:400, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div style={{width: 500, height:350, fontSize:15, margin:20, display:'flex', alignItems:'center',}}>
              <div>En plus des promenades, cet aménagement multi usages comprend piscines, équipements sportifs, zones de relaxation, et un bâtiment accueillant des commerces,
              les équipements liés à la piscine, un restaurant, et une salle d’exposition.<br/><br/>
              La présence de l’eau est omniprésente dans la composition de l’expérience, mais aussi dans le reste du projet. Un canal amène la mer au centre du projet, pour encadrer le bâtiment.
              Au Sud-Est du projet, l’avancé progressive du sol dans l’eau adoucit la frontière physique entre les terres et la mer.

              </div>
            </div>
          </div>
        </div>

        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:500, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/4_port/planmasse2.jpg')} onClick={()=> window.open(require('../assets/images/projets/4_port/planmasse2.jpg'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
            </div>
          </div>
        </div>

        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:500, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/4_port/pers3.jpg')} onClick={()=> window.open(require('../assets/images/projets/4_port/pers3.jpg'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
            </div>
          </div>
        </div>

        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:500, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/4_port/pers4.jpg')} onClick={()=> window.open(require('../assets/images/projets/4_port/pers4.jpg'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
            </div>
          </div>
        </div>

        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:500, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/4_port/pers5.jpg')} onClick={()=> window.open(require('../assets/images/projets/4_port/pers5.jpg'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
            </div>
          </div>
        </div>

        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:500, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/4_port/pers2.jpg')} onClick={()=> window.open(require('../assets/images/projets/4_port/pers2.jpg'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
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

export default PopupPort;
