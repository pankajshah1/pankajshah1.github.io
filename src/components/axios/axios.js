import axios from "axios";

const instance = axios.create({
  baseURL: "https://portfoliopankajshah.firebaseio.com/"
});

export default instance;
