import { useState } from "react";

const useInput = (defaultValue) => {
  const [input, setInput] = useState(defaultValue);
  console.log(input);

  const handleInput = (e) => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
  };
  return [input, handleInput];
};

export default useInput;
