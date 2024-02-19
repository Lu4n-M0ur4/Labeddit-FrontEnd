import { useEffect, useState } from "react";
// import { BASE_URL } from "../constants/urls";
import axios from "axios";


export default function useRequestData(url, initialState) {
  const [data, setData] = useState([initialState]);

  useEffect(() => {
    axios
      .get(`${url}`)
      .then((response) => {
        console.log(response)
        setData(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, [url]);

  return data;
}
