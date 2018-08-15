import React, {Component} from 'react';
import './Login.css';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import fire from '../config/Fire';
// import Dashboard from './pages/Dashboard.jsx';



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


  // login(e) {
  //   e.preventDefault(); 
  //   fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
  //   }).catch((error) => {
  //       console.log(error);
  //     });
  // }
  login(e) {
    e.preventDefault(); 
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
       // console.log(error);
       //alert(<div style={{ color: 'blue' }}>Some Message</div>)
       alert('invalid email or password!')      });
  }


 
render(){
    return(
        <div>
        <Navbar/>

        <div className="text-center" data-gr-c-s-loaded="true">
        <div className="container">
        <form className="form-signin">
      <div className="form-group">
       <label htmlFor="exampleInputEmail1">Email address</label>
       <input value={this.state.email}  onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      </div>
       <div className="form-group">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input value={this.state.password}  onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password" />
      </div>
      <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>
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