
import React, {Component} from 'react';
import {Map,  Marker,InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import NextNavbar from '../components/NextNavbar.jsx';
import bin from '../images/bin.png';
import fire from '../config/Fire';
import './Map.css';
import {Button} from 'react-bootstrap'
import AddBin from '../pages/AddBin';
import {Link } from 'react-router-dom';


export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      google : window.google,
      data:[]
    });
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);

  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
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

  componentWillMount(){
    var arr=[]
   fire.database().ref('Bins/' ).once('value',snapshot=>{
     snapshot.forEach((data)=>{
       var cord=(data.val());
       arr.push(cord);
     })
      this.setState({data: arr})
       console.log(this.state.data);

     
     });
     }
  

  render() {
    const style = {
      width: '100%',
      height: '100%',
    }
    
    return (
      <div >
       <NextNavbar/>
     <div>
    <Link to='/AddBin'> <Button id="button" bsStyle="primary" bsSize="large"  Component={AddBin}>
      Add more Bins
     </Button></Link>
      </div>      
      
       <div id="map-canvas">
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
      {this.state.data.map(cord=> {
return (
        <Marker  
        label='Student Cafe' 
          onClick = { this.onMarkerClick}
             title={'Student Cafe'}
             name={'Student Cafe'}
             key={cord.key}
             position={{lat: parseFloat(cord.lat), lng: parseFloat(cord.lng)}}
             icon={{
               url: bin,
               anchor: new this.state.google.maps.Point(32,32),
               scaledSize: new this.state.google.maps.Size(50,50)
     }} 
  />)

      } ) }   
      
      {this.state.data.map(cord=> {
return (
  <InfoWindow
      marker = { this.state.activeMarker }
      visible = { this.state.showingInfoWindow }
      // onOpen={this.handleClick}
     > 
  <h4> Student cafe  
      <p > Fill Level {cord.fillLevel}</p>
  </h4>
    </InfoWindow>
      ) } ) } 


        <Marker
        label={"CS Department"}
            title={' CS department'}
            name={' CS department'}
            position={{lat: 33.649941, lng: 73.155520}} 
            icon={{
              url: bin,
              anchor: new this.state.google.maps.Point(32,32),
              scaledSize: new this.state.google.maps.Size(50,50),
           
                  }} 
/>
        <Marker
           label="EE Department"
            title={'EE department'}
            name={'EE department'}
            position={{lat: 33.651278, lng: 73.156117}} 
            icon={{
              url: bin,
              anchor: new this.state.google.maps.Point(32,32),
              scaledSize: new this.state.google.maps.Size(50,50)
    }} 
/>
        <Marker/>
      <Marker
          label='University Parking'
            title={'University Parking'}
            name={'University Parking'}
            position={{lat: 33.648104, lng:73.157249}}
            icon={{
              url: bin,
              anchor: new this.state.google.maps.Point(32,32),
              scaledSize: new this.state.google.maps.Size(50,50)
    }}
     
    />
      </Map>
      </div>
    
     </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCdTx0h3SGj4KV0aq1i0NTq2_DVlVeUW1s")
})(MapContainer)




















































// const TOKEN = 'pk.eyJ1IjoiemFpbmFiaXFiYWwxMCIsImEiOiJjamx0cjB1cjYwZHM2M3FwZWd0Y2E1OWlsIn0.JBvKwLR_nD3m2VtPDIsFWA';

// const markers=[]

// const navStyle = {
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   padding: '10px'
// };
// export default class Map extends React.Component {
// constructor(props) {
//     super(props);
//     this.state = {
//       viewport: {
//         latitude: 33.6518,
//         longitude: 73.1566,
//         zoom: 14,
//         bearing: 0,
//         pitch: 0,
//         width: 1000,
//         height: 500,
//       },
//       popupInfo:null
//     };
//     this.renderPopup = this.renderPopup.bind(this)
//   }
//   renderPopup(){
//     return this.state.popupInfo && (
//       <Popup tipSize={5}
//         anchor="bottom-right"
//         longitude={this.state.popupInfo.state.longitude}
//         latitude={this.state.popupInfo.state.latitude}
//         onClose={() => this.setState({popupInfo: null})}
//         closeOnClick={true}>
//         <p>{'this is the marker'}</p>
        
//       </Popup>
//     )
//   }


// render() {
//     const {viewport} = this.state;
// return (
//   <MapGL
//   {...viewport}
//   mapStyle="mapbox://styles/mapbox/streets-v9"
//   mapboxApiAccessToken={TOKEN} >

//   {markers}
//   {this.renderPopup()}

//   <div className="nav" style={navStyle}>
//     <NavigationControl/>
//     <Marker
//       coordinates={[-0.2416815, 51.5285582]}
//       anchor="bottom">
//       <img src={markerUrl}/>
//   </Marker>
//     <Layer
//               type="symbol"
//               id="marker"
//               layout={{ "icon-image": "marker-15" }}>
//               <Feature coordinates={[33.648879, 73.156422]}/>
//             </Layer>
//     </div>
//   {/* </div> */}
// </MapGL>
// );
// }
// }