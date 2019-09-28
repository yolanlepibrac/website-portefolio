import React, { Component } from 'react';
import posed from 'react-pose';
import SousCompetence from './SousCompetence';



class Competence extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount = () => {

  }


  render() {
    return (
      <div style={{ marginTop : 40,   display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'start', textAlign:'left'}}>
        <div style={{"width":"100%",  flexDirection: 'row', display:'flex', justifyContent:'start', alignItems:'start'}}>

          <div style={{width : 50, fontSize:4, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'start', textAlign:'center'}}>
            <div style={{width : 20, height:20, marginTop: 5, backgroundColor:'rgba(0,0,0,0)', borderRadius : 20, borderStyle: 'solid', borderColor:'rgba(226, 74, 115,1)', borderWidth:2}}/>
          </div>
          <div style={{"width":"100%",  paddingRight : 10, paddingLeft : 10, fontSize:20, display:'flex', flexDirection:'column'}}>
            <div style={{width : 300,fontFamily: 'codebold', fontSize : 22, }}>
              {this.props.titre}
            </div>
            <SousCompetence booleenTitre={this.props.booleenTitre} titre={this.props.competence1titre} content={this.props.competence1content}/>
            <SousCompetence  booleenTitre={this.props.booleenTitre} titre={this.props.competence2titre} content={this.props.competence2content}/>
            <SousCompetence  booleenTitre={this.props.booleenTitre} titre={this.props.competence3titre} content={this.props.competence3content}/>
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

export default Competence;
