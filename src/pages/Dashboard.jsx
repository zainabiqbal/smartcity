import React, {Component} from 'react';
import './Dashboard.css';
// import fire from '../config/Fire';
import Footer from '../components/Footer.jsx';
import Card from '../components/Card.jsx';
import NextNavbar from '../components/NextNavbar.jsx';
// import CreateManager from '../pages/CreateManager';
// import ViewManager from '../pages/ViewManager';
import  {Link} from 'react-router-dom';
import Chart from '../components/chart';
import SideNotif from '../components/SideNotif';
import Calender from '../components/Calender';
import {Pager,Jumbotron} from 'react-bootstrap';
import Pie from '../components/PieChart';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        }
    }


 
    render(){
        return(
        
        <div >
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="css/bootstrap.min.css" rel="stylesheet" />
        <link href="css/style.css" rel="stylesheet" type="text/css" />
 
      <NextNavbar/>
    <div className="container"><h2 style={{fontFamily:'verdana',textAlign:'left' }}>Welcome, Admin</h2></div>  
      <br/>

      {/* <Jumbotron   style={{height:'60%',width:'100%'}}>  
      </Jumbotron> */}

    <div className='row'>
          <div className='col-md-9'>
          <Jumbotron   style={{height:'60%',width:'100%'}}>  
      </Jumbotron>
          </div>
          <div className='col-md-3'>
          <SideNotif/>
</div>
  </div>   



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
      <div className="row">
      <div className="col-md-7">
      <Calender/>
      </div>
      <div className="col-md-5">
                    <Chart/>
        </div>
      </div> 
        
        </div>   
        <Footer/>   
  
</div>
        )}} 

export default Dashboard;