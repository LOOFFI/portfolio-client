import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  
  
  handleClick(e) {
    this.props.onClick(e.target.value);
  }



  render() { 
    
    const {navbarOpen} = this.props;
    if (navbarOpen) {
      return ( 
        <div className="">
          <aside className="open">

           <div className="navbar">
            <div>
              <img src="../../logoGTnav.jpg" alt="logo"/>
            </div>
            <div className="menu-icon is-opened" onClick={this.handleClick}>
              <span></span>
            </div>
           </div>

           <nav>
             <ul className="my-navbar-nav">
               <li className="my-nav-item" id="first-nav">
                 <div className="hover-effect"><a className="nav-min" href="https://iron-proj2.herokuapp.com/posts" target="_blank" rel="noopener noreferrer">First Project</a></div>
               </li>
               <li className="my-nav-item" id="second-nav">
                 <div className="hover-effect"><a className="nav-min" href="https://appnap.herokuapp.com/" target="_blank" rel="noopener noreferrer">Second Project</a></div>
               </li>
               <li className="my-nav-item" id="third-nav">
                 <div className="hover-effect"><a className="nav-min" href="https://la-vigne-heureuse.herokuapp.com/" target="_blank" rel="noopener noreferrer">Third Project</a></div>
               </li>
               <li className="my-nav-item" id="fourth-nav">
                 <div className="hover-effect"><a className="nav-min" href="https://la-vigne-heureuse.herokuapp.com/" target="_blank" rel="noopener noreferrer">Fourth Project</a></div>
               </li>
             </ul>
           </nav>
          </aside>
        </div>
       );
    }
    else {
      return ( 
        <div className="navbar">
          <div>
            {/* <h1 id="main-title">A.R.</h1> */}
            <img src="../../logoGT.jpg" alt="logo"/>
          </div>
          <div className="menu-icon" onClick={this.handleClick}>
            <span></span>
          </div>
        </div>
       ); 
    }
    
  }
}
 
export default NavBar;