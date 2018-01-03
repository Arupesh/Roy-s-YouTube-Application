import React , {Component} from 'react';
import { ResponsiveEmbed, embed} from 'react-bootstrap';
import {connect} from 'react-redux';
//import {makeWeatherApiCall} from '../actions/weather-action';
//import WeatherList from './weather-list';

export default class VideoFrame extends React.Component {


    

render() {
		console.log(this.props)
		const video = this.props.selectedVideo;
		if(video.length < 1)
		{
			return (<div>Search and Select a video you want to watch !!</div>)
		}
		
    	const videoId= video.id.videoId;
		const url = `https://www.youtube.com/embed/${videoId}`;

    	return (

    	 	 <div style={{ width: 660, height: 'auto' }}>
					<ResponsiveEmbed a16by9 key = {video.etag}>
			  		<embed type="image/svg+xml" src={url} />
			  	   </ResponsiveEmbed>	
			  </div>
      
    		)
		}
  
}
