import React, {Component} from 'react';
import './Dashboard.css';
import fire from '../config/Fire';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render(){
        return(
        
        <div>
            
                <h1>Welcome to Dashboard</h1>
               <button onClick= {this.logout}> Logout </button>
            



        </div>
        
        
        
        )}}    

export default Dashboard;