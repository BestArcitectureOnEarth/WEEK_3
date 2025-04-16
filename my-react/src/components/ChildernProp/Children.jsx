import { useState } from "react";
import { Fahrenheit, Kelvin, SomeTemperature } from "./Temperature";
// Input 컴포넌트의 props.children을 통해 자식으로 전달된 함수에 접근할 수 있다.
// props.render에 사용자 입력 값을 전달하는 대신, props.children에 사용자 입력값을 전달한다.
// -> 자식 컴포넌트들은 렌더링 prop의 이름에 구애받지 않고도 값에 접근할 수 있다.

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
      {props.children(value)}
    </>
  );
}

const Children = () => {
  console.log("Children Lift App rendered");
  return (
    <>
      <h1>Temperature Converter</h1>
      <Input>
        {(value) => (
          <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
          </>
        )}
      </Input>
      <SomeTemperature />
    </>
  );
};
export default Children;
