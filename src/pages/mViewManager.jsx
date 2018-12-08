import React from 'react';
//import './ViewManager.css';
import fire from '../config/Fire';
import ManNavbar from '../components/ManNavbar.jsx';
import {Table} from 'react-bootstrap';
// import { forEach } from 'gl-matrix/src/gl-matrix/vec3';
// import firebase from 'firebase';
import Footer from '../components/Footer.jsx';

class MViewManager extends React.Component {
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
            if(dd.Role==='Manager'){
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

                <ManNavbar/>
                <div className="container">
                  <div className="row">
                  <div className="col-md-2"></div>
                  <div className="col-md-8">

                <Table  responsive style={{color:"black",border:"rounded black",borderRadius: '25px'}}>

                      <thead style={{color:"black"}}>
                        <tr style={{color:"black"}}>
                          <th>Username</th>
                          <th>Email Address</th>
                          <th>Phone Number</th>
                        </tr>
                      </thead>
                      <tbody>
                      {this.state.data.map((manager) => { 
                       return(
                        <tr >
                        <td>{manager.username}</td>
                        <td>{manager.email}</td>
                        <td>{manager.phone}</td>
                      </tr>
                       )
                      })}
                      </tbody>
                    </Table>                                      
                   </div>
                   <div className="col-md-2"></div>

                   </div>
                  </div>
                 {/* <Footer/> */}
</div>
                 
         
        )}
      }

export default MViewManager;