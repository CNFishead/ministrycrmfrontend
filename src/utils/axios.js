import axios from "axios";

/**
 * @description   - Creates an axios instance with the base url of the api if we are in production
 *
 * @possible      - development http://localhost:5000/api/v1
 * @possible      - production  https://api.truthcasting.com/api/v1
 */
export default axios.create({
  baseURL: process.env.NODE_ENV === "production" ? process.env.API_URL : process.env.DEV_API_URL,
  headers: {
    "Content-type": "application/json",
  },
});
