import React from 'react';
import { Parallax } from "react-parallax";
import * as Scroll from 'react-scroll';
import { Element , animateScroll as scroll, scroller } from 'react-scroll'
import  Motion from './Motion';
import NavBar from './NavBar';
import Card from './Card';
import ContactForm from './ContactForm';
import axios from 'axios';
import Footer from './Footer';


const insideStyles = {  
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

class HomePage extends React.Component {
  constructor(props) {
  super(props);
  this.state={
      beginning : true,
      c:0,
      count:0,
      image1 : "https://images.unsplash.com/photo-1500806851969-7b469b45f3dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      image2 : "https://images.unsplash.com/photo-1477093782505-e10aaeb27c6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      image3 : "https://images.unsplash.com/photo-1474226004578-62743874270f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      image4 : "https://images.unsplash.com/photo-1464638681273-0962e9b53566?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      image5 : "https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      image6 : "https://images.unsplash.com/photo-1526137630052-dc2c4693f0d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      image7 : "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80",
      height : 600,
      show : false,
      scrollPos : 0,
      navbarOpen : false,
      projectsArray : [],
      loaderOpen : false,
      hideFooter: false
  }
  this.handleScroll = this.handleScroll.bind(this);
  this.scrollToTop = this.scrollToTop.bind(this);
  this.scrollToBottom = this.scrollToBottom.bind(this);
  this.scrollTo = this.scrollTo.bind(this);
  this.firstLoading = this.firstLoading.bind(this);
}

componentDidMount() {
  this.interval = setInterval(() => this.firstLoading(),40);
 
  window.addEventListener("scroll", this.handleScroll);
  axios.get("http://localhost:4000/api/projects")
    .then(res => {
      this.setState({projectsArray: res.data})
    })
    .catch(err => {
      console.log(err);
      alert("something wrong in the projects request")
    })
}

componentWillUnmount() {
  window.removeEventListener("scroll", this.handleScroll);
}

handleScroll() {
  const { scrollPos } = this.state;
  this.setState({
    // -------------------------------------------------------------------------------------------------------
    // Add the line after if you want the arrow disappears when scrolling up and not only scrolling down
    //--------------------------------------------------------------------------------------------------------
    // scrollPos: document.body.getBoundingClientRect().top,
    show: document.body.getBoundingClientRect().top < scrollPos
  });
}

scrollToBottom() {
  scroll.scrollToBottom();
}

scrollToTop() {
  this.setState({
    arrowFixed: ""
  })
  scroll.scrollToTop();
}

scrollTo(el) {
  this.setState({
    arrowFixed: "arrow-fixed"
  })
  scroller.scrollTo( el , {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart'
  })
}

isOpen(e) {
  this.setState({
    navbarOpen: !this.state.navbarOpen
  });
}
  
loaderOpen() {
  this.setState({
    loaderOpen: !this.state.loaderOpen
  })
}


firstLoading() {
  this.setState(state => ({
    c:state.c+1,
    count:state.count+1
  }))
  if (this.state.count===101) {
    clearInterval(this.interval)
    this.setState({
      beginning:false
    })
  }
}

  render() {

    const {c,beginning, image1, image2, image3, image4, image5, image6, image7, height, navbarOpen, projectsArray, loaderOpen} = this.state;
    
    if (beginning) {
      return (
        <div className="loading-page">
          <div className="counter">
            <p>loading</p>
            <h1>{c}%</h1>
            <hr style={{width:c+'%'}}/>
          </div>
        </div>
      )
    }

    if (navbarOpen===true) {
      return (
        <div className="main">
            <NavBar navbarOpen={navbarOpen} onClick={() => this.isOpen()}/>
        </div>)
    }
    
    if (loaderOpen===true) {
      return (
        <div className="loader-open">
          <div class="gooey">
            <span class="dot"></span>
            <div class="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="wrapper">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      )
    }
    
    else {
    return (
        <div className="main">
            <NavBar navbarOpen={navbarOpen} onClick={() => this.isOpen()}/>
            <div className="projects">
              <ul className="">
                {projectsArray.map(project => 
                  <li className="one-project"><Parallax 
                      bgImage={project.img}
                      bgImageSrcSet={`${project.img} 720w, ${project.img} 1120w`} 
                      bgImageSizes='auto'
                      renderLayer={percentage => (
                        <div>
                          <div
                            className="parallax-bg-effect"
                            style={{
                              position: "absolute",
                              background: `rgba(131, 88, 167, ${percentage * 0.8})`,
                              left: "50%",
                              top: "50%",                        
                              transform: "translate(-50%,-50%)",
                              width: percentage * 1400,
                              height: percentage * 1200
                              }}
                          />
                        </div>
                      )}
                      blur={{min:-15, max:15}} 
                      strength={800}
                      bgImageAlt="bunch of grapes">
                        <div className='project-card' style={{height: '75vh'}}>
                        {/* <Motion onClick={() => this.scrollTo('first-title')}></Motion> */}
                          
                        </div>
                        <div id='project-title'>
                          <div style={insideStyles}>
                              {project.title}
                          </div>
                        </div>
                  </Parallax></li> 
                )}
              </ul>
            {/* <Parallax  
                bgImage={image7}
                bgImageSrcSet={`${image7} 720w, ${image2} 1120w`} 
                bgImageSizes='auto'
                blur={{min:-15, max:15}} 
                strength={800}
                bgImageAlt="bunch of grapes" 
                
                > */}
                 
                  {/* height is a style property (an object) an must be wrapped in 2 braces */}
                  {/* <div style={{height: '75vh'}}>
                    {/* <div style={insideStyles}>
                      <div className="my-border"><h1>Domaine de la vigne heureuse</h1></div>
                    </div> */}
                    {/* <Motion onClick={() => this.scrollTo('first-title')}></Motion>
                  </div>
            </Parallax> */}

          {/* the Element is setup to point the scroll action in the scrollTo function */}
          {/* <Element name="first-title"><h1>Yar Pirate Ipsum</h1></Element>
          <div className="text-container">
          <p>Knave sloop boom chantey hearties Arr belay Plate Fleet pinnace flogging. Pink scuppers grog schooner warp scuttle spanker cutlass doubloon gun. Prow trysail hearties provost lad schooner scuppers handsomely cackle fruit Jack Tar.Coxswain gabion bilge rat sloop splice the main brace maroon league six pounders take a caulk ballast. Rope's end jib come about chase guns tack belay gangway run a shot across the bow bilge rat quarter. Carouser barkadeer Gold Road me spike walk the plank execution dock clap of thunder bring a spring upon her cable Arr.Lee bucko pressgang squiffy man-of-war stern scuttle me Cat o'nine tails fire ship. Splice the main brace pink broadside boatswain bilge sheet league lass scuttle bowsprit. Maroon clipper fire in the hole walk the plank list red ensign Davy Jones' Locker stern crimp spanker.</p>
          </div>
            <Parallax 
              bgImage={image1} 
              // bgImageSrcSet={`${image7} 720w, ${image2} 1120w`}
              blur={{min:-1, max:3}} 
              bgImageStyle={{height:"auto", width:"100vw"}}
              strength={400}
              >
              <div style={{height: '100vh'}}>
                <Motion onClick={() => this.scrollTo('container')}></Motion>
              </div>
            </Parallax>
          
          <Element name='second-title'><h1>text</h1></Element>
          <div className="text-container">
            <p>Mozzarella cheese strings who moved my cheese. Cheesy feet babybel pecorino boursin cut the cheese rubber cheese the big cheese pepper jack. Brie cheesy grin melted cheese melted cheese cheese and wine mozzarella queso danish fontina. Port-salut chalk and cheese stilton red leicester.</p>
            <p>Cauliflower cheese melted cheese edam. Taleggio rubber cheese emmental st. agur blue cheese cauliflower cheese mascarpone croque monsieur cheesy grin. Red leicester mozzarella babybel fromage cottage cheese when the cheese comes out everybody's happy cheese on toast cheese slices. Bocconcini edam parmesan hard cheese parmesan croque monsieur roquefort say cheese. Gouda.</p>
            <p>Cheese triangles port-salut edam. Rubber cheese smelly cheese mozzarella ricotta fondue mascarpone stinking bishop pepper jack. Paneer taleggio fromage frais danish fontina chalk and cheese cheese strings brie swiss. Paneer parmesan mozzarella brie smelly cheese cow squirty cheese bavarian bergkase. Paneer roquefort when the cheese comes out everybody's happy macaroni cheese.</p>
            <p>Fondue parmesan cheese and wine. Manchego chalk and cheese babybel airedale croque monsieur queso everyone loves cheesy grin. Croque monsieur everyone loves queso gouda brie melted cheese macaroni cheese boursin. Melted cheese caerphilly cheese and wine camembert de normandie cheesy feet danish fontina.</p>
          </div>
          <Element name='container'>
          <div className="">
            <div className="item">
              <h1>container</h1>
            </div>
            <div>
              <ul className="card-container">
                {projectsArray.map(project => 
                  <Card backgroundImage={project.img} title={project.title} link={project.link}></Card>
                )}
              </ul>
            </div>
          </div>
          </Element>   

              
          

            

            <Parallax 
              bgImage={image4} 
              strength={800} 
              
              >
              <div style={{height: '100vh'}}> */}
                {/* <div className="motion">
                  <span className="my-border" onClick={() => this.scrollToTop()}><i className="fas fa-angle-up"></i></span>
                </div> */}
              {/* </div>
            </Parallax> */}

            {/* Arrow to go to the top appears when user scrolls */}
            <div className={this.state.show ? "arrow-fixed" : "hidden"}>
              <div className="motion">
                    <span className="my-border" onClick={() => this.scrollToTop()}><i className="fas fa-angle-up"></i></span>
              </div>
            </div>
            
            </div>
            
            <Element name='third-title'><h1>CONTACT ME</h1></Element>
            <Parallax 
                bgImage={image3} 
                renderLayer={percentage => (
                  <div>
                    <div
                      className="parallax-bg-effect"
                      style={{
                        position: "absolute",
                        background: `rgba(197, 189, 189, ${percentage * 0.4})`,
                        left: "50%",
                        top: "50%",                        
                        transform: "translate(-50%,-50%)",
                        width: percentage * 1400,
                        height: percentage * 1200
                        }}
                    />
                  </div>
                )}
                bgImageStyle={{height:"auto", width:"100vw"}}
                strength={800}
            >
            <span onClick={() => this.scrollTo('third-title')}>
              <div style={{height}}>
                <div style={insideStyles}>
                    <ContactForm loaderOpen={e => this.loaderOpen(e)} scrollToTop={this.scrollToTop}/>
                </div>
      
              </div>
            </span>
            
            </Parallax>
            <Element name='fourth-title'><h1>About me</h1></Element>
            <div className="text-container">
            <p>Mozzarella cheese strings who moved my cheese. Cheesy feet babybel pecorino boursin cut the cheese rubber cheese the big cheese pepper jack. Brie cheesy grin melted cheese melted cheese cheese and wine mozzarella queso danish fontina. Port-salut chalk and cheese stilton red leicester.</p>
            <p>Cauliflower cheese melted cheese edam. Taleggio rubber cheese emmental st. agur blue cheese cauliflower cheese mascarpone croque monsieur cheesy grin. Red leicester mozzarella babybel fromage cottage cheese when the cheese comes out everybody's happy cheese on toast cheese slices. Bocconcini edam parmesan hard cheese parmesan croque monsieur roquefort say cheese. Gouda.</p>
            <p>Cheese triangles port-salut edam. Rubber cheese smelly cheese mozzarella ricotta fondue mascarpone stinking bishop pepper jack. Paneer taleggio fromage frais danish fontina chalk and cheese cheese strings brie swiss. Paneer parmesan mozzarella brie smelly cheese cow squirty cheese bavarian bergkase. Paneer roquefort when the cheese comes out everybody's happy macaroni cheese.</p>
            <p>Fondue parmesan cheese and wine. Manchego chalk and cheese babybel airedale croque monsieur queso everyone loves cheesy grin. Croque monsieur everyone loves queso gouda brie melted cheese macaroni cheese boursin. Melted cheese caerphilly cheese and wine camembert de normandie cheesy feet danish fontina.</p>
            </div>
            <Footer scrollTo={e => this.scrollTo(e)} scrollToTop={() => this.scrollToTop()}/>           
        </div>   
    );
    }
  }
}



export default HomePage;

