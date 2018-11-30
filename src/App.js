import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import fire from './config/Fire';
import Dashboard from './pages/Dashboard';
import ManagerDashboard from './pages/ManagerDashboard';
import Feedback from './pages/Feedback';
import ViewManager from './pages/ViewManager';
import CreateManager from './pages/CreateManager';
import MapContainer from './components/Map.jsx';
import ManMapContainer from './components/ManMAP';
import CreateAdmin from './pages/CreateAdmin';
import AddBin from './pages/AddBin';
import ViewAdmin from './pages/ViewAdmin';
import UpdateManager from './pages/UpdateManager';
import MViewManager from './pages/mViewManager';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      user: null,
     role: ''

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
        this.setState({ user});
        //localStorage.setItem('user', user.uid);
        
        fire.database().ref('Users/' + user.uid).on('value',(snapshot)=>{
          console.log("here");
          var role=snapshot.val().Role;
          console.log(role);
          if (role==='Manager')
          {
           this.setState({role: role});
           console.log('this is it->',this.state.role);
          }
        });
      
      } else {
        this.setState({ user: null });
      }
    });
  }


  render() {
    

    return (

      <Router>
        <Switch>
        <Route path="/" exact component={(this.state.user) ? Dashboard:Home} render={()=>(this.state.user)?<Redirect to='/Dashboard'/>:<Redirect to='/Home'/>} />
        <Route path ="/Home" exact component={Home}/>
        <Route path ="/Feedback" exact component={Feedback}/>
        <Route  path ="/Login" exact component={(this.state.role==='Manager')&&(this.state.user)?ManagerDashboard:(this.state.user)?(Dashboard):Login}/> 
        <Route  path ="/Dashboard" component={(this.state.user)?Dashboard:Login}/> 
        <Route  path ="/CreateManager" component={(this.state.user)?CreateManager:Login}/> 
        <Route  path ="/ViewManager" component={(this.state.user)?ViewManager:Login}/> 
        <Route  path ="/Logout"  component={Home}/> 
        <Route  path ="/Map"  component={(this.state.user)?MapContainer:Login}/>
        <Route  path ="/ManMAP"  component={(this.state.user)?{ManMapContainer}:Login}/>
        <Route  path ="/CreateAdmin" component={(this.state.user)?CreateAdmin:Login}/> 
        <Route  path ="/AddBin"  component={(this.state.user)?{AddBin}:Login}/>
        <Route  path ="/ViewAdmin" component={(this.state.user)?ViewAdmin:Login}/> 
        <Route  path ="/ManagerDashboard" component={(this.state.user)?ManagerDashboard:Login}/> 
        <Route  path ="/mViewManager" component={(this.state.user)?MViewManager:Login}/> 
        <Route  path ="/UpdateManager" component={(this.state.user)?UpdateManager:Login}/> 

        </Switch>
        

    </Router>

        
    );
  }
}
export default App;
