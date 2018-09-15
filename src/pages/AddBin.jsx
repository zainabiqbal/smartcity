
import React, {Component} from 'react';
import {Map,  Marker,InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import NextNavbar from '../components/NextNavbar';
import bin from '../images/bin.png';
import fire from '../config/Fire';

// const google = window.google;
// import Paper from 'material-ui/Paper';
// import Typography from 'material-ui/Typography';
// import { typography } from 'material-ui/styles';


/**
* Reference to Firebase database.
* @const
*/

/**
* Data object to be written to Firebase.
*/
var data = {
  sender: null,
  timestamp: null,
  lat: null,
  lng: null
};

function makeInfoBox(controlDiv, map) {
  // Set CSS for the control border.
  var controlUI = document.createElement('div');
  controlUI.style.boxShadow = 'rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px';
  controlUI.style.backgroundColor = '#fff';
  controlUI.style.border = '2px solid #fff';
  controlUI.style.borderRadius = '2px';
  controlUI.style.marginBottom = '22px';
  controlUI.style.marginTop = '10px';
  controlUI.style.textAlign = 'center';
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  var controlText = document.createElement('div');
  controlText.style.color = 'rgb(25,25,25)';
  controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
  controlText.style.fontSize = '100%';
  controlText.style.padding = '6px';
  controlText.textContent = 'The map shows all clicks made in the last 10 minutes.';
  controlUI.appendChild(controlText);
}

/**
* Starting point for running the program. Authenticates the user.
* @param {function()} onAuthSuccess - Called when authentication succeeds.
*/
function initAuthentication(onAuthSuccess) {
  fire.authAnonymously(function(error, authData) {
    if (error) {
      console.log('Login Failed!', error);
    } else {
      data.sender = authData.uid;
      onAuthSuccess();
    }
  }, {remember: 'sessionOnly'});  // Users will get a new id for every session.
}

/**
 * Creates a map object with a click listener and a heatmap.
 */
function initMap() {
  var map = new this.state.google.maps.Map(document.getElementById('map'), {
    center: {lat: 33.6518, lng: 73.1566},
    zoom: 3,
    styles: [{
      featureType: 'poi',
      stylers: [{ visibility: 'off' }]  // Turn off POI.
    },
    {
      featureType: 'transit.station',
      stylers: [{ visibility: 'off' }]  // Turn off bus, train stations etc.
    }],
    disableDoubleClickZoom: true,
    streetViewControl: false,
  });

  // Create the DIV to hold the control and call the makeInfoBox() constructor
  // passing in this DIV.
  var infoBoxDiv = document.createElement('div');
  makeInfoBox(infoBoxDiv, map);
  map.controls[this.state.google.maps.ControlPosition.TOP_CENTER].push(infoBoxDiv);

  // Listen for clicks and add the location of the click to firebase.
  map.addListener('click', function(e) {
    data.lat = e.latLng.lat();
    data.lng = e.latLng.lng();
    addToFirebase(data);
  });

  // Create a heatmap.
  var heatmap = new this.state.google.maps.visualization.HeatmapLayer({
    data: [],
    map: map,
    radius: 16
  });

  initAuthentication(initFirebase.bind(undefined, heatmap));
}

/**
 * Set up a Firebase with deletion on clicks older than expirySeconds
 * @param {!google.maps.visualization.HeatmapLayer} heatmap The heatmap to
 * which points are added from Firebase.
 */
function initFirebase(heatmap) {

  // 10 minutes before current time.
  var startTime = new Date().getTime() - (60 * 10 * 1000);

  // Reference to the clicks in Firebase.
  var clicks = fire.child('clicks');

  // Listener for when a click is added.
  clicks.orderByChild('timestamp').startAt(startTime).on('child_added',
    function(snapshot) {

      // Get that click from firebase.
      var newPosition = snapshot.val();
      var point = new this.state.google.maps.LatLng(newPosition.lat, newPosition.lng);
      var elapsed = new Date().getTime() - newPosition.timestamp;

      // Add the point to  the heatmap.
      heatmap.getData().push(point);

      // Requests entries older than expiry time (10 minutes).
      var expirySeconds = Math.max(60 * 10 * 1000 - elapsed, 0);
      // Set client timeout to remove the point after a certain time.
      window.setTimeout(function() {
        // Delete the old point from the database.
        snapshot.ref().remove();
      }, expirySeconds);
    }
  );

  // Remove old data from the heatmap when a point is removed from firebase.
  clicks.on('child_removed', function(snapshot, prevChildKey) {
    var heatmapData = heatmap.getData();
    var i = 0;
    while (snapshot.val().lat != heatmapData.getAt(i).lat()
      || snapshot.val().lng != heatmapData.getAt(i).lng()) {
      i++;
    }
    heatmapData.removeAt(i);
  });
}

/**
 * Updates the last_message/ path with the current timestamp.
 * @param {function(Date)} addClick After the last message timestamp has been updated,
 *     this function is called with the current timestamp to add the
 *     click to the firebase.
 */
function getTimestamp(addClick) {
  // Reference to location for saving the last click time.
  var ref = fire.child('last_message/' + data.sender);

  ref.onDisconnect().remove();  // Delete reference from firebase on disconnect.

  // Set value to timestamp.
  ref.set(fire.ServerValue.TIMESTAMP, function(err) {
    if (err) {  // Write to last message was unsuccessful.
      console.log(err);
    } else {  // Write to last message was successful.
      ref.once('value', function(snap) {
        addClick(snap.val());  // Add click with same timestamp.
      }, function(err) {
        console.warn(err);
      });
    }
  });
}

/**
 * Adds a click to firebase.
 * @param {Object} data The data to be added to firebase.
 *     It contains the lat, lng, sender and timestamp.
 */
function addToFirebase(data) {
  getTimestamp(function(timestamp) {
    // Add the new timestamp to the record data.
    data.timestamp = timestamp;
    var ref = fire.child('clicks').push(data, function(err) {
      if (err) {  // Data was not written to firebase.
        console.warn(err);
      }
    });
  });
}



export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      google : window.google

    });
  }

  render(){
    return(
     <div id='map'> this is the map</div>    
    
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
































