import React , {Component} from 'react';
import { Thumbnail} from 'react-bootstrap';

export default class VideoList extends React.Component{
	

    renderList = (item) => {
		return (
				<li key = {item.etag} onClick={() => this.props.onClick(item)}>
				 	<Thumbnail href="#" alt="171x180"  src={item.snippet.thumbnails.high.url}/>
				 	<h5>{item.snippet.title}</h5><hr></hr>
				</li>
			);
	}

	render() {
	    return (
	    	<div className="blue">
	    	 	<ul>
	    	 		{this.props.videoList.map(this.renderList)}
	    	 	</ul>
	       </div>
	    )
	}
  
}
