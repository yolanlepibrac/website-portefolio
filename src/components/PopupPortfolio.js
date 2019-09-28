import React, { Component } from 'react';
import posed from 'react-pose';

const PopUpAnimation = posed.div({
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
        duration: 450,
        ease: 'easeOut'

      }
     },
});


class PopupPortfolio extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      titre:'PORTEFOLIO'
    };
  }



  render() {
    var portfolio = require('../assets/images/portfolio/portfolioCS6.jpg')
    var portfolio2 = require('../assets/images/portfolio/portfolioCS62.jpg')
    var portfolio3 = require('../assets/images/portfolio/portfolioCS63.jpg')
    var portfolio4 = require('../assets/images/portfolio/portfolioCS64.jpg')
    var portfolio5 = require('../assets/images/portfolio/portfolioCS65.jpg')
    var portfolio6 = require('../assets/images/portfolio/portfolioCS66.jpg')
    var portfolio7 = require('../assets/images/portfolio/portfolioCS67.jpg')
    var portfolio8 = require('../assets/images/portfolio/portfolioCS68.jpg')
    var portfolio9 = require('../assets/images/portfolio/portfolioCS69.jpg')
    var portfolio10 = require('../assets/images/portfolio/portfolioCS610.jpg')
    var portfolio11 = require('../assets/images/portfolio/portfolioCS611.jpg')
    var portfolio12 = require('../assets/images/portfolio/portfolioCS612.jpg')
    var portfolio13 = require('../assets/images/portfolio/portfolioCS613.jpg')
    var portfolio14 = require('../assets/images/portfolio/portfolioCS614.jpg')
    var portfolio15 = require('../assets/images/portfolio/portfolioCS615.jpg')
    var portfolio16 = require('../assets/images/portfolio/portfolioCS616.jpg')
    var portfolio17 = require('../assets/images/portfolio/portfolioCS617.jpg')
    var portfolio18 = require('../assets/images/portfolio/portfolioCS618.jpg')
    var portfolio19 = require('../assets/images/portfolio/portfolioCS619.jpg')
    var portfolio20 = require('../assets/images/portfolio/portfolioCS620.jpg')
    var portfolio21 = require('../assets/images/portfolio/portfolioCS621.jpg')
    var portfolio22 = require('../assets/images/portfolio/portfolioCS622.jpg')
    var portfolio23 = require('../assets/images/portfolio/portfolioCS623.jpg')
    var portfolio24 = require('../assets/images/portfolio/portfolioCS624.jpg')
    var portfolio25 = require('../assets/images/portfolio/portfolioCS625.jpg')
    var portfolio26 = require('../assets/images/portfolio/portfolioCS626.jpg')
    var portfolio27 = require('../assets/images/portfolio/portfolioCS627.jpg')
    var portfolio28 = require('../assets/images/portfolio/portfolioCS628.jpg')
    var portfolio29 = require('../assets/images/portfolio/portfolioCS629.jpg')
    var portfolio30 = require('../assets/images/portfolio/portfolioCS630.jpg')
    var portfolio31 = require('../assets/images/portfolio/portfolioCS631.jpg')
    var portfolio32 = require('../assets/images/portfolio/portfolioCS632.jpg')
    var portfolio33 = require('../assets/images/portfolio/portfolioCS633.jpg')
    var portfolio34 = require('../assets/images/portfolio/portfolioCS634.jpg')
    var portfolio35 = require('../assets/images/portfolio/portfolioCS635.jpg')
    var portfolio36 = require('../assets/images/portfolio/portfolioCS636.jpg')
    var portfolio37 = require('../assets/images/portfolio/portfolioCS637.jpg')
    var portfolio38 = require('../assets/images/portfolio/portfolioCS638.jpg')
    var portfolio39 = require('../assets/images/portfolio/portfolioCS639.jpg')
    var portfolio40 = require('../assets/images/portfolio/portfolioCS640.jpg')
    var portfolio41 = require('../assets/images/portfolio/portfolioCS641.jpg')
    var portfolio42 = require('../assets/images/portfolio/portfolioCS642.jpg')
    var portfolio43 = require('../assets/images/portfolio/portfolioCS643.jpg')
    var portfolio44 = require('../assets/images/portfolio/portfolioCS644.jpg')
    var portfolio45 = require('../assets/images/portfolio/portfolioCS645.jpg')
    var portfolio46 = require('../assets/images/portfolio/portfolioCS646.jpg')
    var portfolio47 = require('../assets/images/portfolio/portfolioCS647.jpg')
    var portfolio48 = require('../assets/images/portfolio/portfolioCS648.jpg')
    var portfolio49 = require('../assets/images/portfolio/portfolioCS649.jpg')
    var portfolio50 = require('../assets/images/portfolio/portfolioCS650.jpg')
    var portfolio51 = require('../assets/images/portfolio/portfolioCS651.jpg')
    var portfolio52 = require('../assets/images/portfolio/portfolioCS652.jpg')
    return (

      <div style={{width: '100%', height:'100%', backgroundColor: 'rgba(245,245,245, 1)', overflowY: 'scroll', overflowX: 'hidden', }}>
        <div style = {{display:'flex', flexDirection:'row', width:'100%'}}>
          <div style={{width:'50%', height:450}}/>
          <div style={{width:'50%', height:450, marginBottom : 10, backgroundImage: "url("+ portfolio +")", backgroundSize: 'contain', 'background-repeat' : 'no-repeat', overflow: 'hidden',}}/>
        </div>
        <div style = {{display:'flex', flexDirection:'row', width:'100%'}}>
          <div style={{width:'50%', height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio2 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
          <div style={{width:'50%', height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio3 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
        </div>
        <div style = {{display:'flex', flexDirection:'row', width:'100%'}}>
          <div style={{width:'50%', height:450, marginBottom : 10, backgroundImage: "url("+ portfolio4 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
          <div style={{width:'50%', height:450, marginBottom : 10, backgroundImage: "url("+ portfolio5 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
        </div>
        <div style = {{display:'flex', flexDirection:'row', width:'100%'}}>
          <div style={{width:'50%', height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio6 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
          <div style={{width:'50%', height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio7 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
        </div>
        <div style = {{display:'flex', flexDirection:'row', width:'100%'}}>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio8 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio9 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
        </div>
        <div style = {{display:'flex', flexDirection:'row', width:'100%'}}>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio10 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio11 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
        </div>
        <div style = {{display:'flex', flexDirection:'row', width:'100%'}}>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio12 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio13 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
        </div>
        <div style = {{display:'flex', flexDirection:'row', width:'100%'}}>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio14 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio15 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
        </div>
        <div style = {{display:'flex', flexDirection:'row', width:'100%'}}>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio16 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio17 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
        </div>
        <div style = {{display:'flex', flexDirection:'row', width:'100%'}}>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio18 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio19 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
        </div>
        <div style = {{display:'flex', flexDirection:'row', width:'100%'}}>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio20 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio21 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
        </div>
        <div style = {{display:'flex', flexDirection:'row', width:'100%'}}>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio22 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio23 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
        </div>
        <div style = {{display:'flex', flexDirection:'row', width:'100%'}}>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio24 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio25 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
        </div>
        <div style = {{display:'flex', flexDirection:'row', width:'100%'}}>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio26 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio27 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
        </div>
        <div style = {{display:'flex', flexDirection:'row', width:'100%'}}>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio28 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio29 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
        </div>
        <div style = {{display:'flex', flexDirection:'row', width:'100%'}}>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio30 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio31 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
        </div>
        <div style = {{display:'flex', flexDirection:'row', width:'100%'}}>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio32 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio33 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
        </div>
        <div style = {{display:'flex', flexDirection:'row', width:'100%'}}>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio34 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio35 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
        </div>
        <div style = {{display:'flex', flexDirection:'row', width:'100%'}}>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio36 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio37 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
        </div>
        <div style = {{display:'flex', flexDirection:'row', width:'100%'}}>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio38 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio39 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
        </div>
        <div style = {{display:'flex', flexDirection:'row', width:'100%'}}>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio40 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio41 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
        </div>
        <div style = {{display:'flex', flexDirection:'row', width:'100%'}}>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio42 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio43 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
        </div>
        <div style = {{display:'flex', flexDirection:'row', width:'100%'}}>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio44 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio45 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
        </div>
        <div style = {{display:'flex', flexDirection:'row', width:'100%'}}>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio46 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio47 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
        </div>
        <div style = {{display:'flex', flexDirection:'row', width:'100%'}}>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio48 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio49 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
        </div>
        <div style = {{display:'flex', flexDirection:'row', width:'100%'}}>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio50 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio51 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
        </div>
        <div style = {{display:'flex', flexDirection:'row', width:'100%'}}>
          <div style={{width:'50%',height:450, marginBottom : 10,  backgroundImage: "url("+ portfolio52 +")", backgroundSize: 'contain',  'background-repeat' : 'no-repeat',}}/>
          <div style={{width:'50%', height:500, }}/>
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

export default PopupPortfolio;
