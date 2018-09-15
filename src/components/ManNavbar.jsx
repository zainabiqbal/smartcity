import React, {Component} from 'react';
import  {Link} from 'react-router-dom';
 import './NextNavbar.css';
import fire from '../config/Fire';

class ManNavbar extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout() {
        fire.auth().signOut();
    }


    render(){

    return(
     



          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
         <Link className="navbar-brand" to="/ManagerDashboard">Smart City ©</Link>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon" />
         </button>
         <div className="container">
           <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="nav navbar-nav navbar-right" >
              <li className="nav-item">
                 <Link className="nav-link " to="/ManagerDashboard">Home</Link>
              </li>

              <li className="nav-item">
                 <Link className="nav-link " to="/UpdateManager">Update Profile</Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link" to="/mViewManager">View Managers</Link>
               </li>
               <li className="nav-item">
               <Link className="nav-link" to="/Logout" onClick= {this.logout}>Logout</Link>
             </li>

            </ul>
           </div>
        </div>
      </nav> 

   
    );
}

}
export default ManNavbar;