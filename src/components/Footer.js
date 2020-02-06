import React from 'react';


class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e==='top' ? this.props.scrollToTop() : this.props.scrollTo(e)
  }


  render() { 
    
    return (
      <div className="my-footer">
        <div>
          <span onClick={e => this.handleClick('top')}><h1>Aurélien Rosaz</h1></span>
        </div>
        <div className="links">
          <span onClick={e => this.handleClick('fourth-title')}><p>About</p></span>
          <span onClick={e => this.handleClick('third-title')}><p>Contact</p></span>
        </div>
      </div>
    );
  }
}
 
export default Footer;