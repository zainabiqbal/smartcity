import React, {Component} from 'react';
import  {Link} from 'react-router-dom';
import '../pages/Home.css';
import fire from '../config/Fire';
import {DropdownButton, Button, Badge} from 'react-bootstrap';
import logo from '../images/logo.png';

class ManNavbar extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.View=this.View.bind(this);
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
 fire.database().ref('Notifications/' ).on('child_added',snapshot=>{
    //  console.log("jjjjjjjjjjjjjjj",snapshot.val());
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
      <Link className="navbar-brand"  to="/"  class="brand" ><img src={logo} className="container-fluid" ></img></Link>
      <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbarCollapse" >
      <span className="icon-bar"></span> 
      <span className="icon-bar"></span> 
      <span className="icon-bar"></span> 

      </button>

      <div className="container">
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="nav navbar-nav navbar-right">
            <li className="nav-item">
               <Link className="nav-link " to="/ManagerDashboard" style={{color:"white"}}><span className="glyphicon glyphicon-home"></span> Home</Link>
            </li>

                <li className="nav-item dropdown" >
                    <Link className="nav-link " to="/UpdateManager" style={{color:"white"}}> <span className="glyphicon glyphicon-cog"></span>  Update Manager</Link>
                  </li>
              
          <li className="nav-item dropdown">
              <Link className="nav-link" to="/mViewManager" style={{color:"white"}}><span className="glyphicon glyphicon-user"></span>  View All Managers</Link>
       </li>

        <li className="nav-item" >
                      <Link className="nav-link" to="/ManMAP" style={{color:"white"}}><span className="glyphicon glyphicon-map-marker"></span>  View Map</Link>
                    </li>

            <li className="nav-item" >
              <Link className="nav-link" to="/Logout" onClick= {this.logout} style={{color:"orange",marginLeft:'15px'}}><span className="glyphicon glyphicon-log-in"></span>  Logout</Link>
            </li>

          </ul>
          
        </div>
     </div>
    
                  
    </nav>





















  //     <nav className="navbar navbar-dark bg-dark mb-4">
  //     <Link className="navbar-brand" to="/ManagerDashboard">Smart City ©</Link>
  //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
  //       <span className="navbar-toggler-icon"></span>
  //     </button>
  //   <div className="container">
  //       <div className="collapse navbar-collapse" id="navbarCollapse">
  //         <ul className="navbar-nav ml-auto">
  //           <li className="nav-item active">
  //             <Link className="nav-link" to="/ManagerDashboard">Home </Link>
  //           </li>
  //           <li className="nav-item">
  //             <Link className="nav-link " to="/UpdateManager">Update Manager</Link>
  //           </li>
  //           <li className="nav-item">
  //             <Link className="nav-link" to="/mViewManager">View Managers</Link>
  //           </li>
  //           <li className="nav-item">
  //             <Link className="nav-link" to="/ManMap">View Map</Link>
  //           </li>
  //           <li className="nav-item">
  //              <Link className="nav-link" to="/Logout" onClick= {this.logout}>Logout</Link>
  //            </li>

  //         </ul>
  //       </div>
  //    </div>
  // </nav>








   
    );
}

}
export default ManNavbar;