import React, {Component} from 'react';
import './Login.css';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
//import admin from '../config/Admin';
import fire from '../config/Fire';
import avatar from '../images/avatar.png';




class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault(); 
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
  
}

).catch((error) => {
       console.log(error)  ;
alert("Invalid Email or Password")   });
  }


 
render(){
    return(
          
        <div>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link>
        <Navbar/>

        <div className="text-center" data-gr-c-s-loaded="true">
        <div className="container">
        <form className="form-signin">
        <img className="img-fluid rounded-circle mb-3" src={avatar} height="300" width="200" alt="null"/>                
      <div className="form-group">
       <label htmlFor="exampleInputEmail1">  <i class="fa fa-envelope"></i>      Email address *</label>
        <input value={this.state.email}  onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      </div>
       <div className="form-group">
      <label htmlFor="exampleInputPassword1"><i class="fa fa-lock"></i>        Password *</label>
      <input value={this.state.password}  onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password" />
      </div>
      <button type="submit" onClick={this.login}  className="btn btn-primary">Login</button>
     <small id="emailHelp" className="form-text text-muted">@2017-2018</small>

      </form>
      </div>
      </div>
      
   <Footer/>
  
      </div>
      
    );
    }
    }

    export default Login;