import Axios from 'axios';
import searchYouTube from 'youtube-api-search';
const API_KEY = 'AIzaSyAAXEPYRQjGOvvymevGPhKVIATIO6GZEFQ';


export const FETCH_VIDEO_LIST = 'FETCH_VIDEO_LIST';
export function fetchVideoList(payload) {

	const API_KEY = 'AIzaSyAAXEPYRQjGOvvymevGPhKVIATIO6GZEFQ';
    let term = "surfing";
	console.log("API_URL >>", API_KEY);
	let response = searchYouTube({key: API_KEY, term: term, maxResults: 6}, (response) => {
		   console.log("Videos Received >> ", response);
           return response;
	})

	return {
		type: FETCH_VIDEO_LIST,
		payload : response
	}
}
