import React, {Component} from 'react';
import './Dashboard.css';
import fire from '../config/Fire';
// import Header from './pages/Header';
// import Sidebar from './pages/Sidebar';
import Navbar from '../components/Navbar.jsx';


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
            {/* <Header/>
            <Sidebar/> */}

<Navbar/>

                <h1>Welcome to Dashboard</h1>
               <button onClick= {this.logout}> Logout </button>
            



        </div>
        
        
        
        )}}    

export default Dashboard;