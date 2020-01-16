import axios from 'axios';

export default axios.create({
  // This Temp URL provided by ngrok only works for 8 Hours
  baseURL: 'http://fa9c96bb.ngrok.io'
});

