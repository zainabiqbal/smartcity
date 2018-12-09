import React, {Component} from 'react';
import fire from '../config/Fire';
import {XYPlot, XAxis, YAxis, VerticalGridLines, LineSeries,HorizontalGridLines} from 'react-vis';


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
			arr.push({x:counter++,y:s.Data[i].Distance});
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
				<XYPlot
				//here do styling
				style={{'background':'rgba(19,20.7,0.4)'}}
                width={300}
                height={300}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <LineSeries
					data={this.state.perticularbin}
					//here do line styling
					style={{strokeWidth:3}}/>
            </XYPlot>
					{this.state.bins.map((bin)=>{
						return(
							<div>
							<button onClick={()=>this.thisBin(bin)}>{bin}</button>
							</div>
						)
					})}
					<a></a>
			</div>
        )}}
export default Chart;