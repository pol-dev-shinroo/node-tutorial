import React, { useState } from "react";

export const useInput = (defaultValue) => {
  const [input, setInput] = useState(defaultValue);
  console.log(input);

  /** 인풋을 조작하는 함수 */
  const handleInput = (e) => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value }); /// dynamic object property
  };
  return [input, handleInput];
};
