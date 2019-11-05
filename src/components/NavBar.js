import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  
  
  handleClick(e) {
    console.log(this.props);
    this.props.onClick(e.target.value);
  }



  render() { 
    
    const {navbarOpen} = this.props;
    if (navbarOpen) {
      return ( 
        <div className="">
          <aside className="open">

           <div className="navbar">
            <div></div>
            <h1 id="main-title">Domaine de la vigne heureuse</h1>
            <div className="menu-icon is-opened" onClick={this.handleClick}>
              <span></span>
            </div>
           </div>

           <nav>
             <ul className="navbar-nav">
               <li className="nav-item" id="first-nav">
                 <div className="hover-effect"><a className="nav-min" href="#">premier</a></div>
               </li>
               <li className="nav-item" id="second-nav">
                 <div className="hover-effect"><a className="nav-min" href="#">second</a></div>
               </li>
               <li className="nav-item" id="third-nav">
                 <div className="hover-effect"><a className="nav-min" href="#">troisième</a></div>
               </li>
               <li className="nav-item" id="fourth-nav">
                 <div className="hover-effect"><a className="nav-min" href="#">Quatrième</a></div>
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
          <div></div>
          <h1 id="main-title">Domaine de la vigne heureuse</h1>
          <div className="menu-icon" onClick={this.handleClick}>
            <span></span>
          </div>
        </div>
       ); 
    }
    
  }
}
 
export default NavBar;