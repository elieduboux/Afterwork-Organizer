import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:9100/",
  headers: {
    "Content-type": "application/json"
  }
});