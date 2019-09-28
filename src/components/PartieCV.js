import React, { Component } from 'react';
import posed from 'react-pose';
import SousPartieCV from './SousPartieCV';



class PartieCV extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = () => {

  }


  render() {
    return (
      <div style={{width: this.props.width, marginTop : 20, display:'flex', flexDirection:'column', textAlign:'left'}}>
        <div style={{'width':'100%',  flexDirection: 'row', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <div style={{width : 50, height:50, fontSize:4, display:'flex', justifyContent:'center', alignItems:'center'}}>
            <img style={{width : 50, height:50, borderRadius:25, backgroundColor:this.props.couleur}} src={this.props.src} alt="LogoFormationW.png" />
          </div>
          <div style={{fontFamily: 'codelight', 'minWidth' : this.props.poidsTitre, paddingRight : 10, paddingLeft : 10, fontSize:35}}>
            {this.props.titre}
          </div>
          <div style={{'width' : '100%', 'height' : '100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <div style={{'width' : '100%', height : 1, backgroundColor:'rgba(50,50,50,1)'}}>
            </div>
          </div>
        </div>

        <div style={{'width':'100%', display:'flex', flexDirection: 'column'}}>
          {this.props.nombrePartie>0?
          <SousPartieCV titre1={this.props.titre1Partie1} titre2={this.props.titre2Partie1} date={this.props.datePartie1} content={this.props.contentPartie1} couleur={this.props.couleur}></SousPartieCV>:null}
          {this.props.nombrePartie>1?
          <SousPartieCV titre1={this.props.titre1Partie2} titre2={this.props.titre2Partie2} date={this.props.datePartie2} content={this.props.contentPartie2} couleur={this.props.couleur}></SousPartieCV>:null}
          {this.props.nombrePartie>2?
          <SousPartieCV titre1={this.props.titre1Partie3} titre2={this.props.titre2Partie3} date={this.props.datePartie3} content={this.props.contentPartie3} couleur={this.props.couleur}></SousPartieCV>:null}
          {this.props.nombrePartie>3?
          <SousPartieCV titre1={this.props.titre1Partie4} titre2={this.props.titre2Partie4} date={this.props.datePartie4} content={this.props.contentPartie4} couleur={this.props.couleur}></SousPartieCV>:null}
          {this.props.nombrePartie>4?
          <SousPartieCV titre1={this.props.titre1Partie5} titre2={this.props.titre2Partie5} date={this.props.datePartie5} content={this.props.contentPartie5} couleur={this.props.couleur}></SousPartieCV>:null}

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

export default PartieCV;
