import React, {Component} from 'react';
import './ManagerDashboard.css';
// import fire from '../config/Fire';
// import Header from './pages/Header';
// import Sidebar from './pages/Sidebar';
import ManNavbar from '../components/ManNavbar.jsx';
import  {Link} from 'react-router-dom';

class ManagerDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }



    render(){
        return(
        <div>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
        {/*---- Include the above in your HEAD tag --------*/}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Bootstrap core CSS */}
        <link href="css/bootstrap.min.css" rel="stylesheet" />
        <link href="css/style.css" rel="stylesheet" type="text/css" />
        <header id="header">
        <ManNavbar/>
          <div className="container">
            <div className="row">
              <div className="col-md-10">
                <h1>Welcome </h1>
              </div>
         
            </div>
          </div>
        </header>
        <br />
        <section id="breadcrumb">
          <div className="container">
            <ol className="breadcrumb">
              <li className="active"> Dashboard</li>
            </ol>
          </div>
        </section>
        <section id="main">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="list-group">
                  <a href="index.html" className="list-group-item active main-color-bg"><span className="glyphicon glyphicon-dashboard" aria-hidden="true" />
                    Dashboard <span className="badge">12</span>
                  </a>
                  <Link to="/Map" className="list-group-item"><span className="glyphicon glyphicon-map-marker" aria-hidden="true" /> View Map<span className="badge">25</span></Link>
                  <a href="posts.html" className="list-group-item"><span className="glyphicon glyphicon-user" aria-hidden="true" /> Contact Admin<span className="badge">126</span></a>
                  <a href="users.html" className="list-group-item"><span className="glyphicon glyphicon-road" aria-hidden="true" /> Contact Drivers<span className="badge">12</span></a>
                </div>
                <div className="well">
                  <h4> Space Used</h4>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                      60%
                    </div>
                  </div>
                  <h4>Progress</h4>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}>
                      40%
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="panel panel-default">
                  <div className="panel-heading" style={{backgroundColor: '#095f59'}}>
                    <h3 className="panel-title">Stats Overview</h3>
                  </div>
                  <div className="panel-body">
                    <div className="col-md-3">
                      <div className="well dash-box">
                        <h2><span className="glyphicon glyphicon-user" aria-hidden="true" /> 12</h2>
                        <h4>Users</h4>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="well dash-box">
                        <h2><span className="glyphicon glyphicon-list-alt" aria-hidden="true" /> 25</h2>
                        <h4>Pages</h4>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="well dash-box">
                        <h2><span className="glyphicon glyphicon-pencil" aria-hidden="true" />126</h2>
                        <h4>Posts</h4>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="well dash-box">
                        <h2><span className="glyphicon glyphicon-stats" aria-hidden="true" /> 2129</h2>
                        <h4>Visitores</h4>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Latest User*/}
                <div className="panel panel-default">
                  <div className="panel-heading" style={{backgroundColor: '#095f59'}} panel-title="true">Latest Users
                  </div>
                  <div className="panel-body">
                    <table className="table table-striped table-hover">
                      <tbody><tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Joined</th>
                        </tr>
                        <tr>
                          <td>Sheheryar Munawar</td>
                          <td>sherry@gmail.com</td>
                          <td>Dec 13,2014</td>
                        </tr>
                        <tr>
                          <td>Ali Rehman</td>
                          <td>Ali121@gmail.com</td>
                          <td>Feb 15,2014</td>
                        </tr>
                        <tr>
                          <td>Abdullah Bajwa</td>
                          <td>adb4_33@yahoo.com</td>
                          <td>Aug 17, 2015</td>
                        </tr>
                      </tbody></table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer id="footer">
          <p>Copyright : Efficient Data COllection in Smart city<br />2018</p>
        </footer>



</div>






















//         <div>
          



//                 <h1>Welcome to Manager Dashboard</h1>
//                <div>


// </div>

    
//         </div>
            
        
             
        )}}    

export default ManagerDashboard;