import React, {Component} from 'react';
import  {Link} from 'react-router-dom';
// import  'react-bootstrap/lib';
import './Navbar.css';
import fire from '../config/Fire';
import logo from '../images/logo.png';


class NextNavbar extends Component {
    constructor(props) {
        super(props);
        this.View=this.View.bind(this);
        this.logout = this.logout.bind(this);
        this.state = {
          Notif:[],
          Counter:0
        
      }
    }
    logout() {
        fire.auth().signOut();
    }
    
    componentWillMount () {
      this.View();
}
    
View(){
  var arr=[]
 fire.database().ref('Notifications/' ).on('child_added',snapshot=>{
     console.log("jjjjjjjjjjjjjjj",snapshot.val());
     if (snapshot.val().Level >= 75)
     {
      this.setState({Notif:this.state.Notif.concat([snapshot.val()]),Counter:this.state.Counter+1});
      console.log("here notification", this.state.Counter)
     }

   
   });
   }

  


    render(){

    return(


      
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-inverse" id="mynav" style={{fontFamily:'verdana'}}>
        <Link className="navbar-brand"  to="/"  className="brand" ><img src={logo} className="container-fluid" ></img></Link>
        <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbarCollapse" >
        <span className="icon-bar"></span> 
        <span className="icon-bar"></span> 
        <span className="icon-bar"></span> 

        </button>

        <div className="container">
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="nav-item">
                 <Link className="nav-link " to="/Dashboard" style={{color:"white"}}><span className="glyphicon glyphicon-home"></span> Home</Link>
              </li>

                  <li className="nav-item dropdown" >
            <a className="nav-link dropdown-toggle" style={{color:"white"}} to='/' id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="glyphicon glyphicon-cog"></span> Admin Settings
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <Link className="dropdown-item"  to="/CreateAdmin">Create Admin</Link>
              <Link className="dropdown-item" to="/ViewAdmin">View Admin</Link>
              <Link className="dropdown-item" to="/DeleteAdmin">Delete Admin</Link>
            </div>
          </li>
                
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" style={{color:"white"}} href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="glyphicon glyphicon-cog"></span> Manager Settings
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link className="dropdown-item"  to="/CreateManager">Create Manager</Link>
              <Link className="dropdown-item" to="/ViewManager">View Managers</Link>
              <Link className="dropdown-item" to="/DeleteManager">Delete Manager</Link>
            </div>
          </li>

          <li className="nav-item" >
                        <Link className="nav-link" to="/Map" style={{color:"white"}}><span className="glyphicon glyphicon-map-marker"></span>  View Map</Link>
                      </li>
              <li className="nav-item" >
                <Link className="nav-link" to="/Logout" onClick= {this.logout} style={{color:"orange",marginLeft:'15px'}}><span className="glyphicon glyphicon-log-in"></span>  Logout</Link>
              </li>

            </ul>
            
          </div>
       </div>
      
                    
      </nav>

    );
}

}
export default NextNavbar;