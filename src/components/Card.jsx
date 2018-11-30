import React, {Component} from 'react';
import './Card.css';
import  {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import SideNotif from './SideNotif';

class Card extends Component {
    render(){

        return(
            <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="card-counter primary">
                  <i className="fa fa-map-marker custom" />
                  <Link to="/Map"  style={{color:'white'}}><span className="count-numbers">View Map</span></Link>
                  <span className="count-name">Levels</span>

                </div>
              </div>
              <div className="col-md-3">
                <div className="card-counter danger">
                  <i className="fa fa-trash-o custom" />
                  <Link to="/AddBin"  style={{color:'white'}}><span className="count-numbers">Add bins</span></Link>
                  <span className="count-name">increase</span>

                </div>
              </div>
              <div className="col-md-3">
                <div className="card-counter success">
                  <i className="fa fa-database" />
                  <Link to="https://console.firebase.google.com/project/smartcity-2107c/database/smartcity-2107c/data"  style={{color:'white'}}><span className="count-numbers">Check DB</span></Link>
                  <span className="count-name">Data</span>
                </div>
              </div>
              {/* <div className="col-md-3">
                <SideNotif/>
            </div> */}

            </div>
          </div>


    );



}


}
export default Card;