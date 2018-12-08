
import NextNavbar from '../components/NextNavbar.jsx';
import redbin from '../images/redbin.png';
import greenbin from '../images/greenbin.png';
import orangebin from '../images/orangebin.png';

import fire from '../config/Fire';
import React, {Component} from 'react';
import {Map,  Marker,InfoWindow, GoogleApiWrapper} from 'google-maps-react';
// import './Map.css';
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
      markername:'',
      distance:[],
      currentDistance:'',
      name:'',
      lat:'',
      lng:'',
      binData:'',
      
        });
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
    this.DBclicked = this.DBclicked.bind(this);  
    this.stateOK = this.stateOK.bind(this);
    this.Remove = this.Remove.bind(this);




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

DBclicked(name,lat,lng,Data)
{
this.setState({name:name,lat:lat,lng:lng},()=>this.stateOK());

}

stateOK()
{
fire.database().ref('Bins/'+this.state.name+'/Data').limitToLast(1).on('child_added',snapshot=>{

this.setState({currentDistance:snapshot.val().Distance});
console.log('mysistance',this.state.currentDistance);
});
}


  getChannelData() {
    setInterval(()=>{
    fetch('https://api.thingspeak.com/channels/570421/feeds.json?results=1')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        console.log("Temperature: " + responseJson["feeds"][0]["field1"]);
        console.log("Distance: " + responseJson["feeds"][0]["field3"]);

        fire.database().ref('Bins/CS Department/Data').push({Temperature: responseJson["feeds"][0]["field1"],
        Distance: responseJson["feeds"][0]["field3"],
        Humidity: 0,
        Name: 'CS Department'
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

fire.database().ref('Bins/CS Department/Data').limitToLast(1).on('child_added',snapshot=>{
        var arra=[]
    snapshot.forEach((data)=>{
        var kk=(data.val());
        arra.push(kk);
      })
       this.setState({dist: arra})
        console.log("zainab",this.state.dist);

  ///  console.log('zainab',snapshot.val())

}) 

fire.database().ref('Bins/CS Department/Data').limitToLast(1).on('child_added',snapshot=>{
  var arra=[]
snapshot.forEach((data)=>{
  var kk=(data.val());
  arra.push(kk);
})
 this.setState({dist: arra})
  console.log("zainab",this.state.dist);

})


}

Remove()
{
  fire.database().ref('Bins/' ).child(this.state.name).remove();
  window.location.reload();               

}
     


     componentDidMount(){
    // this.getChannelData();
     }
  

  render() {
    const style = {
      width: '97%',
      height: '100%',
      borderStyle: 'solid grey',
      position:'relative',
      // display:'block',
      borderRadius: '25px',
      borderLeft:'6px solid grey',
      borderRight:'6px solid grey',

    }
 


    return (

      <div>
   
       <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />

       <NextNavbar/>
      
       <div  id="map-canvas">
           <div className="row">
            <div className="col-md-2" >
            <h3 style={{textAlign:"center"}}>  Bins <Link to='/AddBin'>  <button type="button" class="btn btn-success"> <span className="glyphicon glyphicon-plus"></span> </button></Link>
</h3>

             {this.state.data.map((data)=>{
          return(   
            <div >
            <div className="col-md-2">
            <button type="button" class="btn btn-danger" ><span className="glyphicon glyphicon-remove" onClick={()=>{this.setState({name:data.name},()=>this.Remove())}}></span></button>
            </div>
           <div className="col-md-10">
           <ListGroup>  
            <ListGroupItem bsStyle="success" name={data.name} onClick={()=>{this.setState({markername:data.name,markerlat:data.lat,markerlng:data.lng,distance:data.Data[Object.keys(data.Data)[Object.keys(data.Data).length-1]]},()=>
            console.log(this.state.distance.Distance,'here is distance'))}}> {data.name}
            </ListGroupItem>
           
            </ListGroup> 
       </div>
        </div>
          )
        })}


            </div>
              <div className="col-md-8">

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
                  
                  {this.state.markername && parseInt(this.state.distance.Distance) > 75 ?

                    <Marker 

                    label={this.state.name}

                    onClick = { this.onMarkerClick}

                    position={{lat:this.state.markerlat,lng:this.state.markerlng}}

                   

                    icon={{

                      url: redbin,

                      anchor: new this.state.google.maps.Point(32,32),

                      scaledSize: new this.state.google.maps.Size(45,45)

            }}                 />:

            this.state.markername && parseInt(this.state.distance.Distance) >=40 ?

                 <Marker 

                    label={this.state.name}

                    onClick = { this.onMarkerClick}

                    position={{lat:this.state.markerlat,lng:this.state.markerlng}}

                   

                    icon={{

                      url: orangebin,

                      anchor: new this.state.google.maps.Point(32,32),

                      scaledSize: new this.state.google.maps.Size(45,45)

            }}                 />: 
            
            this.state.markername && parseInt(this.state.distance.Distance) < 40 ?

            <Marker 

               label={this.state.name}

               onClick = { this.onMarkerClick}

               position={{lat:this.state.markerlat,lng:this.state.markerlng}}

              

               icon={{

                 url: greenbin,

                 anchor: new this.state.google.maps.Point(32,32),

                 scaledSize: new this.state.google.maps.Size(45,45)

       }}                 />: ''

  }

                  {this.state.dist.map(cord=> {
            return (
              <InfoWindow
                  marker = { this.state.activeMarker }
                  visible = { this.state.showingInfoWindow }
                  // onOpen={this.handleClick}
                > 
              <h4> <span className="glyphicon glyphicon-exclamation-sign"></span> {this.state.markername} 
              <hr></hr>
                  <p> Fill Level {this.state.distance.Distance} %</p>
                  <p> Humidity {this.state.distance.Humidity} </p>
                  <p> Temperature {this.state.distance.Temperature} </p>

              </h4>
                </InfoWindow>
                  ) } ) } 
                  </Map>
                  </div>

              <div className="col-md-2" >
            <SideNotif/>
              </div>

           </div>
           </div>    

     </div>
     

    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCdTx0h3SGj4KV0aq1i0NTq2_DVlVeUW1s")
})(MapContainer)






































































      {/* <Map 
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

      
      {this.state.data.map(cord=> {
return (
  <InfoWindow
      marker = { this.state.activeMarker }
      visible = { this.state.showingInfoWindow }
      // onOpen={this.handleClick}
     > 
   <h4>Student cafe  
      <p> Fill Level {cord.fillLevel}</p>
  </h4>
    </InfoWindow>
      ) } ) } 


      </Map>

      </div>
          
        {this.state.data.map((data)=>{
          return(           
            <ListGroupItem bsStyle="success" name={data.name} onClick={()=>{this.setState({markername:data.name,markerlat:data.lat,markerlng:data.lng})}}>{data.name}
            </ListGroupItem>
          )
        })}
      
    

     </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCdTx0h3SGj4KV0aq1i0NTq2_DVlVeUW1s")
})(MapContainer)











 */}








































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