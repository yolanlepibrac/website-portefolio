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





class PopupResidences extends React.Component {

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
              <div style={{marginRight:20}}>THE GOOD LIFE
              </div>
            </div> : null
          }

          <div>
            <div style={{cursor:'pointer',  marginBottom:0, width:'100%', height:550,  backgroundImage: "url("+ require('../assets/images/projets/3_residences/nightscene.jpg') +")", backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center top'}}
                  onClick={()=> window.open(require('../assets/images/projets/3_residences/nightscene.jpg'), "_blank")}>
            </div>
          </div>
        </div>

        <div>
          <div style={{  marginBottom:20, width:'100%', marginBottom:20,  textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify', display:'flex', flexDirection:'row'}}>
            <div style={{ width :'40%',  fontSize:15, margin:'5%', display:'flex', alignItems:'center',justifyContent:'center'}}>
              <div>Au Nord du port de Thessalonique, une vaste zone est laissée à l’abandon depuis de nombreuses années : bureaux vides, commerces abandonnés ou désertés, logements délabrés... Autrefois lieu de divertissement et de débauche pour les marins de passage, cette zone devrait aujourd’hui, retrouver une vitalité, grâce à sa proximité au centre-ville, et à la construction du métro.
              <br/><br/>
              Le projet répond à ce besoin de renouvellement par une approche très pragmatique : la mise en valeur de l’espace, la prise en compte de son potentiel et de ses futures dynamiques, ainsi que la diversité et la mixité des usages proposés.
              </div>
            </div>
            <div style={{cursor : 'pointer', width:'45%', height:400, margin:'2.5%', backgroundImage: "url("+ require('../assets/images/projets/3_residences/planmasse.jpg') +")", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}}
                  onClick={()=> window.open(require('../assets/images/projets/3_residences/planmasse.jpg'), "_blank")}>
            </div>
          </div>
        </div>

        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:800, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/3_residences/plan1.jpg')} onClick={()=> window.open(require('../assets/images/projets/3_residences/plan1.jpg'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
            </div>
          </div>
        </div>

        <div>
          <div style={{ display : 'flex', flexDirection : 'row', flex:1, marginBottom:20, minHeight:400, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div style={{width: 500, height:350, fontSize:15, margin:20, display:'flex', alignItems:'center',}}>
              <div>Le projet s’inscrit dans un contexte où les espaces verts sont rares et pas entretenus. Pour pallier à ce manque, les bâtiments sont intégrés dans un vaste espace public,
              constitué en grande partie de zones vertes. La piétonisation de la rue devant l’immeuble de bureaux crée un cadre urbain naturel et agréable.
              Le traitement du sol est réalisé par un maillage dont les éléments sont faits de différents matériaux : herbe, béton, pierre, carrelage...
              L’agencement de ces éléments détermine les zones de l’espace public, sans créer de limites franches entre elles.<br/><br/>

              Le projet se compose de deux bâtiments, l’un principalement utilisé par les étudiants, l’autre pour les utilisateurs mixtes.
              La configuration volumétrique du bâtiment répond à la forme ronde de l’immeuble de bureaux existant, pour créer un espace public central.
              Un deuxième jardin, plus petit, placé de l’autre côté du volume construit, est dédié au bâtiment étudiant. Le volume principal est découpé en deux,
              pour assurer une liaison entre le vaste espace public à l’Est du projet et l’entrée de la technopole KEK à l’Ouest.<br/><br/>

              Le premier bâtiment, dédié aux étudiants, accueille des logements au premier et deuxième étage. Le rez-de-chaussée comprend une bibliothèque,
              un espace de travail et un restaurant universitaire. Le deuxième bâtiment, situé au nord a une fonction publique et contient une salle polyvalente,
              plusieurs magasins de réparation de véhicules (activité caractéristique du quartier à l’heure actuelle), un supermarché, un café et une salle de sport,
              de danse et de yoga.
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:500, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/3_residences/coupes.png')} onClick={()=> window.open(require('../assets/images/projets/3_residences/coupes.png'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
            </div>
          </div>
        </div>

        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:800, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/3_residences/facades.jpg')} onClick={()=> window.open(require('../assets/images/projets/3_residences/facades.jpg'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
            </div>
          </div>
        </div>


        <div>
          <div style={{ display : 'flex', flexDirection : 'row', flex:1, marginBottom:20, minHeight:400, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div style={{width: 500, height:350, fontSize:15, margin:20, display:'flex', alignItems:'center',}}>
              <div><strong>Circulations</strong><br/>

                  Au milieu de chaque bâtiment, les circulations verticales sont marquées par deux façades entièrement vitrées, décalées par rapport au volume principal, pour guider l’accès aux bâtiments.
                  <br/><br/>
                  <strong>Matérialité</strong><br/>

                  Les deux bâtiments sont réalisés en béton apparent, à l’intérieur comme à l’extérieur. Pour cela, la solution constructive adoptée est une technique nouvelle et innovante: le béton GBE. Solution simple, rapide et peu coûteuse comparée aux méthodes usuelles. Une couche de béton fait office de structure, une deuxième, plus fine, encadre l’isolation au centre. Cette solution a aussi l’avantage d’assurer une bonne qualité environnementale grâce à l’isolation et la durabilité qu’elle garantit.

              </div>
            </div>
          </div>
        </div>

        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:900, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/3_residences/detailplan1.png')} onClick={()=> window.open(require('../assets/images/projets/3_residences/detailplan1.png'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
            </div>
          </div>
        </div>

        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:500, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/3_residences/balconyscene.jpg')} onClick={()=> window.open(require('../assets/images/projets/3_residences/balconyscene.jpg'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
            </div>
          </div>
        </div>

        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:500, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/3_residences/libraryscene.jpg')} onClick={()=> window.open(require('../assets/images/projets/3_residences/libraryscene.jpg'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
            </div>
          </div>
        </div>

        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:500, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/3_residences/renderinfinal.jpg')} onClick={()=> window.open(require('../assets/images/projets/3_residences/renderinfinal.jpg'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
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

export default PopupResidences;
