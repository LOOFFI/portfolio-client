import React from 'react'

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    
    const divStyle = {
      backgroundImage: `url(${this.props.backgroundImage})`,
    };
    const divStyle2 = {
      borderRadius: '10px'
    }
    const {title} = this.props;

    return ( 
      <li className="card">
          {/* The border-radius style (divStyle2) is in the parent div to keep it when the backgroung image is zoomed in */}
          <div className="wprock-img-zoom-hover" >
            <div className="wprock-img-zoom" style={divStyle2}>
              <div className="card-img" style={divStyle}>
              </div>
                
            </div>
            <a href='#' className="card-text">
              <h2>{title}</h2>   
              On va mettre un effet de zoom 
            </a>
          </div>
                 
      </li>
     );
  }
}
 
export default Card;