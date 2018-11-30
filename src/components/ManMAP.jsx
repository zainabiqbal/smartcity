
import React, {Component} from 'react';
import {Map,  Marker,InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import ManNavbar from '../components/ManNavbar.jsx';
import bin from '../images/bin.png';
import fire from '../config/Fire';
import './Map.css';
import {Button} from 'react-bootstrap'
import AddBin from '../pages/AddBin';
import {Link } from 'react-router-dom';
import {ListGroup} from 'react-bootstrap';
import {ListGroupItem} from 'react-bootstrap'
import SideNotif from '../components/SideNotif';
import Footer from '../components/Footer.jsx';




export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      google : window.google,
      data:[],
      dist:[],
      markerlat:'',
      markerlng:'',
      markername:''
    });
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);

  }

  onMarkerClick = (markername, marker, e) => {
    this.setState({
      selectedPlace: {markername},
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
      

  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  getChannelData() {
    setInterval(()=>{
    fetch('https://api.thingspeak.com/channels/570421/feeds.json?results=1')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        console.log("Temperature: " + responseJson["feeds"][0]["field1"]);
        console.log("Distance: " + responseJson["feeds"][0]["field3"]);

        fire.database().ref('Bins/Sherryz Dustbin/Data').push({Temperature: responseJson["feeds"][0]["field1"],
        Distance: responseJson["feeds"][0]["field3"],
        Humidity: 0
      });

      })
      .catch((error) => {
        console.error(error);
      });
    }, 5000);
  }

  componentWillMount(){
    var arr=[]
   fire.database().ref('Bins/'  ).once('value',snapshot=>{
     snapshot.forEach((data)=>{
       var cord=(data.val());
       arr.push(cord);
     })
      this.setState({data: arr})
       console.log(this.state.data);

     
     });
fire.database().ref('Bins/Sherryz Dustbin/Data').limitToLast(1).on('child_added',snapshot=>{
        var arra=[]
    snapshot.forEach((data)=>{
        var kk=(data.val());
        arra.push(kk);
      })
       this.setState({dist: arra})
        console.log("zainab",this.state.dist);


})
     

     }

     componentDidMount(){
   //    this.getChannelData();
     }
  

  render() {
    const style = {
      width: '100%',
      height: '100%',
      borderStyle: 'solid grey',
      position:'absolute',
      margin:'auto',
      display:'block',
      borderRadius: '25px',
      borderRight:'6px solid grey',
      height: '700px;'
    }
    

    
    return (
      <div>
       <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />

       <ManNavbar/>
       <div className="container"  id="map-canvas">
           <div className="row">

            <div className="col-md-2">
            <h1>Bins</h1>
            {this.state.data.map((data)=>{
          return(   
            <ListGroup>       
            <ListGroupItem bsStyle="success" name={data.name} onClick={()=>{this.setState({markername:data.name,markerlat:data.lat,markerlng:data.lng})}}>{data.name}
            </ListGroupItem>
            </ListGroup> 
          )
        })}


            </div>
              <div className="col-md-8">
              <h1>View bins on Map</h1>


                  <Map 
                  google={this.state.google} 
                  zoom={16}
                  style={style}
                  onClick = { this.onMapClick }
                  initialCenter={{
                    lat: 33.6518,
                    lng: 73.1566
                  }}
                  >
                  {this.state.markername?
                    <Marker 
                    label={this.state.name}
                    onClick = { this.onMarkerClick}
                    position={{lat:this.state.markerlat,lng:this.state.markerlng}}
                    icon={{
                      url: bin,
                      anchor: new this.state.google.maps.Point(32,32),
                      scaledSize: new this.state.google.maps.Size(50,50)
            }} 

                  />:''  
                }

                  
                  {this.state.dist.map(cord=> {
            return (
              <InfoWindow
                  marker = { this.state.activeMarker }
                  visible = { this.state.showingInfoWindow }
                  // onOpen={this.handleClick}
                > 
              <h4>{cord.name} 
                  <p> Fill Level {cord.Distance} %</p>
              </h4>
                </InfoWindow>
                  ) } ) } 


                  </Map>
              </div>    
              <div className="col-md-2" style={{textAlign:'center'}}>
              <h1>Notifs</h1>

              <SideNotif/>
              </div>

          </div>
</div>
          
        <Footer/>
      
         </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCdTx0h3SGj4KV0aq1i0NTq2_DVlVeUW1s")
})(MapContainer)



















































