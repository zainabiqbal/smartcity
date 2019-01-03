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
        Counter:0,
        currentDistance:'',
        name:'',
    }

}

componentWillMount () {
  this.View();
}



//   fire.database().ref('Bins/'+this.state.name+'/Data').limitToLast(1).on('child_added',snapshot=>{
   
//     this.setState({name:snapshot.val().Name});
//     this.setState({currentDistance:snapshot.val().Distance});
//     console.log('notif distanc',this.state.currentDistance);

//     if (snapshot.val().Distance >= 75)
//  {
//   this.setState({Notif:this.state.Notif.concat([snapshot.val()]),Counter:this.state.Counter+1});
//   console.log("here notification", this.state.Notif)
//  }



View(){
var notif = []


fire.database().ref('Notifications/' ).on('child_added',(snapshot)=>{
  // this.setState({name:snapshot.val().Name});

 console.log("jjjjjjjjjjjjjjj",snapshot.val());
 console.log('notif', notif)
 var count=0;
 // this.setState({Notif:this.state.Notif.concat([snapshot.val()]),Counter:this.state.Counter+1});
notif.forEach(function(hi){
 if (hi.Name===snapshot.val().Name){
   notif.splice(count,1)
 }
 else {
   count++;
 }

})
if (snapshot.val().Distance >= 75)
{
 console.log("here notification", this.state.Notif)
 notif.push({Distance: snapshot.val().Distance, Humidity: snapshot.val().Humidity, Name: snapshot.val().Name, Temperature: snapshot.val().Temperature})

}

this.setState({Notif:notif,Counter:notif.length});


});
}


    render(){

    return(


<div >


<h3  style={{fontFamily:'verdana',color:'white'}}>Notification alerts    {this.state.Counter} </h3>
                   
                   
    {this.state.Notif.map((bin) => { 
              return(  


                <div className="card-counter danger">
                {/* <h4><span className="fa fa-warning custom" ></span>  <b>{bin.Name}</b> is now {bin.Distance}% full. */}

                <h4><span className="fa fa-warning custom" ></span><b>{bin.Name}</b> is now {bin.Distance}% full.

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