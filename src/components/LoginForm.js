import React from 'react';
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: "",
      originalPassword: ""
     }
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ [event.target.name] : value });
  }


  handleSubmit(event) {
    event.preventDefault();
    
    axios.post(`${process.env.REACT_APP_API_URL}/api/login`, this.state)
      .then(res => {
        console.log(res.data);
        const { onLogin } = this.props;
        onLogin(res.data.userDoc);
      })
      .catch(err => {
          console.log(err);
          alert("Sorry! Something went wrong.");
        })
         
  }



  render() { 

    const { currentUser } = this.props;
    const { email, originalPassword } = this.state;

    if (currentUser) {
      return <Redirect to='/project-creation'/>
    }

    return ( 
      <section className="container mx-auto my-5">

        <Link id='logo-to-home' to='/'><img src="../../logoPT.jpg" alt="logo"/></Link>
        <Link id='dice-to-home' to='/'><i className="fas fa-dice"></i></Link>
        
        <h1>LOG IN</h1>

        <form onSubmit={event => this.handleSubmit(event)}>
          <div className="container mx-auto my-5">
          <div className="form-group">
              <label>Email</label>
              <input className='form-control' value={email} name='email' type="email" onChange={event => this.handleChange(event)}/>
          </div>
          <div className="form-group">
              <label>Password</label>
              <input className='form-control' value={originalPassword} name='originalPassword' type="password" onChange={event => this.handleChange(event)}/>
          </div>

          <div className="btn-signup">
            <button className="btn btn-outline-primary btn-sign">Log In</button>
          </div>
          </div>
        </form>
      </section>
     );
  }
}
 
export default Login;