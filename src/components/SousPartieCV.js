import React, { Component } from 'react';
import posed from 'react-pose';



class SousPartieCV extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount = () => {

  }


  render() {
    return (

      <div style={{  marginTop : 20, flexDirection: 'row', display:'flex', justifyContent:'start', alignItems:'start', textAlign:'start'}}>
        <div style={{minWidth : 50, maxWidth : 50, height:50, fontSize:4, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'start'}}>
          <div style={{minWidth : 20, maxWidth : 20, height:20, backgroundColor:'rgba(0,0,0,0)', borderRadius : 20, borderStyle: 'solid', borderColor:this.props.couleur, borderWidth:2}}/>
        </div>
        <div style={{maxWidth : 250, minWidth : 250,  paddingRight : 10, paddingLeft : 10, fontSize:20, display:'flex', flexDirection:'column'}}>
          <div style={{fontFamily: 'codebold', width : 250, fontSize : 20}}>
            {this.props.titre1}
          </div>
          <div style={{fontFamily: 'codebold', color : this.props.couleur, width : 250,}}>
            {this.props.titre2}
          </div>
        </div>
        <div style={{maxWidth : 200, minWidth : 200, fontSize:18, textAlign : 'right'}}>
          {this.props.date}
        </div>
        <div style={{marginLeft: 30,fontSize:18}}>
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

export default SousPartieCV;
