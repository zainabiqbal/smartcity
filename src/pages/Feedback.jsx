import React, {Component} from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import './Feedback.css';
import fire from '../config/Fire';
import feedback from '../images/feedback.png';

class Feedback extends Component {

    constructor(props) {
        super(props);
        this.CreateFeedback = this.CreateFeedback.bind(this);
        this.ValidateData = this.ValidateData.bind(this);

        this.state = {
            firstname:'',
            lastname: '',
            email:'',
            message: '',

        }
      }
      ValidateData(){
         
        if(this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            if(this.state.firstname.match(/^[a-z A-Z]{2,}$/)){
                if(this.state.lastname.match(/^[a-z A-Z]{2,}$/)){
                    if(this.state.message !== ''){
                        this.CreateFeedback()
                    }
                    else{
                        alert('invalid message')
                    }
                }
                else{
                    alert('invalid lastname')
                }
            }
            else{
                alert('invalid firstname')
            }
        }
        else{
            alert('invalid email')
         
        }
         

      }

      CreateFeedback() {
          console.log('check5')
          var name = this.state.firstname
          console.log(name)
           var ref = fire.database().ref('Feedback/' + this.state.firstname)
           console.log ('ref',ref)
              ref.set({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                message: this.state.message,
            });
            alert('feedback given')
            }

   
    render(){
        return(


            <div>
                <Navbar/>
                <div className="text-center" >

                <form className="form-signinn">
                <img  src={feedback} height="150" width="200" alt="null"/>                

                <div className="form-group">
                    <label htmlFor="form_name">Firstname *</label>
                    <input id="form_name" value={this.state.firstname} onChange = {(value)=> this.setState({firstname: value.target.value})}  type="text" name="name" id="exampleInputname" className="form-control" placeholder="Please enter your firstname " required="required" data-error="Firstname is required."/>
                    <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group">
                     <label htmlFor="form-group">Lastname *</label>
                    <input id="form_lastname" value={this.state.lastname} onChange = {(value)=> this.setState({lastname: value.target.value})} type="text" id="exampleInputsurname" name="surname" className="form-control" placeholder="Please enter your lastname " required="required" data-error="Lastname is required."/>
                    <div className="help-block with-errors"></div>
        </div>
                <div className="form-group">
                    <label htmlFor="form_email">Email *</label>
                    <input id="form_email" value={this.state.email} onChange = {(value)=> this.setState({email: value.target.value})} type="email" name="email" id="exampleInputemail" className="form-control" placeholder="Please enter your email " required="required" data-error="Valid email is required."/>
                    <div className="help-block with-errors"></div>
                    </div>

                <div className="form-group">
                    <label htmlFor="form_message">Message * (MAX LENGTH 250 )</label>
                    <textarea id="form_message" value={this.state.message} maxlength="250" onChange = {(value)=> this.setState({message: value.target.value})} name="message" id="exampleInputtext" className="form-control" placeholder="Message for Us " rows="4" required="required" data-error="Please, leave us a message"></textarea>
                    <div className="help-block with-errors"></div>
                    </div>
            
            
</form>
<button id='send' onClick={this.ValidateData} className="btn btn-success btn-send">Send</button>
</div>

<Footer />
            </div>


        )}}



export default Feedback;
    