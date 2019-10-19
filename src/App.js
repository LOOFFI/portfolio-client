



import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'
import NavBar from './components/NavBar.js';
import NotFound from './components/NotFound';
import Footer from './components/Footer.js';
import HomePage from './components/HomePage.js';




class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }


  render() {

    const { currentUser } = this.state;
    
    return (
    <main>
      <header>
          {/* <NavBar/>  */}
      </header>
          
      
            <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route path="/notfound" component={ NotFound }/>
            </Switch>
      

      {/* <Footer/> */}
      
    </main>
    );
  }
}

export default App;
