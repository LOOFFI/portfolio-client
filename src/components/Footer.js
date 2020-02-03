import React from 'react';


class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="my-footer">
        <div>
          <h1>Aurélien Rosaz</h1>
        </div>
        <div className="links">
          <p>About</p>
          <p>Contact</p>
        </div>
      </div>
    );
  }
}
 
export default Footer;