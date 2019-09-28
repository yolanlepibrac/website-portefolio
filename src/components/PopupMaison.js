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


class PopupMaison extends React.Component {

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
              <div style={{marginRight:20}}>SEPT SOUS LE MEME TOIT
              </div>
            </div> : null
          }


          <div>
            <div style={{cursor:'pointer',  marginBottom:0, width:'100%', height:550,  backgroundImage: "url("+ require('../assets/images/projets/1_maison/view2.jpg') +")", backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center top'}}
                  onClick={()=> window.open(require('../assets/images/projets/1_maison/view2.jpg'), "_blank")}>
            </div>
          </div>
        </div>



        <div style={{display : 'flex', flexDirection : 'row', flex:1, marginBottom:20, minHeight:400, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
          <div style={{height:400, fontSize:15, margin:100, display:'flex', alignItems:'center',justifyContent:'center'}}>
            <div>Située dans la banlieue périphérique lyonnaise, au sein d’un quartier visant à être entièrement bâti, cette maison individuelle s’intègre sur une parcelle vide de 30 mètres par 10. Une famille nombreuse de 7 personnes vient y habiter: deux adultes et leurs 4 enfants, dont l’un d’eux, déjà grand, projette de quitter le domicile familial sous peu. Enfin le grand père, bien portant, s’installe avec eux, et souhaite posséder son espace personnel pour profiter de sa retraite. La parcelle est délimitée à l’Ouest par une ruelle, et à l’Est par une allée piétonne arborée. Le Nord et le Sud de la parcelle seront aussi occupés par du logement individuel.<br/><br/>

            Ce projet répond aux contraintes posées par son concept simple, lisible et fonctionnel.
            </div>
          </div>
          <div style={{ backgroundColor:'rgba(0,0,0,0)', height:500, display : 'flex', textAlign:'center', justifyContent:'center', alignItems:'center'}}>
                <img src={require('../assets/images/projets/1_maison/planmasse.png')} onClick={()=> window.open(require('../assets/images/projets/1_maison/planmasse.png'), "_blank")} style={{'height':'60%', cursor : 'pointer'}}/>
          </div>
        </div>


        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:300, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/1_maison/schemas.jpg')} onClick={()=> window.open(require('../assets/images/projets/1_maison/schemas.jpg'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
            </div>
          </div>
        </div>


        <div style={{ display : 'flex', flexDirection : 'row', flex:1, marginBottom:20, minHeight:400, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
          <div style={{width: 700, height:400, fontSize:15, margin:20, display:'flex', alignItems:'center',}}>
            <div><strong>Organisation spatiale</strong><br/>
                Les espaces personnels sont à l’est, séparés des espaces communs par le mur central. Chaque chambre est orientée Sud, avec une large surface vitrée et des brises soleils amovibles.<br/>
                Une unique chambre située dans la partie Ouest, pourra être transformée en pièce de vie, lors du départ de l’aîné.<br/>
                Le cellier, placé directement devant l’entrée, permet d’entreposer la nourriture, et limite l’effort pour décharger les courses.<br/>
                Présence d’une annexe personnelle (mini-salon) dans la chambre du grand-père, afin de garantir sa tranquillité, et son intimité.<br/>
                <br/>
                <strong>Circulations</strong><br/>
                L’accès à l’étage est garanti par 2 escaliers nichés dans les murs de pierre (l’un extérieur et l’autre intérieur).<br/>
                <br/>
                <strong>Structure</strong><br/>
                Le schéma structurel est simple : un mur porteur en béton au nord, et système de poteau-poutre au sud. Paradoxalement, les murs de pierres ne font pas partis de la structure. Ils découpent et dessinent les espaces intérieurs.<br/>
                <br/>
                <strong>Matérialité</strong><br/>
                La charpente et le revêtement sont en bois pour une atmosphère simple et confortable dans des matériaux d’origine naturelle.<br/>
            </div>
          </div>
        </div>


        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:400, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/1_maison/facadesud.jpg')} onClick={()=> window.open(require('../assets/images/projets/1_maison/facadesud.jpg'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
            </div>
          </div>
        </div>

        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:400, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/1_maison/plan1er.png')} onClick={()=> window.open(require('../assets/images/projets/1_maison/plan1er.png'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
            </div>
          </div>
        </div>

        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:400, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/1_maison/planrdc.png')} onClick={()=> window.open(require('../assets/images/projets/1_maison/planrdc.png'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
            </div>
          </div>
        </div>

        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:400, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/1_maison/coupeBB.png')} onClick={()=> window.open(require('../assets/images/projets/1_maison/coupeBB.png'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
            </div>
          </div>
        </div>


        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:500, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/1_maison/view1.jpg')} onClick={()=> window.open(require('../assets/images/projets/1_maison/view1.jpg'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
            </div>
          </div>
        </div>

        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:500, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/1_maison/view3.jpg')} onClick={()=> window.open(require('../assets/images/projets/1_maison/view3.jpg'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
            </div>
          </div>
        </div>

        <div>
          <div style={{display : 'flex', flex:1, marginBottom:20, textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
            <div   style={{width:'100%', height:500, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', textAlign:'justify'}}>
                  <img src={require('../assets/images/projets/1_maison/view4.jpg')} onClick={()=> window.open(require('../assets/images/projets/1_maison/view4.jpg'), "_blank")} style={{'height':'100%', cursor : 'pointer'}}/>
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

export default PopupMaison;
