import { useState, useEffect } from "react";
import axios from "axios";

const instance = axios.create({
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
    "Access-Control-Allow-Origin": "*",
  },
});

function App() {
  useEffect(() => {
    const handleApi = async () => {
      const res = await axios.get("/api/products/", {
        params: { pwd: "1234" },
      });
      console.log(res);
    };
    handleApi();
  }, []);
  return <></>;
}

export default App;
