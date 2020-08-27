import axios from 'axios';

const api = axios.create({
  baseURL:String(process.env.REACT_APP_API_BASE_URL)
});
export default api