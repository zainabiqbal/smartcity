import React, {Component} from 'react';
import './Home.css';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';



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
            <section className="section parallax-container bg-gray-dark"><div className="material-parallax parallax"></div>
        <div className="parallax-content particles-wrapper">
          <div id="particles-js"><canvas className="particles-js-canvas-el" width={758} height={394} style={{width: '100%', height: '100%'}} /></div>
          <div className="section-md text-center">
            <div className="shell shell-wide">
              <ul className="list-blocks">
                <li className="list-blocks__item">
                  <div className="list-blocks__item-inner">
                    <article className="box-counter-modern">
                      <div className="box-counter-modern__wrap">
                        <div className="counter animated" data-zero="true">11</div>
                      </div>
                      <p className="box-counter-modern__title">Years in the industry</p>
                    </article>
                  </div>
                </li>
                <li className="list-blocks__item">
                  <div className="list-blocks__item-inner">
                    <article className="box-counter-modern">
                      <div className="box-counter-modern__wrap">
                        <div className="counter animated" data-zero="true">35</div>
                      </div>
                      <p className="box-counter-modern__title">Partners worldwide</p>
                    </article>
                  </div>
                </li>
                <li className="list-blocks__item">
                  <div className="list-blocks__item-inner">
                    <article className="box-counter-modern">
                      <div className="box-counter-modern__wrap"><span>#</span><span className="big">01</span></div>
                      <p className="box-counter-modern__title">Advertising agency</p>
                    </article>
                  </div>
                </li>
                <li className="list-blocks__item">
                  <div className="list-blocks__item-inner">
                    <article className="box-counter-modern">
                      <div className="box-counter-modern__wrap">
                        <div className="counter animated" data-zero="true">264</div>
                      </div>
                      <p className="box-counter-modern__title">Successful projects</p>
                    </article>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>            </div>
            
            <Footer />
        </div>
      
    );
}
}

export default Home;
