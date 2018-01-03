import React , {Component} from 'react';
import { Button, form,  FormGroup, FormControl, Grid, Col, Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import {fetchVideoList} from '../actions/fetch-videos-action';
import VideoList from './video-list';
import VideoFrame from './video-frame';
import searchYouTube from 'youtube-api-search';



export default class VideoDashboard extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = { value : '' ,
					   videoList : [],
					   selectedVideo : []
					 };
	} 

	videoNameChange = event => {
		this.setState({value: event.target.value});
	}

	makeApiCall = e => {
    	e.preventDefault();
    	const API_KEY = 'AIzaSyAAXEPYRQjGOvvymevGPhKVIATIO6GZEFQ';
	    let searchString = this.state.value;
		searchYouTube({key: API_KEY, term: searchString, maxResults: 6}, (response) => {
	           this.setState({
	           	videoList : response, 
	           	selectedVideo : response[0]}
	           	);
	           console.log(this.state)
		})

    }

  handleClick(video) {
  	console.log("This video has been clicked >>", video)
  this.setState({selectedVideo : video});
  }

render() {
    return (
    	<div>
	    	 <Grid>
	    		 <h2>Roy's Awesome YouTube Application </h2>
	        	 <form onSubmit = {this.makeApiCall.bind(this)} >
			      	<Row className="show-grid">
				      <Col xs={12} md={10}>
					    <FormGroup bsSize="large">
					      <FormControl 
					      	type="text" 
					      	placeholder="Search for a cool video !!"   
					      	value={this.state.value}
					      	onChange = {this.videoNameChange.bind(this)}/>
					    </FormGroup>
				      </Col>

				      <Col xs={6} md={2}>
				      	  <Button 
				      	  	type= "submit" 
				      	  	bsStyle="primary" 
				      	  	bsSize="large">
				      	  	Search
				      	  	</Button>
				      </Col>
		    		</Row>
		    	  </form>
	        </Grid>
	        <Grid>
		    <Row className="show-grid">
		     <Col  xs={12} md={8} >
		      	<VideoFrame selectedVideo={this.state.selectedVideo}/>
		      </Col>
		      <Col  xs={6} md={4} >
		      	<VideoList videoList={this.state.videoList} onClick={this.handleClick.bind(this)} />
		      </Col>
		    </Row>
		    </Grid>
       </div>
    );
  }
}

// function mapStateToProps (state)
// {
// 	console.log("mapStateToProps>>", state)
// 	return {
// 		videos : state.videoList
// 	}
// }
//export default connect(mapStateToProps, {fetchVideoList})(VideoDashboard);
