import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import fire from './config/Fire';
import Dashboard from './pages/Dashboard';

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
        <div>
        
         <Route exact path ="/" component={Home}/>
        <Route  path ="/Login" component={Login}/> 
         {this.state.user ? (<Dashboard/>) : (<Login/>)} 


        </div>
    </Router>
    );
  }
}
export default App;
