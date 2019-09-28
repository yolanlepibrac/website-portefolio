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





class PopupBibliotheque extends React.Component {

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
              <div style={{marginRight:20}}>L'OBSERVATOIRE
              </div>
            </div> : null
          }

          <div>
            <div style={{cursor:'pointer',  marginBottom:0, width:'100%', height:550,  backgroundImage: "url("+ require('../assets/images/projets/2_bibliotheque/perspective_contexte.jpg') +")", backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center top'}}
                  onClick={()=> window.open(require('../assets/images/projets/2_bibliotheque/perspective_contexte.jpg'), "_blank")}>
            </div>
          </div>
        </div>

        <div>
          <div style={{  marginBottom:20, width:'100%', marginBottom:20,  textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify', display:'flex', flexDirection:'row'}}>
            <div style={{ width :'40%',  fontSize:15, margin:'5%', display:'flex', alignItems:'center',justifyContent:'center'}}>
              <div>Cet ouvrage fait suite à un projet de renouvellement urbain, réalisé dans un quartier de Villeurbanne. La mairie projette d’implanter une bibliothèque sur une parcelle située au sud d’un long parc, dessiné autour de l’ancienne gare de Villeurbanne. Le programme est précis : cinq cent livres à entreposer, et pour chaque pièce, une surface au sol et un mobilier prédéfini. Le cahier des charges contient notamment : entrée avec réception, boîte à livre, espaces techniques, coin de consultation rapide, espace informatique de recherche documentaire, salle de présentation, salle d’exposition, tables de travail, ainsi que l’espace principal.<br/><br/>
              La construction de cette bibliothèque propose une mise en valeur de la culture par la construction d’un espace noble, surélevé, qui surplombe le parc pour offrir une connexion visuelle et spirituelle entre la connaissance et le loisir.
              </div>
            </div>
            <div style={{cursor:'pointer', width:'45%', height:300, margin:'2.5%', backgroundImage: "url("+ require('../assets/images/projets/2_bibliotheque/planmasse.jpg') +")", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}}
                  onClick={()=> window.open(require('../assets/images/projets/2_bibliotheque/planmasse.jpg'), "_blank")}>>
            </div>
          </div>
        </div>

        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:800, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/2_bibliotheque/plan1er1.jpg')} onClick={()=> window.open(require('../assets/images/projets/2_bibliotheque/plan1er1.jpg'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
            </div>
          </div>
        </div>

        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:800, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/2_bibliotheque/planrdc1.jpg')} onClick={()=> window.open(require('../assets/images/projets/2_bibliotheque/planrdc1.jpg'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
            </div>
          </div>
        </div>


        <div>
          <div style={{ display : 'flex', flexDirection : 'row', flex:1, marginBottom:20, minHeight:400, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div style={{width: 500, height:350, fontSize:15, margin:20, display:'flex', alignItems:'center',}}>
              <div>Pour mettre en avant la culture, l’espace principal de la bibliothèque s’élève au premier étage, et semble flotter au-dessus du parc.
              L’ensemble des armoires qui composent cet espace sont orientées Nord-Sud. Un gigantesque double vitrage, déployé sur 180° permet une vue plongeante sur le parc,
              tout en limitant l’éclairage directe de la salle pour le confort visuel. Pour accéder à cet espace, l’entrée située en limite sud de la parcelle
              laisse s’échapper deux passerelles jusqu’à la bibliothèque. Ces passerelles montantes accueillent des espaces de travail orientés vers l’intérieur de la bibliothèque.

              C’est là que se trouve un jardin calme, qui, l’été, s’ouvre au public pour permettre la consultation et le travail en extérieur. Sous l’espace principal,
              une structure béton couvre le hall d’exposition, l’espace technique et les bureaux du personnel. L’entrée de la bibliothèque, placée au nord,
              traverse cette structure pour atteindre l’accueil en fond de parcelle. Cette disposition permet de créer un parcours progressif :
              un passage étroit dans la structure béton basse, la traversée du jardin, ouvert et accueillant, puis l’entrée dans le bâtiment et enfin,
              le cheminement le long des passerelles pour atteindre l’espace principal de la bibliothèque.
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:500, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/2_bibliotheque/details.jpg')} onClick={()=> window.open(require('../assets/images/projets/2_bibliotheque/details.jpg'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
            </div>
          </div>
        </div>

        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:400, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/2_bibliotheque/coupebb.jpg')} onClick={()=> window.open(require('../assets/images/projets/2_bibliotheque/coupebb.jpg'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
            </div>
          </div>
        </div>

        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:600, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/2_bibliotheque/view1.jpg')} onClick={()=> window.open(require('../assets/images/projets/2_bibliotheque/view1.jpg'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
            </div>
          </div>
        </div>

        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:600, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/2_bibliotheque/view2.jpg')} onClick={()=> window.open(require('../assets/images/projets/2_bibliotheque/view2.jpg'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
            </div>
          </div>
        </div>

        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:600, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/2_bibliotheque/view3.jpg')} onClick={()=> window.open(require('../assets/images/projets/2_bibliotheque/view3.jpg'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
            </div>
          </div>
        </div>
        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:600, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/2_bibliotheque/view4.jpg')} onClick={()=> window.open(require('../assets/images/projets/2_bibliotheque/view4.jpg'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
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

export default PopupBibliotheque;
