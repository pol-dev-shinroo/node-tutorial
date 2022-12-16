import React, { useState } from "react";
import useInput from "./hook/useTest";

const Test = () => {
  const [data, setData] = useState();

  const [input, handleInput] = useInput({
    title: "",
    body: "",
  });

  return (
    <div>
      <input
        type="text"
        value={input.title}
        onChange={handleInput}
        name="title"
      />
      <input
        type="text"
        value={input.body}
        onChange={handleInput}
        name="body"
      />
    </div>
  );
};

export default Test;
