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





class PopupCampus extends React.Component {

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
              <div style={{marginRight:20}}>ETUDES TECHNIQUES
              </div>
            </div> : null
          }

          <div>
            <div style={{cursor:'pointer',  marginBottom:0, width:'100%', height:550,  backgroundImage: "url("+ require('../assets/images/projets/6_inge/amphi.jpg') +")", backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center top'}}
                  onClick={()=> window.open(require('../assets/images/projets/6_inge/amphi.jpg'), "_blank")}>
            </div>
          </div>
        </div>

        <div>
          <div style={{  marginBottom:20, width:'100%', marginBottom:20,  textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify', display:'flex', flexDirection:'row'}}>
            <div style={{ width :'40%',  fontSize:15, margin:'5%', display:'flex', alignItems:'center',justifyContent:'center'}}>
              <div>Ces quatre projets d’ingénierie m’ont fait aborder le projet architectural suivant un angle technique : structure, thermique et acoustique.
              L’utilisation de logiciels techniques nécessite de développer une vision différente des contraintes intrinsèques à la production architecturale.
              </div>
            </div>
          </div>
        </div>

        <div  style={{fontSize:30, fontFamily:'lemonmilk', color:'black', backgroundColor:'rgba(255,255,255, 0)', width:'100%', textAlign:'center'}}>
          <div style={{marginRight:20}}>ACOUSTIQUE
          </div>
        </div>

        <div>
          <div style={{ display : 'flex', flexDirection : 'row', flex:1, marginBottom:20, minHeight:300, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div style={{width: 500, height:200, fontSize:15, margin:20, display:'flex', alignItems:'center',}}>
              <div>L’amphithéâtre Freyssinet à l’INSA, est la principale salle de cours du département Génie Civil et Urbanisme. A partir des caractéristiques de cet amphithéâtre,
              j’ai effectué une étude acoustique ainsi que le dimensionnement d’une Centrale de Traitement d’Air (CTA) opérationnelle, afin de comprendre les enjeux de son comportement thermique et acoustique.
              L’étude acoustique du bâtiment est réalisée à l’aide du logiciel CATT-acoustic. Là aussi, les hypothèses sont définies à l’avance : les matériaux de parement des faces intérieures du bâtiment et
              leurs propriétés d’absorption, l’occupation des sièges, les caractéristiques de la source émettrice : une personne parlant à haute voix sur l’estrade (situation dans la pièce et niveau sonore).
              <br/><br/>
              Les caractéristiques de l’amphithéâtre calculées sont : le temps de réverbération, les critères d’acoustique architecturaux RASTI et clarté C-80, la définition D-50 et le niveau de pression.
              </div>
            </div>
            <div style={{cursor : 'pointer', width:'45%', height:200, margin:'2.5%', backgroundImage: "url("+ require('../assets/images/projets/6_inge/coefficientsabsorbsion.png') +")", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}}
                onClick={()=> window.open(require('../assets/images/projets/6_inge/coefficientsabsorbsion.png'), "_blank")}>
            </div>
          </div>
        </div>

        <div>
          <div style={{ display : 'flex', flexDirection : 'row', flex:1, marginBottom:20, minHeight:400, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div style={{cursor : 'pointer', width:'45%', height:400, margin:'2.5%', backgroundImage: "url("+ require('../assets/images/projets/6_inge/rasti.png') +")", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}}
                onClick={()=> window.open(require('../assets/images/projets/6_inge/rasti.png'), "_blank")}>
            </div>
            <div style={{cursor : 'pointer', width:'45%', height:400, margin:'2.5%', backgroundImage: "url("+ require('../assets/images/projets/6_inge/niveaupression.png') +")", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}}
                onClick={()=> window.open(require('../assets/images/projets/6_inge/niveaupression.png'), "_blank")}>
            </div>
          </div>
        </div>


        <div  style={{fontSize:30, fontFamily:'lemonmilk', color:'black', backgroundColor:'rgba(255,255,255, 0)', width:'100%', textAlign:'center'}}>
          <div style={{marginRight:20}}>ETUDE D'UNE CTA
          </div>
        </div>

        <div>
          <div style={{ display : 'flex', flexDirection : 'row', flex:1, marginBottom:20, minHeight:300, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div style={{width: 500, height:200, fontSize:15, margin:20, display:'flex', alignItems:'center',}}>
              <div>La CTA dimensionnée est composée de deux circuits fonctionnant différemment : un pour l’été, l’autre pour l’hiver. Le logiciel CODYBA est utilisé afin d’obtenir les variations des variables étudiées (températures, humidité, puissance latente et sensible) Les hypothèses de calcul sont déterminées à l’avance : géométrie, matériaux, météo, occupation humaine, heures de fonctionnement, seuils de températures et de renouvellement d’air...
                <br/><br/>
                  Le logiciel permet de récupérer les variations des paramètres étudiés (humidité, températures, puissances) pendant les mois de juillet et août (été) et de janvier et février (hiver). Le dimensionnement de la CTA est réalisé pour les valeurs maximales obtenues par la modélisation pour chacune des grandeurs.
              </div>
            </div>
            <div style={{cursor : 'pointer', width:'45%', height:300, margin:'2.5%', backgroundImage: "url("+ require('../assets/images/projets/6_inge/cta.png') +")", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}}
                onClick={()=> window.open(require('../assets/images/projets/6_inge/cta.png'), "_blank")}>
            </div>
          </div>
        </div>

        <div>
          <div style={{ display : 'flex', flexDirection : 'row', flex:1, marginBottom:20, minHeight:500, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div style={{ display : 'flex', flexDirection : 'column', flex:1, marginBottom:20, minHeight:500, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
              <div style={{cursor : 'pointer', width:'100%', height:200, margin:'0%', backgroundImage: "url("+ require('../assets/images/projets/6_inge/temperatureete.png') +")", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}}
                  onClick={()=> window.open(require('../assets/images/projets/6_inge/temperatureete.png'), "_blank")}>
              </div>
              <div style={{cursor : 'pointer', width:'100%', height:200, margin:'0%', backgroundImage: "url("+ require('../assets/images/projets/6_inge/humiditeete.png') +")", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}}
                  onClick={()=> window.open(require('../assets/images/projets/6_inge/humiditeete.png'), "_blank")}>
              </div>
            </div>
            <div style={{cursor : 'pointer', width:'55%', height:650, marginRight:'2.5%', backgroundImage: "url("+ require('../assets/images/projets/6_inge/ctahiver.png') +")", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}}
                onClick={()=> window.open(require('../assets/images/projets/6_inge/ctahiver.png'), "_blank")}>
            </div>
          </div>
        </div>



        <div  style={{fontSize:30, fontFamily:'lemonmilk', color:'black', backgroundColor:'rgba(255,255,255, 0)', width:'100%', textAlign:'center'}}>
          <div style={{marginRight:20}}>DIMENSIONNEMENT D'UNE STRUCTURE METALLIQUE
          </div>
        </div>


        <div>
          <div style={{ display : 'flex', flexDirection : 'row', flex:1, marginBottom:20, minHeight:300, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div style={{width: 500, height:200, fontSize:15, margin:20, display:'flex', alignItems:'center',}}>
              <div>Dans l’objectif de concevoir un hangar industriel constitué par une structure métallique, ce projet s’est déroulé en deux parties distinctes : le dimensionnement entier de la structure puis le calcul des efforts, dans les éléments de contreventement, et leur vérification aux Eurocodes.
                <br/><br/>
                <strong>1) Détermination des actions à l’Eurocode 1</strong><br/>
                -hypothèses de calcul : situation, orientation, dimensions
                -calculs des efforts s’appliquant à la structure (charges permanentes, poids propre, charges d’exploitation, vent et neige)<br/>
                <strong>2) Prédimensionnement de la structure</strong><br/>
                -structure : poutres, poteaux, potelets, lisses, pannes, contreventements
                -bardage métallique<br/>
                <strong>3) Modélisation avec le logiciel Robot</strong><br/>
                -Utilisation du prédimensionnement
                -Application des forces
                -Calcul des efforts dans chaque élément de structure<br/>
                <strong>4) Vérifications des contreventements à l’Eurocode 3 pour :</strong><br/>
                -l’effort normal -l’effort tranchant -la flexion simple -la flexion composée
                -l’interaction entre moment fléchissant et effort tranchant
                -la flexion déviée -la flèche -la résistance au feu
                Les sections ne satisfaisant pas l’une des vérifications sont alors redimensionnées et vérifiées à nouveau.
              </div>
            </div>
            <div style={{cursor : 'pointer', width:'45%', height:400, margin:'2.5%', backgroundImage: "url("+ require('../assets/images/projets/6_inge/charpente3d.jpg') +")", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}}
                onClick={()=> window.open(require('../assets/images/projets/6_inge/charpente3d.jpg'), "_blank")}>
            </div>
          </div>
        </div>


        <div>
          <div style={{ display : 'flex', flexDirection : 'row', flex:1, marginBottom:20, minHeight:500, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div style={{cursor : 'pointer', width:'30%', height:700, marginRight:'2.5%', backgroundImage: "url("+ require('../assets/images/projets/6_inge/poutres.png') +")", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}}
                onClick={()=> window.open(require('../assets/images/projets/6_inge/poutres.png'), "_blank")}>
            </div>
            <div style={{ display : 'flex', flexDirection : 'column', flex:1, marginBottom:20, minHeight:500, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
              <div style={{cursor : 'pointer', width:500, height:300, margin:'0%', backgroundImage: "url("+ require('../assets/images/projets/6_inge/barres.png') +")", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}}
                  onClick={()=> window.open(require('../assets/images/projets/6_inge/barres.png'), "_blank")}>
              </div>
              <div style={{cursor : 'pointer', width:500, height:300, margin:'0%', backgroundImage: "url("+ require('../assets/images/projets/6_inge/modelisation_robot.png') +")", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}}
                  onClick={()=> window.open(require('../assets/images/projets/6_inge/modelisation_robot.png'), "_blank")}>
              </div>
            </div>

          </div>
        </div>


        <div  style={{fontSize:30, fontFamily:'lemonmilk', color:'black', backgroundColor:'rgba(255,255,255, 0)', width:'100%', textAlign:'center'}}>
          <div style={{marginRight:20}}>ETUDE D'UN PLANCHER EN BETON
          </div>
        </div>



        <div>
          <div style={{ display : 'flex', flexDirection : 'row', flex:1, marginBottom:20, minHeight:300, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div style={{width: 500, height:200, fontSize:15, margin:20, display:'flex', alignItems:'center',}}>
              <div>Ce projet présente l’étude du plancher en béton de l’étage d’un bâtiment, dans le cas de deux chargements différents. J’ai étudié les déformations et les contraintes internes afin de dimensionner l’épaisseur du plancher.<br/>
                  <strong>Hypothèses</strong><br/>
                  -géométrie
                  -matériaux et caractéristiques physiques
                  -hypothèses générales de la théorie des poutres et de la théorie des plaques
                  -chargements
                  -conditions d’appui

                  <strong>Calculs</strong><br/>
                  Les calculs sont réalisés à l’Etat Limite Ultime (ELU)

                  <strong>Méthode de Navier</strong><br/>
                  Décomposition du problème en séries de Fourier puis résolution
                  informatique sous MATLAB
                  Méthode des différences finies
                  Résolution de la flèche par Laplaciens successifs,
                  après mise en place d’un maillage, et résolution
                  informatique sous MATLAB
                  Méthode des éléments finis
                  Résolution informatique sous CAST3M.
              </div>
            </div>
            <div style={{cursor : 'pointer', width:'45%', height:300, margin:'2.5%', backgroundImage: "url("+ require('../assets/images/projets/6_inge/plaque.png') +")", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}}
                onClick={()=> window.open(require('../assets/images/projets/6_inge/plaque.png'), "_blank")}>
            </div>
          </div>
        </div>

        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:500, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/6_inge/moments.png')} onClick={()=> window.open(require('../assets/images/projets/6_inge/moments.png'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
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

export default PopupCampus;
