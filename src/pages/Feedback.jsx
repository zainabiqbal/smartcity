import React, {Component} from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import './Feedback.css';

class Feedback extends Component {
    render(){
        return(


            <div>
                <Navbar/>
                <div className="text-center" data-gr-c-s-loaded="true">

                <form className="form-signinn">

                <div className="form-group">
                    <label htmlFor="form_name">Firstname *</label>
                    <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required."/>
                    <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group">
                     <label htmlFor="form-group">Lastname *</label>
                    <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required."/>
                    <div className="help-block with-errors"></div>
        </div>
                <div className="form-group">
                    <label htmlFor="form_email">Email *</label>
                    <input id="form_email" type="email" name="email" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."/>
                    <div className="help-block with-errors"></div>
                    </div>

                <div className="form-group">
                    <label htmlFor="form_message">Message *</label>
                    <textarea id="form_message" name="message" className="form-control" placeholder="Message for Us *" rows="4" required="required" data-error="Please, leave us a message."></textarea>
                    <div className="help-block with-errors"></div>
                    </div>
            
             <button type="submit" className="btn btn-success btn-send">Send</button>

</form>
</div>
<Footer />
            </div>


        )}}



export default Feedback;
    