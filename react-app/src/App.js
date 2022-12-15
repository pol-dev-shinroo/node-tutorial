import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const baseURL = "http://localhost:8070";

  const [data, setData] = useState({ products: [], people: [] });

  console.log(data);

  useEffect(() => {
    const handleProductsApi = async () => {
      const res = await axios.get(`${baseURL}/api/products`);
      setData((prev) => {
        return { ...prev, products: res.data };
      });
    };
    const handlePeopleApi = async () => {
      const res = await axios.get(`${baseURL}/api/people`);
      setData((prev) => {
        return { ...prev, people: res.data };
      });
    };
    handleProductsApi();
    handlePeopleApi();
  }, []);

  const getProductById = async (id) => {
    const res = await axios.get(`${baseURL}/api/products/${id}`);
    console.log(res);
  };

  const getProductbyQuery = async (search, limit) => {
    const res = await axios.get(
      `${baseURL}/api/v1/products?search=${search}&limit=${limit}`
    );
    console.log(res);
  };

  return (
    <>
      {data.products.map((item, idx) => {
        const { id, name } = item;
        console.log(typeof id);
        return <button onClick={() => getProductById(id)}>{name}</button>;
      })}
      <button onClick={() => getProductById("")}>empty string</button>
      <button onClick={() => getProductById("asdfasdf")}>wrong string</button>
      <button onClick={() => getProductById(23424)}>wrong number</button>
      <button onClick={() => getProductById()}>undefined</button>

      <div>
        <button onClick={() => getProductbyQuery("z", "1")}>스티링 쿼리</button>
      </div>
    </>
  );
}

export default App;
