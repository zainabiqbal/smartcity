import React, {Component} from 'react';
import fire from '../config/Fire';
import {XYPlot, XAxis, YAxis, VerticalGridLines, LineMarkSeries,HorizontalGridLines} from 'react-vis';
import {Button, ButtonToolbar,ButtonGroup} from 'react-bootstrap';

class Chart extends Component {
	constructor(props){
		super(props);
		this.state={
			data:{},
			bins:[],
			perticularbin:[]
		}
	}
	componentWillMount(){
		 var bin=[]
		fire.database().ref('Bins').once('value',(snapshot)=>{
			this.setState({data:snapshot.val(),bins:Object.keys(snapshot.val())})
			
		})
	}
	getData=(s)=>{
		var y=s.Data;
		var arr=[];
		var counter=0;
		for (var i in y) {
			//console.log("sad",x.Data[i].Distance);
			//this.setState({ myArray: joined })
			// this.setState({perticularbin:this.state.perticularbin.concat([{x:counter,y:s.Data[i].Distance}])},()=>{counter++;
			// console.log('lol',this.state.perticularbin)
			// })
			arr.push({x:counter++,y:s.Data[i].EstimatedLevel});
			console.log('array',arr)
		}
		this.setState({perticularbin:arr})
	}
	binClicked=(bin)=>{
		var bin=[]
		fire.database().ref('Bins/'+bin+'/Data').once('value',(snapshot)=>{
			console.log(snapshot.val())
			//this.setState({perticularbin:snapshot.val()})
			snapshot.forEach((d)=>{
				console.log(d.val().Distance)
			})
		})
	}
	thisBin(binName){
		this.getData(this.state.data[binName]);
	}
    render(){
        return(
			<div>
				<h2>Daily graph routine</h2>
				<XYPlot
				//here do styling
				style={{'background':'rgb(178,201,202)', borderRadius:'7px',marginBottom:'50px'}}
                width={1100}
                height={400}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <LineMarkSeries
					data={this.state.perticularbin}
					//here do line styling
					style={{strokeWidth:2, stroke: 'blue',margin:'10px',strokeLinejoin: "round"}}
					/>
            </XYPlot>


			<ButtonToolbar>
			

					{this.state.bins.map((bin)=>{
						return(
							
								<Button bsStyle="danger" onClick={()=>this.thisBin(bin)}> {bin} </Button>
						
						)
					})}
				
			</ButtonToolbar>

			</div>
        )}}
export default Chart;