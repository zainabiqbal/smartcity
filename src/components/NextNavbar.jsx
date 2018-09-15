import React, {Component} from 'react';
import  {Link} from 'react-router-dom';
// import  'react-bootstrap/lib';
// import './NextNavbar.css';
import fire from '../config/Fire';



class NextNavbar extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout() {
        fire.auth().signOut();
    }
    




    render(){

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark"  >
        <Link className="navbar-brand" to="/">Smart City ©</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">

              <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" to='/' id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Admin Settings
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <Link className="dropdown-item"  to="/CreateAdmin">Create Admin</Link>
          <Link className="dropdown-item" to="/ViewAdmin">View Admin</Link>
          <Link className="dropdown-item" to="/DeleteAdmin">Delete Admin</Link>
        </div>
      </li>
            
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Manager Settings
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link className="dropdown-item"  to="/CreateManager">Create Manager</Link>
          <Link className="dropdown-item" to="/ViewManager">View Managers</Link>
          <Link className="dropdown-item" to="/DeleteManager">Delete Manager</Link>
        </div>
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
export default NextNavbar;