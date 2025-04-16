import { useState } from "react";
import { Fahrenheit, Kelvin, SomeTemperature } from "./Temperature";

// 상태 끌어올리기 O

function Input(props) {
  const [value, setValue] = useState("");
  console.log("input rendered");
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      {props.render(value)}
    </>
  );
}

const Lift = () => {
  console.log("Lift App rendered");
  return (
    <>
      <h1>Temperature Converter</h1>
      <Input
        render={(value) => (
          <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
          </>
        )}
      />
      <SomeTemperature />
    </>
  );
};
export default Lift;
