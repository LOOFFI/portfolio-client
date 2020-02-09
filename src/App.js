


import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'
import NotFound from './components/NotFound';
import HomePage from './components/HomePage.js';
import Project from './components/Project.js'



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
             
      
            <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route path="/notfound" component={ NotFound }/>
              <Route exact path="/project/:projectId" component={ Project }/>
            </Switch>
      

     
    </main>
    );
  }
}

export default App;
