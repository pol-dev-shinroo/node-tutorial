import React from "react";
import { useInput } from "./hook/useInput";

const Test = () => {
  const [input, handleInput] = useInput({ title: "", body: "" });
  return (
    <div>
      <input
        type="text"
        name="title"
        value={input.title}
        onChange={handleInput}
      />
      <input
        type="text"
        name="body"
        value={input.body}
        onChange={handleInput}
      />
    </div>
  );
};

export default Test;
