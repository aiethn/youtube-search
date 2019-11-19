import axios from 'axios';

const KEY = 'AIzaSyCBkoO2PV6ON7SznSDIryZrx6Q4e0Gq20U';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});