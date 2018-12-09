import React, {Component} from 'react';
import fire from '../config/Fire';

var LineChart = require("react-chartjs").Line;

var chartData = {
	labels: ["January", "February", "March", "April", "May", "June", "July"],
	datasets: [
		{
			label: "Sales",
			fillColor: "rgba(220,220,220,0.2)",
			strokeColor: "rgba(220,220,220,1)",
			pointColor: "rgba(213, 216, 220,1  )",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(220,220,220,1)",
			data: [18, 25, 36, 44, 56, 29, 40]
		},
		{
			label: "Profit",
			fillColor: "rgba(151,187,205,0.2)",
			strokeColor: "rgba(151,187,205,1)",
			pointColor: "rgba(151,187,205,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(151,187,205,1)",
			data: [10, 12, 22, 19, 50, 17, 90]
		}
	]
};
var chartOptions={

    ///Boolean - Whether grid lines are shown across the chart
	scaleShowGridLines : true,

	//String - Colour of the grid lines
	scaleGridLineColor : "rgba(0,0,0,.05)",

	//Number - Width of the grid lines
	scaleGridLineWidth : 1,

	//Boolean - Whether to show horizontal lines (except X axis)
	scaleShowHorizontalLines: true,

	//Boolean - Whether to show vertical lines (except Y axis)
	scaleShowVerticalLines: true,

	//Boolean - Whether the line is curved between points
	bezierCurve : true,

	//Number - Tension of the bezier curve between points
	bezierCurveTension : 0.4,

	//Boolean - Whether to show a dot for each point
	pointDot : true,

	//Number - Radius of each point dot in pixels
	pointDotRadius : 4,

	//Number - Pixel width of point dot stroke
	pointDotStrokeWidth : 1,

	//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
	pointHitDetectionRadius : 20,

	//Boolean - Whether to show a stroke for datasets
	datasetStroke : true,

	//Number - Pixel width of dataset stroke
	datasetStrokeWidth : 2,

	//Boolean - Whether to fill the dataset with a colour
	datasetFill : true,

	//Boolean - Whether to horizontally center the label and point dot inside the grid
	offsetGridLines : false
};


class Chart extends Component {
	constructor(props){
		super(props);
		this.state={
			data:{},
			bins:[],
			perticularbin:[10,30,40]
		}
	}
	componentWillMount(){
		 var bin=[]
		fire.database().ref('Bins').once('value',(snapshot)=>{
			this.setState({bins:Object.keys(snapshot.val())},()=>console.log('binss',this.state.bins))
		
		})
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
    render(){
        return(
			<div>
			<div>
            <LineChart  data={chartData} options={chartOptions} width={400} height={350}/>
			</div>
			<div>
				{this.state.bins.map((bin)=>{
					return(<a onClick={()=>this.binClicked(bin)}>{bin}</a>)
				})}
			</div>
			</div>
        )}}
export default Chart;