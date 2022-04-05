import axios from 'axios';

const KEY = 'AIzaSyBjaTAWTLKbcdG1P-4NFiApUvZJfcu0MD8';


//search

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        key: KEY,
        part: 'snippet',
        maxResults: 5
    }
});