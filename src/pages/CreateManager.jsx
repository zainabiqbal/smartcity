import React from 'react';
import './CreateManager.css';
import fire from '../config/Fire';
import NextNavbar from '../components/NextNavbar.jsx';
import Footer from '../components/Footer.jsx';



class CreateManager extends React.Component {
    constructor(props) {
        super(props);
        this.Create = this.Create.bind(this);
        this.state = {
            username:'',
            email: '',
            phone:'',
            password: '',

        }
      }



    Create(e) {
        e.preventDefault(); 
        
        

        fire.auth().createUserWithEmailAndPassword(
            this.state.email,
            this.state.password
            // this.state.phone,
            // this.state.username
        ).then((u)=>{
            console.log(u.user.uid);
           var ref = fire.database().ref('Users/' + u.user.uid);
            ref.set({
                username: this.state.username,
                email: this.state.email,
                phone: this.state.phone,
                password: this.state.password,
                Role: 'Manager' 
          
            });
            alert('Manager added successfully!',u.user.uid)

        }).catch((error) => {
            console.log("ERROR", error);
           alert('Error adding manager' , error)      });
      }
    
    //   handleChange(e) {
    //     this.setState({ [e.target.name]: e.target.value });
      
    

render()
{
    return(
        <div>
           <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
        {/*---- Include the above in your HEAD tag --------*/}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Bootstrap core CSS */}
        <link href="css/bootstrap.min.css" rel="stylesheet" />
        <link href="css/style.css" rel="stylesheet" type="text/css" />

        <NextNavbar/>
     <div className="text-center" data-gr-c-s-loaded="true">

        <div className="container">
        <div className="container">      
        <h2 >  Add a new Manager <span className="glyphicon glyphicon-user" aria-hidden="true" /> </h2>        
        </div>

        <form className="form-create">
      <div className="form-group">
       <label htmlFor="exampleInputname"> User name</label>
       <input value={this.state.username} onChange = {(value)=> this.setState({username: value.target.value})}  name="username" className="form-control" id="exampleInputname"  placeholder="Enter username" />
      </div>

       <div className="form-group">
      <label htmlFor="exampleInputemail">Email address</label>
      <input value={this.state.email}  onChange = {(value)=> this.setState({email: value.target.value})} type="email" name="email" className="form-control" id="exampleInputemail" placeholder="Enter email" />
      </div>

      <div className="form-group">
       <label htmlFor="exampleInputphone">Phone number</label>
       <input value={this.state.phone} onChange = {(value)=> this.setState({phone: value.target.value})}  type="phone" name="phone" className="form-control" id="exampleInputphone"  placeholder="Enter phone number" />
      </div>

      <div className="form-group">
       <label htmlFor="exampleInputpassword">Password</label>
       <input value={this.state.password}  onChange = {(value)=> this.setState({password: value.target.value})} type="password" name="password" className="form-control" id="exampleInputass"  placeholder="Enter password" />
      </div>
         <button type="submit" onClick={this.Create}  className="btn btn-success">Create</button>

     <small id="emailHelp" className="form-text text-muted">@2017-2018</small>

      </form>
      </div>

        </div>
        <Footer/>
</div>
    )}}
    export default CreateManager;