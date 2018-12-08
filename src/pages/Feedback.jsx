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
          var firstname=this.state.firstname;
          var lastname=this.state.lastname;
          var email=this.state.email;
          var message=this.state.message;

          const regexemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
         const regexname= /^[A-Za-z]$/;
        if(regexemail.test(email)===true){

            if(regexname.test(firstname)===true){
                    if(regexname.test(lastname)===true){
                            if(message!==''){
                                    this.CreateFeedback();
                            }
                            else{ alert('Empty Message'); }

                    }
                    else{alert('last name must contain alphabets only');}          
                    
            }
            else{alert('first name must contain alphabets only');
        console.log('kiya masla hey??')}
        }

        else{alert('invalid or empty!!');}

      }

      CreateFeedback(e) {
        e.preventDefault();  
           var ref = fire.database().ref('Feedback/' + this.state.firstname)
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
                    <label htmlFor="form_message">Message * (MAX LENGTH 50)</label>
                    <textarea id="form_message" value={this.state.message} maxlength="50" onChange = {(value)=> this.setState({message: value.target.value})} name="message" id="exampleInputtext" className="form-control" placeholder="Message for Us " rows="4" required="required" data-error="Please, leave us a message"></textarea>
                    <div className="help-block with-errors"></div>
                    </div>
            
             <button type="submit" onClick={this.ValidateData}  className="btn btn-success btn-send">Send</button>

</form>
</div>
<Footer />
            </div>


        )}}



export default Feedback;
    