import React from 'react';



class Motion extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(this.props)
    this.props.onClick(e.target.value)
  }

  render() { 
    return (
      <div className="motion">
         <span className="my-border" onClick={this.handleClick}><i className="fas fa-angle-down"></i></span>
      </div>
    );
  }
}
 
export default Motion;
  
