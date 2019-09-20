import React, {Component} from  'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from "./components/layout/Navbar"
import ProjectDetailed from "./components/projects/ProjectDetailed"
import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"
import CreateProject from './components/projects/CreateProject'

import Dashboard from './components/dashboard/Dashboard'
class App extends Component {
  


  render(){
   
 return(
  <BrowserRouter>
  <div className="app">
     <Navbar />
    
     <Switch>
       <Route exact path='/' component={Dashboard} />
       <Route path='/project/:id' component={ProjectDetailed} />
       <Route path='/Signin' component={SignIn} />
       <Route path='/Signup' component={SignUp} />
       <Route path='/create' component={CreateProject} />
     </Switch>
</div>
</BrowserRouter>
 
  
 );
    
  
}
}
export default App;