import React from "react";
import ReactDOM from "react-dom";
import Button from '@mui/material/Button';
// eslint-disable-next-line no-console
console.log(
  "%c BALU WAS HERE",
  "color: #FFFFFF; font-style: bold; background-color: #000000;padding: 20px"
);

const Root = (): JSX.Element => {
  return (
    <>
      <h1>Welcome</h1>
      <Button variant="contained">Hello World</Button>
    </>
  );
};

ReactDOM.render(<Root />, document.getElementById("app"));
