import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import  Motion from './Motion';
import { Element , animateScroll as scroll, scroller } from 'react-scroll';
import parse from 'html-react-parser';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
    this.state = { 
      scrollPos: 0,
      project: {},
      arrowFixed: "",
      show: false
     }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillMount() {
    const { projectId } = this.props.match.params;
    
    axios.get(`${process.env.REACT_APP_API_URL}/api/projects/${projectId}`)
      .then(res => {
        this.scrollTo('title');
        this.setState({
          project: res.data
        })
      })
      .catch(err => {
        console.log(err);
        alert("something wrong in the projects request")
      })

      window.removeEventListener("scroll", this.handleScroll);
  }

  scrollTo(el) {
    this.setState({
      arrowFixed: "arrow-fixed"
    })
    scroller.scrollTo( el , {
      duration: 1500,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  scrollToTop() {
    this.setState({
      arrowFixed: ""
    })
    scroll.scrollToTop();
  }
  
  handleScroll() {
    const { scrollPos } = this.state;
    this.setState({
      show: document.body.getBoundingClientRect().top < scrollPos
    });
  }
  
  render() { 
    
    const { project } = this.state;
    
    return ( 
      <div className="project-container">
        <Element name='title'></Element>
        <Link id='logo-to-home' to='/'><img src="../../logoPT.jpg" alt="logo"/></Link>
        <Link id='dice-to-home' to='/'><i className="fas fa-dice"></i></Link>
            <div>
            {/* <div className="project-title title">
                <h1>{project.title}</h1>
            </div> */}
            
            <div className='project-img'>
                <img src={window.innerWidth<550 ? `${project.img}` : `${project.img_large}` } alt="project-img"/>
            </div>
            
            <Motion onClick={(e) => this.scrollTo('description')}/>
            
            </div>
            <div>
            <Element className="description" name='description'>
              {parse(`<div>${project.description}</div>`)}
              <div className="hover-effect"><a className="nav-min" href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a></div>
            </Element>
            </div>

            <div className={this.state.show ? "arrow-fixed" : "hidden"}>
              <div className="motion">
                    <span className="my-border my-border-up" onClick={() => this.scrollToTop()}><i className="fas fa-angle-up"></i></span>
              </div>
            </div>
        
      </div>

     );
  }
}
 
export default Project;