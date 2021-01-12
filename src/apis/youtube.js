import axios from 'axios';

const KEY = 'AIzaSyCBLHnFYsO91SejSCJnATnb07fZTm_Pf2U';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        key: KEY
    }
})
