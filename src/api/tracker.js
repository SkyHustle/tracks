import axios from 'axios';

export default axios.create({
  // This Temp URL provided by ngrok only works for 8 Hours
  baseURL: 'https://ac088310.ngrok.io'
});

