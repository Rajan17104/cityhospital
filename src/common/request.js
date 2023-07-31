import axios from "axios";
import { BASE_URL } from "../utils/baseURL";



const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000
  });


  const sendRequest = (config) => {
    instance.request(config);
  }

const getRequest = (path) => {
    sendRequest({
        method: 'GET',
        url: path
    })
}