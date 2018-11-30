
import React, {Component} from 'react';
import {Map,  Marker,InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import NextNavbar from '../components/NextNavbar';
import bin from '../images/bin.png';
import fire from '../config/Fire';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField'
// import '../components/Map.css'
import {Button} from 'react-bootstrap'
import {Alert} from 'react-bootstrap'
import Footer from '../components/Footer.jsx';
import './AddBin.css'


export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.handleClick=this.handleClick.bind(this);
    this.state = ({
      google : window.google,
      lat:'',
      lng:'',
      open: false,
      name:''

    });
  }
  onMapClick(){
    console.log('something somethin')
  }
  handleClick=(event)=>{
    
    var lat = event.latLng.lat(), lng = event.latLng.lng();
    this.setState({lat:lat,lng:lng});
    console.log('lat',this.state.lat,'lng',this.state.lng)
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.name);
  }
  handleUpload(){
    const{name,lat,lng}=this.state
    fire.database().ref('Bins/' + this.state.name).set({'name':name,'lat':lat,'lng':lng});
    this.handleClose();
  }
  render(){
    const style = {
      width: '100%',
      height: '100%',
    }
    return(
      <div>
      <NextNavbar/>
      <div>
        <h5 id="button" >Click on map, where you want to add Bin, then press Add</h5>
      </div> 
      <div id="button">
        <Button bsStyle="primary" onClick={this.handleClickOpen}>+ADD</Button>
      </div>

      <div id="map-canvas">
        <Map 
          google={this.state.google} 
          zoom={16}
          style={style}
          onClick={(t, map,e) => this.handleClick(e) }
          initialCenter={{
            lat: 33.6518,
            lng: 73.1566
          }}
          >
        </Map>
      </div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Enter Bin Name"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <TextField
                id="name"
                label="Name"
                name='name'
                value={this.state.name}
                onChange={this.handleChange.bind(this)}
                margin="normal"
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" bsStyle="primary">
              Cancel
            </Button>
            <Button bsStyle="primary" onClick={this.handleUpload.bind(this)} color="primary" autoFocus>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
        <Alert bsStyle="warning">
  <strong>Note!</strong> Make sure to click on the exact Location where you want to place the bin.
</Alert>;
<Footer/>
     </div>  
         )
  }
}

    export default GoogleApiWrapper({
      apiKey: ("AIzaSyCdTx0h3SGj4KV0aq1i0NTq2_DVlVeUW1s")
    })(MapContainer)
    
    






// export class AddBin extends Component {
//   constructor(props) {
//     super(props);
//     this.state = ({
//       showingInfoWindow: false,
//       activeMarker: {},
//       selectedPlace: {},
//       google : window.google
//     });
//     this.onMarkerClick = this.onMarkerClick.bind(this);
//     this.onMapClick = this.onMapClick.bind(this);
//   }

//   onMarkerClick = (props, marker, e) => {
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true
//     });
//   }

//   onMapClick = (props) => {
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null
//       });
//     }
//   }

//   render() {
//     const style = {
//       width: '100%',
//       height: '90%',
//       display: 'flex',
//       'marginLeft': 'auto',
//       'marginRight': 'auto'
//     }
    
//     return (
// <div>
//       <NextNavbar/>
//       <Map 
//       google={this.state.google} 
//       zoom={16}
//       style={style}
//       onClick = { this.onMapClick }
//       initialCenter={{
//         lat: 33.6518,
//         lng: 73.1566
//       }}
//       >

//         <Marker
        
//          onClick = { this.onMarkerClick }
//             title={'Student Cafe'}
//             name={'Student Cafe'}
//             position={{lat: 33.648539, lng: 73.155499}}
//             icon={{
//               url: bin,
//               anchor: new this.state.google.maps.Point(32,32),
//               scaledSize: new this.state.google.maps.Size(50,50)
//     }} 
//  />
//      <InfoWindow
//           marker = { this.state.activeMarker }
//           visible = { this.state.showingInfoWindow }
//         >
//           <h3>
//             <p
//               variant = 'headline'
//               component = 'h1'
//               className='text-center'
//             >
//              Student Cafe
//             </p>
//             <p
//               component = 'p'
//             >
//               bin filled percentage=70%
//             </p>
//           </h3>
//         </InfoWindow>
             
//         <Marker
//             title={' CS department'}
//             name={' CS department'}
//             position={{lat: 33.649941, lng: 73.155520}} 
//             icon={{
//               url: bin,
//               anchor: new this.state.google.maps.Point(32,32),
//               scaledSize: new this.state.google.maps.Size(50,50)
//     }} 
// />
//         <Marker
//             title={'EE department'}
//             name={'EE department'}
//             position={{lat: 33.651278, lng: 73.156117}} 
//             icon={{
//               url: bin,
//               anchor: new this.state.google.maps.Point(32,32),
//               scaledSize: new this.state.google.maps.Size(50,50)
//     }} 
// />
//         <Marker/>
//       <Marker
//             title={'University Parking'}
//             name={'University Parking'}
//             position={{lat: 33.648104, lng:73.157249}}
//             icon={{
//               url: bin,
//               anchor: new this.state.google.maps.Point(32,32),
//               scaledSize: new this.state.google.maps.Size(50,50)
//     }}
     
//     />
      

//       </Map>
//       </div>
//     );
//   }
// }
 

// export default GoogleApiWrapper({
//   apiKey: ("AIzaSyCdTx0h3SGj4KV0aq1i0NTq2_DVlVeUW1s")
// })(AddBin)
































