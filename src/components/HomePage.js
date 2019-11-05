import React, { Component } from 'react';
import { Parallax, Background } from "react-parallax";
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import  Motion from './Motion';
import NavBar from './NavBar';


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
      image1 : "https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      image2 : "https://images.unsplash.com/photo-1547084266-7501a964bf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
      image3 : "https://images.unsplash.com/photo-1526137630052-dc2c4693f0d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      image4 : "https://images.unsplash.com/photo-1464638681273-0962e9b53566?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      image5 : "https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      image6 : "https://images.unsplash.com/photo-1526137630052-dc2c4693f0d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      height : 600,
      show : false,
      scrollPos : 0,
      navbarOpen : false
  }
  this.handleScroll = this.handleScroll.bind(this);
  this.scrollToTop = this.scrollToTop.bind(this);
  this.scrollToBottom = this.scrollToBottom.bind(this);
  this.scrollTo = this.scrollTo.bind(this);
}

componentDidMount() {
  window.addEventListener("scroll", this.handleScroll);
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
  
  render() {

    const {image1, image2, image3, image4, image6, height, navbarOpen} = this.state;

    if (navbarOpen===true) {
      return (
        <div className="main">
            <NavBar navbarOpen={navbarOpen} onClick={() => this.isOpen()}/>
        </div>)
    }
    else {
    return (
        <div className="main">
            <NavBar navbarOpen={navbarOpen} onClick={() => this.isOpen()}/>
            <Parallax  
                bgImageSrcSet={`${image6} 720w, ${image2} 1120w`} 
                bgImageSizes="100vw"
                bgImage={image2}
                blur={{min:-1, max:3}} 
                bgImageAlt="bunch of grapes" 
                bgImageStyle={{height:"auto", width:"100vw"}}
                
                >
                  {/* height is a style property an must be wrapped in 2 braces */}
                  <div style={{height: height+200}}>
                    <div style={insideStyles}>
                      <div className="border"><h1>Domaine de la vigne heureuse</h1></div>
                    </div>
                    <Motion onClick={() => this.scrollTo('first-title')}></Motion>
                  </div>
            </Parallax>

          {/* the Element is setup to point the scroll action in the scrollTo function */}
          <Element name="first-title"><h1>Yar Pirate Ipsum</h1></Element>
          <p>Knave sloop boom chantey hearties Arr belay Plate Fleet pinnace flogging. Pink scuppers grog schooner warp scuttle spanker cutlass doubloon gun. Prow trysail hearties provost lad schooner scuppers handsomely cackle fruit Jack Tar.Coxswain gabion bilge rat sloop splice the main brace maroon league six pounders take a caulk ballast. Rope's end jib come about chase guns tack belay gangway run a shot across the bow bilge rat quarter. Carouser barkadeer Gold Road me spike walk the plank execution dock clap of thunder bring a spring upon her cable Arr.Lee bucko pressgang squiffy man-of-war stern scuttle me Cat o'nine tails fire ship. Splice the main brace pink broadside boatswain bilge sheet league lass scuttle bowsprit. Maroon clipper fire in the hole walk the plank list red ensign Davy Jones' Locker stern crimp spanker.</p>
            <Parallax 
              bgImage={image1} 
              blur={{min:-1, max:3}} 
              bgImageStyle={{height:"auto", width:"100vw"}}
              >
              <div style={{height: height+200}}>
                <Motion onClick={() => this.scrollTo('second-title')}></Motion>
              </div>
            </Parallax>
          
          <Element name='second-title'><h1>text</h1></Element>
          <p>Mozzarella cheese strings who moved my cheese. Cheesy feet babybel pecorino boursin cut the cheese rubber cheese the big cheese pepper jack. Brie cheesy grin melted cheese melted cheese cheese and wine mozzarella queso danish fontina. Port-salut chalk and cheese stilton red leicester.</p>
          <p>Cauliflower cheese melted cheese edam. Taleggio rubber cheese emmental st. agur blue cheese cauliflower cheese mascarpone croque monsieur cheesy grin. Red leicester mozzarella babybel fromage cottage cheese when the cheese comes out everybody's happy cheese on toast cheese slices. Bocconcini edam parmesan hard cheese parmesan croque monsieur roquefort say cheese. Gouda.</p>
          <p>Cheese triangles port-salut edam. Rubber cheese smelly cheese mozzarella ricotta fondue mascarpone stinking bishop pepper jack. Paneer taleggio fromage frais danish fontina chalk and cheese cheese strings brie swiss. Paneer parmesan mozzarella brie smelly cheese cow squirty cheese bavarian bergkase. Paneer roquefort when the cheese comes out everybody's happy macaroni cheese.</p>
          <p>Fondue parmesan cheese and wine. Manchego chalk and cheese babybel airedale croque monsieur queso everyone loves cheesy grin. Croque monsieur everyone loves queso gouda brie melted cheese macaroni cheese boursin. Melted cheese caerphilly cheese and wine camembert de normandie cheesy feet danish fontina.</p>
      
              

              
            <Parallax 
                bgImage={image3} 
                // strength={500}
                renderLayer={percentage => (
                  <div>
                    <div
                      style={{
                        position: "absolute",
                        background: `rgba(197, 189, 189, ${percentage * 1})`,
                        left: "50%",
                        top: "50%",                        
                        transform: "translate(-50%,-50%)",
                        width: percentage * 1000,
                        height: percentage * 500
                      }}
                    />
                  </div>
                )}
                bgImageStyle={{height:"auto", width:"100vw"}}
            >
              <div style={{height}}>
                <div style={insideStyles}><h1>Ceci est un texte à effet</h1></div>
                <Motion onClick={() => this.scrollTo('third-title')}></Motion>
              </div>
            </Parallax>

            <Element name='third-title'><h1>Third Title</h1></Element>
            

            <Parallax 
              bgImage={image4} 
              // strength={500} 
              bgImageStyle={{height:"auto", width:"100vw"}}
              >
              <div style={{height: height + 200}}>
                <div className="motion">
                  <span className="border" onClick={() => this.scrollToTop()}><i className="fas fa-angle-up"></i></span>
                </div>
              </div>
            </Parallax>

            {/* Arrow to go to the top appears when user scrolls */}
            <div className={this.state.show ? "arrow-fixed" : "hidden"}>
              <div className="motion">
                    <span className="border" onClick={() => this.scrollToTop()}><i className="fas fa-angle-up"></i></span>
              </div>
            </div>
            

        </div>   
    );
    }
  }
}



export default HomePage;

