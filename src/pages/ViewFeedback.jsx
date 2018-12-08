import React from 'react';
import fire from '../config/Fire';
import NextNavbar from '../components/NextNavbar.jsx';
import {Table} from 'react-bootstrap';
import Footer from '../components/Footer.jsx';




class ViewFeedback extends React.Component {
    constructor(props) {
        super(props);
        this.Viewfeedback=this.Viewfeedback.bind(this);
        this.state = {
            data:[]
            
        }
      }



      componentWillMount () {
        this.Viewfeedback();
}


Viewfeedback(){
    var arr=[]
    fire.database().ref('Feedback/' ).once('value',snapshot=>{
    snapshot.forEach((data)=>{
      var dd=(data.val());
        arr.push(dd)
   
    })
     this.setState({data: arr})
      console.log("hmm");
      console.log(this.state.data);
    
    
    });
    }

      render()
      {
        return(
        
        <div>
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />

            <NextNavbar/>
            <div className="container" height="100%">
            <h2 style={{textAlign:'center'}}>  Feedback <span className="glyphicon glyphicon-comment" aria-hidden="true" /> </h2>        

              <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
            <Table className="mytable" responsive style={{color:"black"}}>

            <thead className="info" style={{fontSize:"15px"}}>
                    <tr >
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email Address</th>
                      <th>Message</th>

                    </tr>
                  </thead>
                  <tbody>
                  {this.state.data.map((feedback) => { 
                   return(
                    <tr style={{padding:"15px"}}>

                    <td>{feedback.firstname}</td>
                    <td>{feedback.lastname}</td>
                    <td>{feedback.email}</td>
                    <td>{feedback.message}</td>

                  </tr>
                   )
                  })}
                  </tbody>
            </Table>                       
              </div>
              {/* <div className="col-md-2"></div> */}
</div>
              </div>
               
        {/* <Footer/>       */}
    </div>         
             
         
        )}
      }

export default ViewFeedback;
