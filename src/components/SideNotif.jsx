import React, {Component} from 'react';
import  {Link} from 'react-router-dom';
import fire from '../config/Fire';
import {ListGroupItem,ListGroup} from 'react-bootstrap';
import './SideNotif.css'
// import { Badge } from 'react-bootstrap';

class SideNotif extends Component {
  constructor(props) {
    super(props);
    this.View=this.View.bind(this);
    this.state = {
        Notif:[],
        Counter:0
    }

}
componentWillMount () {
  this.View();
}

View(){
fire.database().ref('Notifications/' ).on('child_added',snapshot=>{
 console.log("here notify");
 console.log("jjjjjjjjjjjjjjj",snapshot.val());
 if (snapshot.val().Level >= 75)
 {
  this.setState({Notif:this.state.Notif.concat([snapshot.val()]),Counter:this.state.Counter+1});
  console.log("here notification", this.state.Notif)
 }


});
}

    render(){

    return(


<div >


<h3 >Notification alerts    {this.state.Counter} </h3>
                   
    {this.state.Notif.map((bin) => { 
              return(  


                <div className="card-counter danger">
                <h4><span className="fa fa-warning custom" ></span>  <b>{bin.name}</b> is now {bin.Level}% full.
</h4>
</div>
                
                // <div className="card-counter danger">
                // <i className="fa fa-warning custom"/>
                // <b>{bin.name}</b> is now {bin.Level}% full.

    /* <div className="alert alert-danger" >
            <div className="alert-icon">
                <i className="material-icons">error_outline</i>
            </div>
            
           <p> <b>{bin.name}</b> is now {bin.Level}% full.</p>
          
    </div> */

    )
  })}


</div>
























  // <div style={{marginLeft:'10px'}}>
  //     <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />

  //         <ListGroup> 
  //       <ListGroupItem header="Notifications" style={{backgroundColor:"Tomato"}} >Alerts       <span className="badge badge-danger">{this.state.Counter}</span></ListGroupItem> 
  //             {this.state.Notif.map((bin) => { 
  //            return(  
  //       <ListGroupItem bsStyle="danger" style={{fontWeight: "bold"} }>{bin.name} is now {bin.Level}% full</ListGroupItem>
             
  //             )
  //           })}
             
  //         </ListGroup> 
  //         </div>
)}

}
export default SideNotif;