import React, {Component} from 'react';
import './Dashboard.css';
// import fire from '../config/Fire';
// import Header from './pages/Header';
import Card from '../components/Card.jsx';
import NextNavbar from '../components/NextNavbar.jsx';
// import CreateManager from '../pages/CreateManager';
// import ViewManager from '../pages/ViewManager';
import  {Link} from 'react-router-dom';
import Chart from '../components/chart';

class Dashboard extends Component {
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
 
<NextNavbar/>
                <h1 className="font-weight-bold"  >Welcome {this.props.user}</h1>

                <Card/>
                <br />
        <section id="breadcrumb">
          <div className="container">
            <ol className="breadcrumb">
              <li className="active"> Stats</li>
            </ol>
          </div>
        </section>
                <div className="container">
                <div className="col-md-9">
              <Chart/>
       </div>

        <div className="col-md-3">
                <div className="list-group">
                  <a href="index.html" className="list-group-item active main-color-bg"><span className="glyphicon glyphicon-dashboard" aria-hidden="true" />
                    Dashboard <span className="badge">12</span>
                  </a>
                  <Link to="/Map" className="list-group-item"><span className="glyphicon glyphicon-map-marker" aria-hidden="true" /> View Map<span className="badge">25</span></Link>
                  <a href="posts.html" className="list-group-item"><span className="glyphicon glyphicon-user" aria-hidden="true" /> Contact Manager<span className="badge">126</span></a>
                  <Link to="/AddBin" className="list-group-item"><span className="glyphicon glyphicon-road" aria-hidden="true" /> Add new waste bin<span className="badge">12</span></Link>
                </div>
                <div className="well">
                  <h4> Sales</h4>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                      60%
                    </div>
                  </div>
                  <h4>Profit</h4>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}>
                      40%
                    </div>
                  </div>
                </div>
              </div>
             
       
      
      </div>            
</div>
        )}}    

export default Dashboard;