import React from 'react';
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import { Element , animateScroll as scroll, scroller } from 'react-scroll'
import NavBar from './NavBar';
import ContactForm from './ContactForm';
import axios from 'axios';
import Footer from './Footer';


const insideStyles = {  
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

class HomePage extends React.Component {
  constructor(props) {
  super(props);
  this.state={
      beginning : true,
      c:0,
      count:0,
      image1 : "/public/logo.jpg",
      image2 : "https://images.unsplash.com/photo-1477093782505-e10aaeb27c6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      image3 : "https://images.unsplash.com/photo-1474226004578-62743874270f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      image4 : "https://images.unsplash.com/photo-1464638681273-0962e9b53566?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      image5 : "https://images.unsplash.com/photo-1505051508008-923feaf90180?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
      image6 : "https://images.unsplash.com/photo-1526137630052-dc2c4693f0d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      image7 : "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80",
      height : 600,
      show : false,
      scrollPos : 0,
      navbarOpen : false,
      projectsArray : [],
      loaderOpen : false,
      hideFooter: false,
      id: null,
      title: "coucou",
      description: "coucou c'est la description",
      link: "le link",
      img: "https://images.unsplash.com/photo-1526137630052-dc2c4693f0d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  this.handleScroll = this.handleScroll.bind(this);
  this.scrollToTop = this.scrollToTop.bind(this);
  this.scrollToBottom = this.scrollToBottom.bind(this);
  this.scrollTo = this.scrollTo.bind(this);
  this.firstLoading = this.firstLoading.bind(this);
  this.scrollToBis = this.scrollToBis.bind(this);
}

componentDidMount() {
  this.interval = setInterval(() => this.firstLoading(),20);
 
  window.addEventListener("scroll", this.handleScroll);
 
  axios.get("http://localhost:4000/api/projects")
    .then(res => {
      console.log(res);
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
    show: document.body.getBoundingClientRect().top < scrollPos,
    hideFooter: (window.innerHeight *2.3 < Math.abs(document.body.getBoundingClientRect().top))&&(window.innerHeight *4 > Math.abs(document.body.getBoundingClientRect().top))
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

scrollToBis(el) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(scroller.scrollTo(el,{
        duration: 1200,
        smooth: 'easeInOutQuart'
      }))
    }, 2000);
  });
}

async scrollTo(el) {
  this.setState({
    arrowFixed: "arrow-fixed"
  })
  scroller.scrollTo( el , {
    duration: 3000,
    delay: 100,
    smooth: 'easeInOutQuart',
    isDynamic: true,
    ignoreCancelEvents: true
  })
  await this.scrollToBis(el)
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

    const {c, beginning, image5, height, navbarOpen, projectsArray, loaderOpen } = this.state;
    
    if (beginning&&window.history.length<2) {
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
            <Element name="projects"/>
            <div className="projects">
            
              <ul className="">
                {projectsArray.map((project,index) => 

                <Link to={`/project/${project._id}`} key={index}>
                  <li className="one-project" >
                    <Parallax 
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
                              height: percentage * 1200,
                              fontSize: '5em'
                              }}
                          />
                          <div id='project-title'>
                            
                          
                         <div style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%,-50%)",
                              fontSize: `${percentage * 4}rem`
                              }}
                         >
                           <span className="project-title">{project.title}</span>
                         </div>
                       </div>
                        </div>
                         
                      )}
                      blur={{min:-15, max:15}} 
                      strength={800}
                      bgImageAlt="bunch of grapes">
                        <div className='project-card' style={{height: '75vh'}}>
                        {/* <Motion onClick={() => this.scrollTo('first-title')}></Motion> */}
                          
                        </div>
                       
                  </Parallax></li> 
                  </Link>
                )}
              </ul>
           
            {/* Arrow to go to the top appears when user scrolls */}
            <div className={this.state.show ? "arrow-fixed" : "hidden"}>
              <div className="motion">
                    <span className="my-border my-border-up" onClick={() => this.scrollToTop()}><i className="fas fa-angle-up"></i></span>
              </div>
            </div>
            
            </div>

            <Element name='third-title'/>
            <div className="contact">
            <h1>CONTACT ME</h1>
            <Parallax 
                bgImage={image5} 
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
                        height: percentage * 1200,
                        
                        }}
                    />
                  </div>
                )}
                strength={800}
            >
            <span onClick={() => this.scrollTo('third-title')}>
              <div style={{height}}>
                <div style={insideStyles}>
                    <ContactForm loaderOpen={e => this.loaderOpen(e)} scrollToTop={this.scrollToTop} onClick={() => this.hideContact()}/>
                </div>
      
              </div>
            </span>
            
            </Parallax>
            </div>
            
              <Element name='fourth-title'><h1>About me</h1></Element>
            <div className="text-container">
              <h2>FULLSTACK DEVELOPMENT</h2>
              <h2>REACT.JS / NODE.JS / MONGODB</h2>
              <div className="mt-3">
                <p>Fullstack developer for one year, I m based in Paris, France.</p>
                <p>I studied economics and worked in luxury retail for 15 years. Loving web development, I decided to make it my job.</p>
              </div>
            </div>
            
            <div className='to-login'>
             <Link to="/login">Only for admin</Link>
            </div>

            <div className={!this.state.hideFooter ? "footer-visible" : "hidden"}>
              <Footer scrollTo={e => this.scrollTo(e)} scrollToTop={() => this.scrollToTop()}/>           
            </div>

        </div>   
    );
    }
  }
}



export default HomePage;

