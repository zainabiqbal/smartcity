import React from 'react';
//import './ViewManager.css';
import fire from '../config/Fire';
import NextNavbar from '../components/NextNavbar.jsx';
import {Table} from 'react-bootstrap';
// import { forEach } from 'gl-matrix/src/gl-matrix/vec3';
// import firebase from 'firebase';

class ViewManager extends React.Component {
    constructor(props) {
        super(props);
        this.View=this.View.bind(this);
        this.state = {
            data:[]
            
        }
      }
     
  
      
      componentWillMount () {
                this.View();
                console.log('IM MANAGER AAAAAAAAAA')
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
                <NextNavbar/>
                  
                      <Table striped bordered  hover>
                      <thead>
                        <tr>
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
                 
         
        )}
      }

export default ViewManager;