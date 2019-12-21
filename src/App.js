import React, { Component } from 'react';
import './App.css';
import './fonts.css';
import InstanceProject from './components/InstanceProject'
import Popup from './components/Popup';
import BoutonMenu from './components/BoutonMenu';
import BoutonMenuContact from './components/BoutonMenuContact';
import NavContact from './components/NavContact';
import PopupPortfolio from './components/PopupPortfolio';
import PopupCV from './components/PopupCV';
import PopupMaison from './components/PopupMaison';
import PopupBibliotheque from './components/PopupBibliotheque';
import PopupCampus from './components/PopupCampus';
import PopupPort from './components/PopupPort';
import PopupResidences from './components/PopupResidences';
import PopupInge from './components/PopupInge';
import PopupVariations from './components/PopupVariations';
import PopupGeneration from './components/PopupGeneration';
import PopupParametrisation from './components/PopupParametrisation';
import PopupArduino from './components/PopupArduino';
import PopupAndroid from './components/PopupAndroid';
import PopupCamera from './components/PopupCamera';
import Competence from './components/Competence';
import PartieCV from './components/PartieCV';
import WindowHome from './components/WindowHome';

import CVtoDownload from './assets/images/CV_YolanPibrac.pdf';
import PortfoliotoDownload from './assets/pdf/Portfolio_YolanPibrac.pdf';

import scrollToComponent from 'react-scroll-to-component';
import {Motion, spring} from 'react-motion';
import posed from 'react-pose';
import ScrollLock, { TouchScrollable } from 'react-scrolllock';
import {BrowserView,MobileView,isBrowser,isMobile} from "react-device-detect";

const isMobileState = isMobile;
var Image = require('./assets/images/canopee.jpg');
var CV = require('./assets/images/CV_YolanPibrac.png');
const colorSurline = "rgba(0,0,0, 0.5)";
const fontSizeSubtitle = 23;
const tabOfCompetence=[
  {title:"javascript",value:1, indice:1},
  {title:"html",value:0.9, indice:2},
  {title:"css",value:0.7, indice:3},
  {title:"ReactJS",value:0.9, indice:4},
  {title:"ReactNative",value:0.85, indice:5},
  {title:"visual basic",value:0.7, indice:6},
  {title:"java",value:0.4, indice:7},
];

const Nav = posed.div({
    idle: {
      right : -400,
      backgroundColor : 'rgba(255,255,255,0)',
      transition: {
        duration: 100,
        ease: 'linear'
      }
     },
    hovered: {
      right : -100,
      backgroundColor : 'rgba(255,255,255,1)',
      transition: {
        backgroundColor: {duration: 100, ease: 'linear'},
        right : { duration: 300, ease : 'backInOut' },

      }
     },
});



const FlecheClignotante = posed.div({
    hidden: {
      marginBottom : 0,
      backgroundColor : 'rgba(0,0,0,0)',
      transition: {
        duration: 200,
        ease: 'linear'
      }
     },
    position1: {
      marginBottom : 0,
      backgroundColor : 'rgba(0,0,0,0)',
      transition: {
        duration: 700,
        ease: 'backInOut'
      }
     },
     position2: {
       marginBottom : 30,
       backgroundColor : 'rgba(0,0,0,0)',
       transition: {
         duration: 150,
         ease: 'linear'
       }
      },
});

const BoutonTelecharger = posed.div({
    hidden: {
      backgroundColor : 'rgba(0, 23, 255,0.6)',
      transition: {
        duration: 100,
        ease: 'backInOut'
      }
     },

    position2: {
      backgroundColor : 'rgba(0, 23, 61,0.8)',
      transition: {
        duration: 100,
        ease: 'backInOut'
      }
     },
});

const CompetenceTechnosBar = posed.div({
    idle: {
      width : 0,
      backgroundColor:'rgba(255,255,255,0)',
      transition: ({i}) => ({
        duration: 300,
        ease: 'backInOut',
        delay: i*0,
      })
     },
    hovered: {
      width:({width})=>(width),
      backgroundColor:'rgba(255,255,255,1)',
      transition: ({i}) => ({
        duration: 100,
        ease: 'easeOut',
        delay: i*100,
      })
     },
});

var webProject = [
  {
    title : "Do you wanna bet",
    description : "Application and website to store the bet you made with friends",
    homeImage : require('./assets/images/projets/16_do-you-wanna-bet/home.png'),
    detailImage : require('./assets/images/projets/16_do-you-wanna-bet/detail.png'),
    source : 'http://yolan-pibrac.com/do-you-wanna-bet/',
    download:false,
    open:false,
    date:2019,
    type:"web"
  },
  {
    title : "Images Displayer",
    description : "Engine to search and store your favourites movies",
    homeImage : require('./assets/images/projets/17_images-displayer/home.png'),
    detailImage : require('./assets/images/projets/17_images-displayer/detail.png'),
    source : 'http://yolan-pibrac.com/images-displayer/',
    download:false,
    open:false,
    date:2019,
    type:"web"
  },
  {
    title : "Movie displayer",
    description : "Display of images in a complex grid to store favourites pictures",
    homeImage : require('./assets/images/projets/13_movie-displayer/home.png'),
    detailImage : require('./assets/images/projets/13_movie-displayer/detail.png'),
    source : 'http://yolan-pibrac.com/movies-displayer/',
    download:false,
    open:false,
    date:2019,
    type:"web"
  },
  {
    title : "Image processing",
    description : "Website where you can apply filters on your pictures, and download it.",
    homeImage : require('./assets/images/projets/14_image-processing/home.png'),
    detailImage : require('./assets/images/projets/14_image-processing/detail.png'),
    source : 'http://yolan-pibrac.com/image-processing/',
    download:false,
    open:false,
    date:2019,
    type:"web"
  },
  {
    title : "What will we eat",
    description : "Random generation of places to eat, depending of the current day.",
    homeImage : require('./assets/images/projets/15_what-will-we-eat/home.png'),
    detailImage : require('./assets/images/projets/15_what-will-we-eat/detail.png'),
    source : 'http://yolan-pibrac.com/what-will-we-eat/',
    download:false,
    open:false,
    date:2019,
    type:"web"
  },
  {
    title : "ICOS Application",
    description : "Interface de représentation d'une base de donnée de process BIM et extensions Tekla",
    homeImage : require('./assets/images/projets/21_ICOS-applications/home.png'),
    detailImage : require('./assets/images/projets/21_ICOS-applications/detail.png'),
    source : '',
    download:false,
    open:false,
    date:2019,
    type:"web"
  },
  {
    title : "Find the seal",
    description : "Video Game for smartphone",
    homeImage : require('./assets/images/projets/18_find-the-seal/home.png'),
    detailImage : require('./assets/images/projets/18_find-the-seal/detail.png'),
    source : 'https://play.google.com/store/apps/details?id=com.findtheseal',
    download:false,
    open:false,
    date:2019,
    type:"web"
  },
  {
    title : "Save the bear",
    description : "Video Game for smartphone",
    homeImage : require('./assets/images/projets/19_save-the-bear/home.png'),
    detailImage : require('./assets/images/projets/19_save-the-bear/detail.png'),
    source : 'https://play.google.com/store/apps/details?id=com.savethebear',
    download:false,
    open:false,
    date:2019,
    type:"web"
  },
  {
    title : "Drive the pinguins",
    description : "Video Game for smartphone",
    homeImage : require('./assets/images/projets/20_drive-the-pinguins/home.png'),
    detailImage : require('./assets/images/projets/20_drive-the-pinguins/detail.png'),
    source : 'https://play.google.com/store/apps/details?id=com.drivethepinguins',
    download:false,
    open:false,
    date:2019,
    type:"web"
  },
  {
    title : "Kapla Simulator",
    description : "Simulator de Kapla tri-dimansionnel",
    homeImage : require('./assets/images/not-available-yet.png'),
    detailImage : "",
    source : '',
    download:false,
    open:false,
    date:2019,
    type:"web"
  },
  {
    title : "10 puissance 4",
    description : "Puissance 4 dans un espace vectoriel de dimension 10 (jeux smartphone)",
    homeImage : require('./assets/images/not-available-yet.png'),
    detailImage : "",
    source : '',
    download:false,
    open:false,
    date:2019,
    type:"web"
  },
];




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pageName: "HOME",
      contactOpen : false,
      mouseX : 0,
      mouseY : 0,
      popUpProject : null,
      afficherFleche: true,
      positionFleche1 : false,
      CVover : false,
      Portfolioover : false,
      affichageTitre:true,
      sizeCV:50,
      hoverPlus : false,
      hoverMoins:false,
      hoverOngletWeb:false,
      hoverOngletInfo:false,
      hoverOngletArchi:false,
      ongletSelected:"web",
      hoverTechnos:false,
    };

  }

  componentDidMount = function() {
      window.addEventListener('scroll', this.handleScroll);
      this.interval = setInterval(() => this.setState( state => ({ positionFleche1: true })), 1000);
      this.interval1 = setTimeout(()=> setInterval(() => this.setState( state => ({ positionFleche1: false })), 1000),800);
  }

  componentWillUnmount = function() {
      window.removeEventListener('scroll', this.handleScroll);
      clearInterval(this.interval);
  }

  _onMouseMove(e) {
     this.setState({ mouseX: e.screenX, mouseY: e.screenY });
   }

  handleClick = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  CVover = () => {
    this.setState(state => ({
      CVover: !state.CVover
    }));
  }
  Portfolioover = () => {
    this.setState(state => ({
      Portfolioover: !state.Portfolioover
    }));
  }

  ScrollToProjects = () => {
    scrollToComponent(this.Projects, { offset: -100, align: 'top', duration: 1000, ease:'outBack'});
  }

  ScrollToHome = () => {
    scrollToComponent(this.Home, { offset: -100, align: 'top', duration: 700, ease:'inBack'});
  }

  ScrollToAbout = () => {
    scrollToComponent(this.About, { offset: -50, align: 'top', duration: 1000, ease:'outBack'});
  }


  popUpCV = () => {
    this.setState({
      popUpCV: !this.state.popUpCV
    });
  }


  displayContact = () =>{
    this.setState({
      contactOpen:true,
    })
  }
  hideContact = () =>{
      this.setState({
        contactOpen:false,
      })
  }



  handleScroll = (event) => {
    if(window.scrollY < 10){
      this.setState({
        afficherFleche: true,
      })
    }else{
      this.setState({
        afficherFleche: false,
      })
    }
   if (window.scrollY < 600) {
       this.setState({
         pageName: "HOME",
       })
   }else if(window.scrollY < 1350){
     this.setState({
       pageName: "PROJECTS",
     })
   }else{
     this.setState({
       pageName: "ABOUT ME",
     })
   }
 }



 increaseCVSize=()=>{
   if(this.state.sizeCV<80){
     this.setState({sizeCV:this.state.sizeCV*1.2})
   }
 }

 decreaseCVSize=()=>{
   this.setState({sizeCV:this.state.sizeCV/1.2})
 }

 renderItemTabOfCompetence = (competence) => {
   return(
   <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-start", alignItems:"center", height:30, textAlign:"left", width:"95%"}}>
     <div style={{minWidth:140, height:30}}>{competence.title}
     </div>
     <CompetenceTechnosBar style={{height:20}} width={competence.value*70+"%"} pose={this.state.hoverTechnos ? "hovered" : "idle"} i={competence.indice}>
     </CompetenceTechnosBar>
   </div>)
 }

 renderItemTabOfCompetenceMobile = (competence) => {
   return(
   <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-start", alignItems:"center", height:15, textAlign:"left", width:"95%"}}>
     <div style={{minWidth:70, height:15}}>{competence.title}
     </div>
     <div style={{height:7, width:competence.value*70+"%", backgroundColor:"white"}}>
     </div>
   </div>)
 }

 toggleHoverTechno = ()=>{
   console.log("techno")
   this.setState({hoverTechnos:!this.state.hoverTechnos})
 }

 renderHome = () => {

   if(isMobileState){
     return(
         <div className="Home" style={{height : "85vh", overflow:"hidden", width:"100vw", marginLeft:0, marginTop:0, paddingTop:30}} ref={(div) => { this.Home = div; }}>
           <div style={{height : "85vh", color:'white', backgroundImage: "url("+ Image +")", backgroundSize: 'cover'}}>
             <div className="HomeInterior" style={{ height:"85vh", width : "100%", margin:0, padding:0, position:"relative",  backgroundColor:'rgba(0,0,0,0.3)' }}>
              <div style={{height:50, width:100}}>
              </div>


               <div style={{width:"80%", marginLeft:"10%", display:"flex", flexDirection:"column",  alignItems:"flex-start", backgroundColor:'rgba(0,0,0,0)', borderStyle:"solid", borderWidth:5, borderColor:"rgba(255,255,255,1)", marginBottom:20}}>
                 <div style={{width:"100%", fontSize:20, color:"black", backgroundColor:'rgba(255,255,255,1)', paddingBottom:5}}>TECHNOS</div>
                 <div style={{ display:"flex", flexDirection:"column", padding:10, color:"white", width:"100%",}}>
                  {tabOfCompetence.map((itemCompetence)=>this.renderItemTabOfCompetenceMobile(itemCompetence))}
                 </div>
               </div>

               <div style={{width:"80%", marginLeft:"10%", display:"flex", flexDirection:"column",  alignItems:"flex-start", backgroundColor:'rgba(0,0,0,0)', borderStyle:"solid", borderWidth:5, borderColor:"rgba(255,255,255,1)"}}>
                 <div style={{width:"100%", fontSize:20, color:"black", backgroundColor:'rgba(255,255,255,1)', paddingBottom:5}}>INFOS</div>
                 <div style={{ display:"flex", flexDirection:"column", padding:10, color:"white"}}>
                   <a href="https://github.com/yolanlepibrac/" style={{textDecoration:"none",color:'white'}}><strong>github :</strong> https://github.com/yolanlepibrac</a>
                   <a href="http:/yolan-pibrac.com/home/" style={{textDecoration:"none",color:'white'}}><strong>personal website :</strong> yolan-pibrac.com/home/</a>
                   <div style={{textDecoration:"none",color:'white'}}><strong>email :</strong> yolan.pibrac@gmail.com</div>
                   <div style={{textDecoration:"none",color:'white'}}><strong>phone :</strong> 06 14 74 29 26</div>
                 </div>
               </div>

              <div className="Websites" style={{width:"80%", marginLeft:"10%", top:"55vh", left:"15vw", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center",  alignItems:"flex-start", backgroundColor:'rgba(0,0,0,0)', borderStyle:"solid", borderWidth:0, borderColor:"rgba(255,255,255,1)"}}>
                <div style={{ display:"flex", flexDirection:"column", padding:10, color:"white", justifyContent:"center"}}>
                  <div style={{fontSize:12}}>Yolan PIBRAC website
                  </div>
                  <button style={styles.enterWebsite} onClick={this.ScrollToProjects}>
                    Enter
                  </button>
                </div>
              </div>

             </div>
           </div>
         </div>
     )
   }else{

     return(
         <div className="Home" style={{height : "85vh", overflow:"hidden", width:"80vw"}} ref={(div) => { this.Home = div; }}>
           <div style={{height : "85vh", color:'white', backgroundImage: "url("+ Image +")", backgroundSize: 'cover'}}>
             <div className="HomeInterior" style={{ height:"85vh", width : "100%", margin:0, padding:0, position:"relative",  backgroundColor:'rgba(0,0,0,0.3)' }}>

               <WindowHome top={"5vh"} left={"47vw"} fontSize={21} scale={1.07}>
                 <div style={{width:"100%", fontSize:25, color:"black", backgroundColor:'rgba(255,255,255,1)', paddingBottom:5}}>INFOS</div>
                 <div style={{ display:"flex", flexDirection:"column", padding:10, color:"white", justifyContent:"space-between", height:"100%"}}>
                   <a href="https://github.com/yolanlepibrac/" style={{textDecoration:"none",color:'white', backgroundColor:colorSurline}}>
                     <strong style={{fontSize:fontSizeSubtitle}}>github :
                     </strong> https://github.com/yolanlepibrac
                   </a>
                   <a href="http://yolan-pibrac.com/home" style={{textDecoration:"none",color:'white', backgroundColor:colorSurline}}>
                    <strong style={{fontSize:fontSizeSubtitle}}>personal website :
                    </strong> yolan-pibrac.com/home
                   </a>
                   <div style={{textDecoration:"none",color:'white', backgroundColor:colorSurline}}><strong style={{fontSize:fontSizeSubtitle}}>email :</strong> yolan.pibrac@gmail.com</div>
                   <div style={{textDecoration:"none",color:'white', backgroundColor:colorSurline}}><strong style={{fontSize:fontSizeSubtitle}}>phone :</strong> 06 14 74 29 26</div>
                 </div>
               </WindowHome>

               <WindowHome top={"40vh"} left={"45vw"} fontSize={23} width={480} scale={1.05} >
                 <div onMouseEnter={this.toggleHoverTechno} onMouseLeave={this.toggleHoverTechno} style={{width:"100%", height:"100%"}}>
                     <div style={{width:"100%", fontSize:25, color:"black", backgroundColor:'rgba(255,255,255,1)', paddingBottom:5}} >TECHNOS</div>
                     <div style={{width:"100%", display:"flex", flexDirection:"column", padding:10, color:"white",}}>
                      {tabOfCompetence.map((itemCompetence)=>this.renderItemTabOfCompetence(itemCompetence))}
                     </div>
                 </div>
               </WindowHome>

               <div className="Websites" style={{position:"absolute", top:"55vh", left:"15vw", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center",  alignItems:"flex-start", backgroundColor:'rgba(0,0,0,0)', borderStyle:"solid", borderWidth:1, borderColor:"rgba(255,255,255,1)"}}>
                 <div style={{ display:"flex", flexDirection:"column", padding:10, color:"white", justifyContent:"center"}}>
                   <div style={{fontSize:12}}>Yolan PIBRAC website
                   </div>
                   <button style={styles.enterWebsite} onClick={this.ScrollToProjects}>
                     Enter
                   </button>
                 </div>
               </div>



             </div>
           </div>
         </div>
     )
   }
 }

 enterPlus=()=>{
   if(this.state.sizeCV<80){
     this.setState({hoverPlus:true})
   }
 }
 leavePlus=()=>{
   this.setState({hoverPlus:false})
 }

 enterMoins=()=>{
   this.setState({hoverMoins:true})
 }
 leaveMoins=()=>{
   this.setState({hoverMoins:false})
 }
 enterOngletWeb=()=>{
   this.setState({hoverOngletWeb:true})
 }
 leaveOngletWeb=()=>{
   this.setState({hoverOngletWeb:false})
 }
 enterOngletInfo=()=>{
   this.setState({hoverOngletInfo:true})
 }
 leaveOngletInfo=()=>{
   this.setState({hoverOngletInfo:false})
 }
 enterOngletArchi=()=>{
   this.setState({hoverOngletArchi:true})
 }
 leaveOngletArchi=()=>{
   this.setState({hoverOngletArchi:false})
 }
 ongletWeb=()=>{
   this.setState({ongletSelected:"web"})
 }
 ongletInfo=()=>{
   this.setState({ongletSelected:"info"})
 }
 ongletArchi=()=>{
   this.setState({ongletSelected:"archi"})
 }

 displayWebProjects = (project, key) => {
   return (
   <InstanceProject src={project.homeImage} titre={project.title}  description={project.description} type= {project.type} date={project.date}
   content={
     <div style={{width:"100%", height:"100%", textAlign:"center", fontSize:15, marginTop:10}}>
       <div style={{width:"100%", height:30, backgroundColor:"white"}}>visite the website on :
         <a href={project.source}>{project.source}</a>
       </div>
       <div style={{width:"100%", height:"100%", backgroundImage: "url("+ project.detailImage +")", backgroundSize: isMobileState?"contain":"cover", backgroundRepeat: "no-repeat"}}>
       </div>
     </div>}
   download={project.download} open={project.open} source={project.source}>
   </InstanceProject>)


 }



  render() {

    return (
      <div className="App" onScroll={this.handleScroll} style={{fontFamily: 'FuturaBT'}}>
        {this.state.afficherFleche && !isMobileState ?
            <FlecheClignotante pose={!this.state.afficherFleche ? "hidden": this.state.positionFleche1 ? "position1": "position2"} className='fleche' style={{zIndex:1000, width : 100, height : 100, bottom : 20, 'left' : 'calc(50% - 50px)', position:'absolute', cursor:'pointer', display:'flex', justifyContent:'center', alignItems:'center'}}>
              <div >
                <img src={require('./assets/images/arrows.png')} onClick={this.ScrollToProjects}/>
              </div>
            </FlecheClignotante>
        : null }
        <header className="App-header" style={{paddingBottom:10}}>
            <div style={{fontFamily: 'codelight', marginLeft : 50, width : 200, textAlign :'left', fontSize:!isMobileState?20:10}}>{this.state.pageName}
            </div>
            {!isMobileState?
              <a href="" style={{ fontSize: 17, textDecoration:'none', color:'white'}}>
                yolan-pibrac.com
              </a>
              :null
            }
            <div className="menu" style={{marginRight:!isMobileState?50:10}} >
              <BoutonMenu src={require('./assets/images/logos/homewhite.png')} src2={require('./assets/images/logos/home.png')} text={<p>H<br />O<br />M<br />E</p>} lien={this.ScrollToHome} marginTop={100}></BoutonMenu>
              <BoutonMenu src={require('./assets/images/logos/projectswhite.png')} src2={require('./assets/images/logos/projects.png')} text={<p>P<br />R<br />O<br />J<br />E<br />C<br />T<br />S</p>} lien={this.ScrollToProjects}  marginTop={0}></BoutonMenu>
              <BoutonMenu src={require('./assets/images/logos/aboutmewhite.png')} src2={require('./assets/images/logos/aboutme.png')} text={<p>A<br />O<br />U<br />T<br /><br />M<br />E</p>} lien={this.ScrollToAbout} marginTop={30}></BoutonMenu>
              <div style={{flex:1}}  onMouseEnter={this.displayContact} onMouseLeave={this.hideContact}>
              <BoutonMenuContact src={require('./assets/images/logos/contactwhite.png')} src2={require('./assets/images/logos/contact.png')}></BoutonMenuContact>
              </div>
            </div>
            <Nav onMouseEnter={this.displayContact} onMouseLeave={this.hideContact} pose={this.state.contactOpen ? "hovered" : "idle"} style={{"height" : "100%", width:400, position:'fixed', top:50, color:'black', textAlign:'left', fontSize:15}}>
              <NavContact onClick1={this.popUpCV} onClick2={this.popUpPortfolio}></NavContact>

            </Nav>

        </header>



        <div className="Body" style={{paddingBottom:50, overflowY:'hidden', height:"100%"}}>

        {this.renderHome()}

          <div className="Projects" style={{"width" : isMobileState?"100vw":"80vw", "height" : "100%", marginTop:80, marginLeft : isMobileState?0:'10vw', marginRight : '5%', boxShadow: "5px 5px 2px 0px rgba(0, 0, 0, 0.5)", backgroundColor:"rgba(230,230,230,1)"}} ref={(div) => { this.Projects = div; }}>
            <div style={{width:"100%", height:30, display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"flex-start", fontSize:isMobileState?10:20, textAlign:"left", }}>
              <div onClick={this.ongletWeb} onMouseEnter={this.enterOngletWeb} onMouseLeave={this.leaveOngletWeb} style={{paddingRight:20, paddingLeft:isMobileState?5:20, width:isMobileState?"100%":200,  height:30, boxShadow: "5px 0px 2px 0px rgba(0, 0, 0, 0.5)", zIndex:this.state.ongletSelected==="web"?15:12, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", backgroundColor:this.state.ongletSelected==="web"?"rgba(160,160,160,1)":this.state.hoverOngletWeb?"rgba(200,200,200,1)":"rgba(210,210,210,1)"}}>
                <div>WEB</div>
              </div>
              <div onClick={this.ongletInfo} onMouseEnter={this.enterOngletInfo} onMouseLeave={this.leaveOngletInfo} style={{paddingRight:20, paddingLeft:isMobileState?5:20,width:isMobileState?"100%":200, height:30, boxShadow: "5px 0px 2px 0px rgba(0, 0, 0, 0.5)", zIndex:this.state.ongletSelected==="info"?15:11, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", backgroundColor:this.state.ongletSelected==="info"?"rgba(160,160,160,1)":this.state.hoverOngletInfo?"rgba(200,200,200,1)":"rgba(210,210,210,1)"}}>INFORMATIQUE
              </div>
              <div onClick={this.ongletArchi} onMouseEnter={this.enterOngletArchi} onMouseLeave={this.leaveOngletArchi} style={{paddingRight:20, paddingLeft:isMobileState?5:20, width:isMobileState?"100%":200, height:30, boxShadow: "5px 0px 2px 0px rgba(0, 0, 0, 0.5)",  zIndex:this.state.ongletSelected==="archi"?15:10, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", backgroundColor:this.state.ongletSelected==="archi"?"rgba(160,160,160,1)":this.state.hoverOngletArchi?"rgba(200,200,200,1)":"rgba(210,210,210,1)"}}>ACHITECTURE
              </div>
            </div>

            <div style={{width:"100%", height:"100%", borderWidth:1, borderStyle:"solid", borderColor:"rgba(100,100,100,1)"}}>

              {this.state.ongletSelected==="web"?
                <div style={styles.lineProjects}>

                  {this.state.popUpCV ?
                    <ScrollLock>
                      <Popup  content={<PopupCV/>} titre={'CURICULUM VITAE'} text='Close Me' closePopup={this.popUpCV} download={true}  src={CVtoDownload} titreDownload={'CV_YolanPibrac'} open={true}/>
                    </ScrollLock> : null
                  }
                  {this.state.popUpPortfolio ? <ScrollLock>
                    <Popup content={<PopupPortfolio/>} titre={'PORTEFOLIO'} text='Close Me' closePopup={this.popUpPortfolio}  download={true} src={PortfoliotoDownload} titreDownload={'Portfolio_YolanPibrac'} open={true}/>
                    </ScrollLock> : null
                  }

                  {webProject.map((project, key)=> {
                    return this.displayWebProjects(project, key)
                  })}

                </div>
              :null
              }

              {this.state.ongletSelected==="info"?
                <div style={styles.lineProjects}>
                  <InstanceProject src={require('./assets/images/projets/9_parametrisation/view1min.png')} titre='Paramétrisation de motifs'  description={"Outil de paramétrisation de motifs ornementaux."} type= {"Informatique & Architecture"}
                  date={'2018'} content={<PopupParametrisation/>}
                  download={false} open={true}>
                  </InstanceProject>

                  <InstanceProject src={require('./assets/images/projets/7_variations/persmin.png')} titre='Processus génératif ornemental'  description={"Génération d'éléments architecturaux par variations paramétrées de motifs ornementaux."} type= {"Informatique & Architecture"} date={'2018'} content={<PopupVariations/>}
                  download={false} open={false}>
                  </InstanceProject>

                  <InstanceProject src={require('./assets/images/projets/8_generation/view1min.png')} titre='Génération aléatoire de mobilier'  description={"Génération de mobilier par algorithmes."} type= {"Informatique & Design"}
                  date={'2018'} content={<PopupGeneration/>}
                  download={false} open={true} source={'http://yolan-pibrac.com/masscustomisation/'}>
                  </InstanceProject>

                  <InstanceProject src={require('./assets/images/projets/12_android/view1min.png')} titre='Jeux Android'
                  description={"Création d'un jeux vidéo 3D pour la plateforme android."} type= {"Informatique"}
                  content={<PopupAndroid/>} date={'2017'}
                  download={false} open={false}>
                  </InstanceProject>

                  <InstanceProject src={require('./assets/images/projets/10_arduino/view1min.jpg')} titre='Montage arduino'
                  description={"Réalisation de différents montages éléctrique grâce au micorcontrôleur arduino."} type= {"Informatique & Ingénierie"}
                  date={'2016'} content={<PopupArduino/>}
                  download={false} open={false}>
                  </InstanceProject>

                  <InstanceProject src={require('./assets/images/projets/11_camera3D/cardboardmin.png')} titre='Camera 3D'  description={"Création d'une caméra 3D pour smartphone par l'utilisation d'un cardboard."} type= {"Informatique & Ingénierie"}
                  date={'2015'} content={<PopupCamera/>}
                  download={false} open={false}>
                  </InstanceProject>



                </div>
              :null
              }

              {this.state.ongletSelected==="archi"?
                <div style={styles.lineProjects}>
                  <InstanceProject src={require('./assets/images/projets/1_maison/view2min.jpg')} titre={"Maison Individuelle"}
                  description={"Conception d'une maison indivisuelle dans la banlieue lyonnaise."} type={"Architecture"}
                  date={'2013'} content={<PopupMaison/>}
                  download={false} open={false}>
                  </InstanceProject>

                  <InstanceProject src={require('./assets/images/projets/2_bibliotheque/perspective_contextemin.jpg')} titre='Bibliothèque' description={"Conception d'une bibliothèque près de l'ancienne gare de Villeurbanne."} type={"Architecture"}
                  date={'2015'} content={<PopupBibliotheque/>}
                  download={false} open={false}>
                  </InstanceProject>

                  <InstanceProject src={require('./assets/images/projets/3_residences/nightscenemin.jpg')} titre='Résidences étudiantes' description={"Conception d'un complexe multi-usage dans une ancienne zone industrielle désafectée."} type={"Architecture & Urbanisme"}  date={'2016'} content={<PopupResidences/>}
                  download={false} open={false}>
                  </InstanceProject>

                  <InstanceProject src={require('./assets/images/projets/4_port/pers6min.jpg')} titre={'Réhabilitation d\'un port'}
                  description={"Aménagement du port de Tessalonique."} type={"Architecture & Urbanisme"}
                  date={'2016'} content={<PopupPort/>}
                  download={false} open={false}>
                  </InstanceProject>

                  <InstanceProject src={require('./assets/images/projets/5_campus/view1min.jpg')} titre={'Réhabilitation d\'un campus'} description={"Aménagement extérieur du campus de l'université de Thessalonique."} type={"Architecture & Urbanisme"}
                  date={'2017'} content={<PopupCampus/>}
                  download={false} open={false}>
                  </InstanceProject>

                  <InstanceProject src={require('./assets/images/projets/6_inge/amphimin.jpg')} titre={'Etudes d\'Ingénierie'}  description={"Projets d'ingénierie dans le domaine du Génie Civil."} type= {"Ingenierie"}
                  date={'2013-2016'} content={<PopupInge/>}
                  download={false} open={false}>
                  </InstanceProject>
                </div>

              :null
              }

            </div>
          </div>



          <div className="AboutMe" style={{width:"100%", marginTop:50, paddingTop:50, display:'flex', flexDirection:'column', alignItems:"center", overflow:"auto"}} ref={(div) => { this.About = div; }}>

            <div style={{width:200, display:"flex", flexDirection:'row', justifyContent:"space-between", marginBottom:20}}>
              <div onMouseEnter={this.enterPlus} onMouseLeave={this.leavePlus} onClick={this.increaseCVSize} style={{display:"flex", flexDirection:'row', justifyContent:"center", alignItems:"center", width:50, height:50, backgroundColor:this.state.hoverPlus?"rgba(150,150,150,1)":"rgba(200,200,200,1)", color:"white", borderRadius:"50%", cursor:"pointer", borderStyle:"solid", borderWidth:1, textAlign:"center", borderColor:"rgba(100,100,100,1)"}}>+</div>
              <div onMouseEnter={this.enterMoins} onMouseLeave={this.leaveMoins} onClick={this.decreaseCVSize}  style={{display:"flex", flexDirection:'row', justifyContent:"center", alignItems:"center",width:50, height:50, backgroundColor:this.state.hoverMoins?"rgba(150,150,150,1)":"rgba(200,200,200,1)", color:"white", borderRadius:"50%", cursor:"pointer", borderStyle:"solid", borderWidth:1, textAlign:"center", borderColor:"rgba(100,100,100,1)"}}>-</div>
            </div>

            <div style={{cursor:"pointer", width : "80vw",  height:"100%", minHeight:"80vh", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
              <img onClick={this.popUpCV} src={CV} style={{ width:this.state.sizeCV+"vw", maxWidth : "80vw",height:"100%", backgroundColor:'rgba(255,255,255,1)', boxShadow:'5px 5px 2px 0 rgba(0, 0, 0, 0.5)'}}/>
            </div>
          </div>

          <div style={{display : 'flex', flexDirection : 'row', marginTop:30, justifyContent:"center"}}>

            <a download={'CV_YolanPibrac'} href={CVtoDownload} style={{textDecoration:'none', cursor : 'pointer', textDecoration:"none", color:"white"}} onMouseEnter={this.CVover} onMouseLeave={this.CVover}>
              <BoutonTelecharger pose={!this.state.CVover ? "position2" : "hidden"} style={{fontSize : 12, height : 30, marginTop : 0, marginLeft:0, width:200,  color : 'white', backgroundColor:'#00173d', display : 'flex', flexDirection:'column', justifyContent:'center', flexDirection:'column', alignItems:'center', borderColor:'#00173d', borderStyle:'solid', borderRadius:15, borderWidth : 1}}>
                  <a  style={{ textAlign:'center'}}>Download CV.pdf
                  </a>
              </BoutonTelecharger>
            </a>
          </div>
            {/*
              <div style={{"width":"90%", 'marginLeft': '5%',  marginBottom:50}}>
                <div style={{display:'flex', flexDirection:'row'}}>
                  <PartieCV
                    width={'75%'}
                    poidsTitre={'200px'}
                    titre={'FORMATION'}
                    src={require('./assets/images/logos/logoFormationW.png')}
                    couleur = {'rgba(46, 173, 76,1)'}
                    nombrePartie={3}
                      titre1Partie1={'MASTER D’ARCHITECTURE'}
                      titre2Partie1={'ENSA, Lyon'}
                      datePartie1={'2016-2018'}
                      contentPartie1={<div>Architecture Computationelle / Design génératif</div>}

                      titre1Partie2={'MASTER D’INGENIERIE'}
                      titre2Partie2={'INSA de Lyon'}
                      datePartie2={'2013-2016'}
                      contentPartie2={<div>Spécialisation Génie Civil et Urbanisme <br/> Double diplôme Ingénieur Architecte à l’ENSA Lyon</div>}

                      titre1Partie3={'CLASSES PREPARATOIRES'}
                      titre2Partie3={'INSA de Lyon'}
                      datePartie3={'2011-2013'}
                      contentPartie3={<div>Filière classique <br/> Mathématiques, Informatique, Physique, Chimie</div>}
                    >
                  </PartieCV>
                  <div style={{'width':'25%'}}>
                    <img style={{'width':'100%', marginTop:20}}src={require('./assets/images/photo.png')} alt="photo.png"/>
                  </div>
                </div>
                <PartieCV
                  width={'100%'}
                  poidsTitre={'525px'}
                  titre={'EXPERIENCES PROFESSIONNELLES'}
                  src={require('./assets/images/logos/logoExperiencesW.png')}
                  couleur = {'rgba(81, 88, 226,1)'}
                  nombrePartie={4}
                    titre1Partie1={'COORDINATEUR BIM'}
                    titre2Partie1={'ICOS, Paris'}
                    datePartie1={'Since november 2018'}
                    contentPartie1={<div><strong>Gestion de maquettes numériques (Tekla Structure) et coordination des activités 3D</strong><br/>
                                    (interfaces, phases de projet, organisation de travail, prioritées)<br/>
                                    - Création d’outils informatiques (VBA) pour le suivi du modèle et le traitement de ses données, la détection d’incohérences, la création de templates logicels<br/>
                                    - Analyse des données d’entrée des modèles BIM, Gestion des droits d’utilisateurs, Préparation, Contrôle, Réparation, et Suivit des modèles,<br/> en coordination avec les équipes de production et en accord avec les exigences définies par le client.<br/>
                                    - Management et accompagnement des projeteur<br/>
                                    - Support du département IT, appui technique et validation des outils<br/>
                                    - Collaboration avec les ingénieurs projets concernant les différentes interfaces structures</div>}

                    titre1Partie2={'CHEF DE PROJET'}
                    titre2Partie2={'HOCH Studio, Paris'}
                    datePartie2={'Stage 6 mois - 2018'}
                    contentPartie2={<div><strong>Rénovation d’appartements Parisiens et Aixois</strong><br/>
                                    - Réponses aux appels d’offre, Estimation des coûts de travaux<br/>
                                    - Suivi de chantier<br/>
                                    - Réalisation de Permis de Construire, Déclaration Préalables, Rédaction des documents techniques<br/>
                                    - Réalisation des livrables (plan, coupes, élévations, 3D, perspectives, détails technique)</div>}

                    titre1Partie3={'INGENIEUR D\'ETUDES'}
                    titre2Partie3={'Egis Rail, Lyon'}
                    datePartie3={'Stage 4 mois - 2015'}
                    contentPartie3={<div><strong>Département Génie civil et Ouvrages d’art, direction technique</strong><br/>
                                    Création des documents d’appels d’offre et estimation des coûts<br/>
                                    - Diagnostics de lignes, réalisation des plans d’exploitation, recensement des réseaux<br/>
                                    - Gestion de projet, Rédaction des livrables (plannings, plans, coupes, notes techniques …)</div>}

                    titre1Partie4={'ASSISTANT INGENIEUR'}
                    titre2Partie4={'VINCI, Toulouse'}
                    datePartie4={'Stage 2 mois - 2014'}
                    contentPartie4={<div><strong>Service des études des méthodes d’exécution (VINCI Construction)</strong><br/>
                                    - Réalisation de plans, coupes, documents techniques et modes opératoires<br/>
                                    - Vérification des normes et sécurité<br/>
                                    - Diffusion des informations et consignes sur les chantiers</div>}
                  >
                </PartieCV>
                <div className="Competences" style={{width: this.props.width, marginBottom:30, marginTop : 50, display:'flex', flexDirection:'column', textAlign:'left'}}>

                  <div style={{'width':'100%',  flexDirection: 'row', display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <div style={{width : 50, height:50, fontSize:4, display:'flex', justifyContent:'center', alignItems:'center'}}>
                      <img style={{width : 50, height:50, borderRadius:25, backgroundColor:'rgba(226, 74, 115,1)'}} src={require('./assets/images/logos/logoCompétencesW.png')} alt="LogoCompétenceW.png" />
                    </div>
                    <div style={{fontFamily: 'codelight', 'width' : this.props.poidsTitre, paddingRight : 10, paddingLeft : 10, fontSize:35, }}>
                      COMPETENCES
                    </div>
                    <div style={{'width' : '100%', 'height' : '100%'}}>
                      <div style={{'width' : '100%', height : 1, marginTop:24, backgroundColor:'rgba(50,50,50,1)'}}>
                      </div>
                    </div>
                  </div>
                  <div className="ColonneContainer" style={{'width':'100%', display:'flex', flexDirection:'row', textAlign:'left'}}>
                    <div className="Colonne1" style={{'width':'100%', display:'flex', flexDirection:'column', textAlign:'left'}}>
                      <Competence
                        booleenTitre={true}
                        titre={'DEVELOPPEMENT'}
                        competence1titre={'Web'}
                        competence1content={'JavaScript, html, CSS, ReactJS, ReactNative, Redux'}
                        competence2titre={'Logiciels'}
                        competence2content={'Bash, Git, Android Studio, Arduino, Jdevelopper'}
                        competence3titre={'Langages'}
                        competence3content={'Java, Java 3D, OpenGL, VBA'}/>
                      <Competence
                        booleenTitre={true}
                        titre={'LOGICIELS TECHNIQUES'}
                        competence1titre={'Modelisation'}
                        competence1content={'Rhinoceros 3D, Sketchup, Autocad, 3DS Max'}
                        competence2titre={'Rendu'}
                        competence2content={'Photoshop, In Design, Illustrator'}
                        competence3titre={'BIM'}
                        competence3content={'Grasshopper, Revit, Archicad, Tekla Structure, Dynamo Studio'}/>
                    </div>
                    <div className="Colonne2" style={{'width':'100%', display:'flex', flexDirection:'column', textAlign:'left'}}>
                      <Competence
                        booleenTitre={false}
                        titre={'COMPETENCES'}
                        competence1content={<div>Management, Développement Informatique,<br/> Architecture, Design, Ingénierie</div>}/>
                      <Competence
                        booleenTitre={false}
                        titre={'QUALITES'}
                        competence1titre={'Modelisation'}
                        competence1content={<div>Prise d’initiative, Créativité, Rigueur, Autonomie,<br/> Organisation, Travail en équipe, Sociabilité</div>}/>
                        <Competence
                          booleenTitre={false}
                          titre={'ACTIVITES PERSONELLES'}
                          competence1content={<div>Développement Informatique, Snowboard,<br/> Plongée sous-marine, Course à pieds, Voyages</div>}/>
                    </div>
                  </div>
                </div>
                <div style={{display : 'flex', flexDirection : 'row'}}>
                  <div style={{textDecoration:'none', cursor : 'pointer'}} onClick={this.popUpCV} onMouseEnter={this.CVover} onMouseLeave={this.CVover}>
                    <BoutonTelecharger pose={!this.state.CVover ? "position2" : "hidden"} style={{fontSize : 12, height : 30, marginTop : 0, marginLeft:0, width:200,  color : 'white', backgroundColor:'#00173d', display : 'flex', flexDirection:'column', justifyContent:'center', flexDirection:'column', alignItems:'center', borderColor:'#00173d', borderStyle:'solid', borderRadius:15, borderWidth : 1}}>
                        <div style={{ textAlign:'center'}}>CV .pdf
                        </div>
                    </BoutonTelecharger>
                  </div>
                  <div  style={{ textDecoration:'none', cursor : 'pointer'}} onClick={this.popUpPortfolio} onMouseEnter={this.Portfolioover} onMouseLeave={this.Portfolioover}>
                    <BoutonTelecharger  pose={!this.state.Portfolioover ? "position2" : "hidden"} style={{fontSize : 12, height : 30, marginTop : 0, marginLeft:20, width:200, color : 'white', backgroundColor:'#00173d', display : 'flex', flexDirection:'column', justifyContent:'center', flexDirection:'column', alignItems:'center', borderColor:'#00173d', borderStyle:'solid', borderRadius:15, borderWidth : 1}}>
                        <div style={{ textAlign:'center', alignItems: 'center', textDecoration:'none'}}>PORTEFOLIO .pdf
                        </div>
                    </BoutonTelecharger>
                  </div>


                </div>


              </div>
              */
            }
        </div>
      </div>
    );
  }
}

export default App;


let styles = {
    Home : {
      overflow: 'auto',
      display: 'flex',
      width : 900,
      height: 700,
      flexDirection: 'column',
      textAlign: 'start',
      justifyContent: 'space-between',
      alignItems: 'space-between',
      fontSize: 10,
      marginLeft : 50,
      marginRight : 50,
      marginTop : 80,
      marginBottom : -30,
      borderWidth: 0,
      borderStyle : 'solid',
      borderColor : 'black',
      backgroundColor : 'red',
    },
    HomeMiddle: {
        backgroundColor : 'rgba(255,255,255,1)',

    },
    enterWebsite : {
      width : 110,
      height : 30,
      backgroundColor : 'rgba(255,255,255,0.15)',
      borderRadius: 3,
      borderColor : 'rgba(230,230,230,1)',
      borderWidth : 1,
      color:'white',
      cursor:'pointer',
      "outline": "none",
    },
    lineProjects : {
      display: 'flex',
      flexWrap:"wrap",
      flex : 1,
      flexDirection: 'row',
    }
}
