import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import posed from 'react-pose';



class NavContact extends Component {


  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    return(
      <div style={{flex: 1, marginLeft:20, marginTop:30}}>
        <div style={{fontSize:18, textAlign:'center', marginLeft:-100}}> C O N T A C T</div>
        <div><br/>
          email : yolan.pibrac@gmail.com<br/><br/>
          phone : +33 6 14 74 29 26<br/><br/>
          adress : 11 rue Valadon 75 007 Paris<br/><br/>
        </div>
        <div style={{fontSize:18, textAlign:'center', marginLeft:-100, marginTop:0}}>A B O U T</div>
        <div style = {{marginRight:120, textAlign:'justify'}}><br/>
        Engineer gratuated in INSA Lyon, my multidisciplinary profile and my strong interest in digital technologies pushed me to practice IT development, for personal, academic and professional projects.
        Nowaday responsible of database's creation in civil engineering, I am looking to devote more time to development by joining a dynamic company to work as a developer.<br/><br/><br/>
        For any other infomations, please contact me on :
        </div>
        <div style = {{marginLeft:25, width:200, flexDirection:'column', alignItems:'center', justifyContent:'center', flexDirection:'column', alignItems:'center'}}><br/>
          <a  href="mailto:yolan.pibrac@gmail.com" target="_blank" style={{textDecoration: 'none', color:'black', backgroundColor:'blue', flexDirection:'column', alignItems:'center'}} >
            <div style={{flex:1 , flexDirection:'column', alignItems:'center', textAlign:'center'}}>
              <p  style={{flex:1, height : 30, backgroundColor : 'rgba(200,200,200,1)',textDecoration: 'none', borderRadius:15, borderWidth:1, borderStyle:'solid', textAlign:'center'}}>yolan.pibrac@gmail.com</p>
            </div>
          </a>
        </div>
        <div style={{textDecoration:'none', cursor : 'pointer'}} onClick={this.props.onClick1}>
          <div style = {{fontSize : 12, height : 30, marginTop : 50, marginLeft:25, width:200, color:'white', backgroundColor : '#00173d', display : 'flex', flexDirection:'column', justifyContent:'center', flexDirection:'column', alignItems:'center', borderColor:'#00173d', borderStyle:'solid', borderRadius:15, borderWidth : 1}}>
              <div style={{ textAlign:'center'}}>CV
              </div>
          </div>
        </div>



      </div>

    )
  }
}

  let styles = {
      placement: {
        display: 'flex',
      },
}

  export default NavContact;
