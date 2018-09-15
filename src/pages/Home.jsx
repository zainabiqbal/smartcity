import React, {Component} from 'react';
import './Home.css';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import tick from '../images/bluetick.png';
import lora from '../images/lora.png';
import fast from '../images/fast.png';


class Home extends Component {
render(){
    return(
       
      //  <div style={ { backgroundImage: 'url(require("images/Smartcity.jpg"))' } }>
      <div >
        <Navbar/>
        <Jumbotron title="Smart city" subtitle="The greener, The cleaner"/>
        <div className="container">
            <h2> Welcome  </h2>
            <p> This project is a very innovative system, which will help to keep the cities clean. This system monitors the garbage bins and informs about the level of garbage collected in the garbage bins via a web page. For this the system uses ultrasonic sensors placed over the bins to detect the garbage level and compare it with the garbage bins depth. A web page is developed to show the status to the user monitoring it. The system sends a notification when the level of garbage collected crosses the set limit. Thus, this system helps to keep the city clean by informing about the garbage levels of the bins by providing graphical image of the bins.</p>
            
      <section className="features-icons bg-light text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="icon-screen-desktop m-auto text-primary" />
                </div>
                <img className="img-fluid rounded-circle mb-3" src={fast} height="70" width="60" alt="null"/>                

                <h3>Fast Technology</h3>
                <p className="lead mb-0">IOT based new technology for fast signals and fast routing</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                {/* <div className="features-icons-icon d-flex"> */}
                <img className="img-fluid rounded-circle mb-3" src={lora} height="70" width="60" alt="null"/>                
                {/* </div> */}
                <h3>Long Range</h3>
                <p className="lead mb-0">Featuring lorawan (wide area network)! </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                {/* <div className="features-icons-icon d-flex"> */}

              <img className="img-fluid rounded-circle mb-3" src={tick} width="50" height="50" alt="null"/>                
                {/* </div> */}
                <h3>Easy to Use</h3>
                <p className="lead mb-0">Minimal effort, no jhanjhat,
                 chill mahol. #ayashi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

            </div>
            <Footer />
        </div>
      
    );
}
}

export default Home;
