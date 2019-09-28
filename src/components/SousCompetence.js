import React, { Component } from 'react';
import posed from 'react-pose';



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
      <div style={{"width":"100%", marginTop: 10, display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', textAlign:'left'}}>
        {this.props.booleenTitre?
          <div style={{fontFamily: 'codebold', fontSize : 22, width : 300, color : 'rgba(226, 74, 115,1)'}}>
            {this.props.titre}
          </div>
        :null}
        <div style={{"width" : "100%",fontSize:20}}>
          {this.props.content}
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
