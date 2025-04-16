import { useState } from "react";
import { Fahrenheit, Kelvin, SomeTemperature } from "./Temperature";

// 상태 끌어올리기 X
// 각 상태 변경 시 데이터를 사용하지 않는 자식 컴포넌트까지 모두 리렌더링될 수 있어 안좋다.

function Input({ value, handleChange }) {
  console.log("input rendered");
  return (
    <input
      value={value}
      onChange={(e) => {
        handleChange(e.target.value);
      }}
    ></input>
  );
}

const NoLift = () => {
  const [value, setValue] = useState("");
  console.log("NoLift App rendered");

  return (
    <>
      <h1>Temperature Converter</h1>
      <Input value={value} handleChange={setValue} />
      <Kelvin value={value} />
      <Fahrenheit value={value} />
      <SomeTemperature />
    </>
  );
};
export default NoLift;
