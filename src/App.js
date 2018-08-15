import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import fire from './config/Fire';
import Dashboard from './pages/Dashboard';
// import Header from './pages/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

componentDidMount(){
  this.authListener();
}
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
     // console.log(user);
      if (user) {
        this.setState({ user });
        //localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
       // localStorage.removeItem('user');
      }
    });
  }



  render() {
    return (
      <Router>

      
        <Switch>
        <Route path='/' exact component={(this.state.user)?Dashboard:Login} render={()=>(this.state.user)?<Redirect to='/Dashboard'/>:<Redirect to='/Login'/>} />
        <Route path ="/Home" exact component={Home}/>
        <Route  path ="/Login" exact component={(this.state.user)?Dashboard:Login}/> 
        <Route  path ="/Dashboard" component={(this.state.user)?Dashboard:Login}/> 
         
         {/* {this.state.user ? (<Dashboard/>) : (<Login/>)}  */}
        </Switch>
    </Router>
   
        
    );
  }
}
export default App;
