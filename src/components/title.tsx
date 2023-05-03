import React from "react";

// receive title from props how string
const Title: React.FC<{ title: string }> = ({ title }) => {
  return <h1>{title}</h1>;
};

export default Title;
