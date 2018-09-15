import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
    render(){

        return(
            <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="card-counter primary">
                  <i className="fa fa-code-fork" />
                  <span className="count-numbers">12</span>
                  <span className="count-name">Locations</span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card-counter danger">
                  <i className="fa fa-ticket" />
                  <span className="count-numbers">599</span>
                  <span className="count-name">Customers</span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card-counter success">
                  <i className="fa fa-database" />
                  <span className="count-numbers">6875</span>
                  <span className="count-name">Data</span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card-counter info">
                  <i className="fa fa-users" />
                  <span className="count-numbers">5</span>
                  <span className="count-name">Company branches</span>
                </div>
              </div>
            </div>
          </div>


    );



}


}
export default Card;