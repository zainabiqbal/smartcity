import React from 'react';
// import './table.css';
import fire from '../config/Fire';
import NextNavbar from '../components/NextNavbar.jsx';
import {Table} from 'react-bootstrap';
// import { forEach } from 'gl-matrix/src/gl-matrix/vec3';
// import firebase from 'firebase';
import Footer from '../components/Footer.jsx';


class ViewAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.View=this.View.bind(this);
        this.state = {
            data:[]
            
        }
      }
     
      componentWillMount () {
                this.View();
        }
    View(){
         var arr=[]
        fire.database().ref('Users/' ).once('value',snapshot=>{
          snapshot.forEach((data)=>{
            var dd=(data.val());
            if(dd.Role==='Admin'){
              arr.push(dd)
            }
     })
           this.setState({data: arr})
            console.log("idher");
            console.log(this.state.data);

          
          });
          }
       

    render()
      {
        return(
                <div >
                  <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />

                <NextNavbar/>
                <div className="container">
                  <div className="row">
                  <div className="col-md-2"></div>
                  <div className="col-md-8">
                <Table responsive style={{color:"black"}}>

                <thead style={{fontSize:"20px", fontWeight:"bold"}}>
                        <tr className="info">
                          <th>Username</th>
                          <th>Email Address</th>
                          <th>Phone Number</th>
                        </tr>
                      </thead>
                      <tbody>
                      {this.state.data.map((admin) => { 
                       return(
                        <tr style={{padding:"15px"}}>
                        <td>{admin.username}</td>
                        <td>{admin.email}</td>
                        <td>{admin.phone}</td>
                      </tr>
                       )
                      })}
                      </tbody>
                </Table>                       
                  </div>
                  <div className="col-md-2"></div>
</div>
                  </div>
                   
            <Footer/>      
</div>
                 
         
        )}
      }

export default ViewAdmin;