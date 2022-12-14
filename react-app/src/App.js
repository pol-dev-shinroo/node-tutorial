import axios from "axios";

function App() {
  const baseURL = "http://localhost:8070";

  const handleProducts = async () => {
    const res = await axios.get(`${baseURL}/api/products`);
    console.log(res);
  };

  const handlePeopel = async () => {
    const res = await axios.get(`${baseURL}/api/people`);
    console.log(res);
  };

  return (
    <>
      <button onClick={handleProducts}>Products</button>
      <button onClick={handlePeopel}>People</button>
    </>
  );
}

export default App;
