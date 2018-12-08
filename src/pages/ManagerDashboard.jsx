import React, {Component} from 'react';
import './Home.css';
import './ManagerDashboard.css';

import fire from '../config/Fire';
// import Header from './pages/Header';
import SideNotif from '../components/SideNotif';
import ManNavbar from '../components/ManNavbar.jsx';
import  {Link} from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import {Jumbotron} from 'react-bootstrap';


class ManagerDashboard extends Component {
  constructor(props) {
    super(props);
    this.View=this.View.bind(this);
    this.state = {
        data:[],
        username:'',
        Counter:0
        
    }
  }


    componentWillMount () {
      this.View();
      this.user();

}

View(){
var arr=[]
fire.database().ref('Users/' ).once('value',snapshot=>{
snapshot.forEach((data)=>{
  var dd=(data.val());
    arr.push(dd)
 
  

})
 this.setState({data: arr})
  console.log("hmm");
  console.log(this.state.data);


});
}
 user()
 {
   fire.database().ref('Users/'+ fire.auth().currentUser.uid + '/username').once('value',snapshot=>{
     this.setState({username:snapshot.val()})

   })
 }

// count()
// {
//   this.setState({Notif:this.state.data.concat([snapshot.val()]),Counter:this.state.Counter+1});

// }
    render(){
        return(
        <div>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="css/bootstrap.min.css" rel="stylesheet" />
        <link href="css/style.css" rel="stylesheet" type="text/css" />
        

        <ManNavbar/>
        <Jumbotron className="jumboman" style={{height:'90%',width:'100%', position:'relative'}}>
                <h1>Welcome, {this.state.username} </h1>
        </Jumbotron>
         
        <br />
        {/* <section id="breadcrumb">
          <div className="container">
            <ol className="breadcrumb">
              <li className="active"> Dashboard</li>
            </ol>
          </div>
        </section> */}
        
        <section id="main">
          {/* <div className="container"> */}
            <div className="row">
              <div className="col-md-2">
                <div className="list-group">
                  {/* <a href="index.html" className="list-group-item active main-color-bg"><span className="glyphicon glyphicon-dashboard" aria-hidden="true" />
                    Dashboard 
                  </a> */}
                  <Link to="/ManMAP" className="list-group-item " style={{color:"MediumSeaGreen"}}><span className="glyphicon glyphicon-map-marker" aria-hidden="true" /> View Map</Link>
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
              <div className="col-md-7">
                <div className="panel panel-default">
                  <div className="panel-heading" style={{backgroundColor: '#095f59'}}>
                    <h3 className="panel-title">Stats Overview</h3>
                  </div>
                  {/* <div className="panel-body">
                    <div className="col-md-3">
                      <div className="well dash-box">
                        <h2><span className="glyphicon glyphicon-user" aria-hidden="true" /> {this.state.Counter}</h2>
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
                  </div> */}
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
                          <th>Role</th>
                        </tr>
                        {this.state.data.map((user) => { 
                       return(
    
                        <tr >
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.Role}</td>
                      </tr>
                                           )
                      })}
                      </tbody></table>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                      <SideNotif/>
              </div>

            </div>
          {/* </div> */}
          
        </section>
       <Footer/>


</div>






















//         <div>
          



//                 <h1>Welcome to Manager Dashboard</h1>
//                <div>


// </div>

    
//         </div>
            
        
             
        )}}    

export default ManagerDashboard;