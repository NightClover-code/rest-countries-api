import axios from 'axios';
// api endpoint base URL
export default axios.create({
  baseURL: 'https://restcountries.eu/rest/v2/',
});
