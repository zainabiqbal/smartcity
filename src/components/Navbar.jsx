import React, {Component} from 'react';
import  {Link} from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo.png';

class Navbar extends Component {
    render(){

    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-inverse">
        <Link className="navbar-brand"  to="/"  className="brand" ><img src={logo} className="container-fluid" ></img></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="container">
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <Link className="nav-link" to="/Home">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/Feedback">Feedback</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Login"> <span className="glyphicon glyphicon-log-in"></span> Login</Link>
              </li>
            </ul>
          </div>
       </div>
    </nav>
    );
}

}
export default Navbar;