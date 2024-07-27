import React from "react";
import Button from "./Button";

const list = [
  "all",
  "live",
  "soccer",
  "news",
  "rugby",
  "all",
  "live",
  "soccer",
  "news",
  "rugby",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
