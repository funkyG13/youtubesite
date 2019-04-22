import axios from 'axios';

const KEY ='AIzaSyD0z1gXU6-Cvm31JIFjfnu30ot14CvBGbs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params:{
        part:'snippet',
        maxResults: 15,
        key:KEY
    }
});