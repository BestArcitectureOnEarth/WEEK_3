// 고차 컴포넌트
import React from "react";

function withStyles(Component) {
  return (props) => {
    const style = { padding: "0.2rem", margin: "1rem", color: "red" };
    return <Component style={style} {...props} />;
  };
}
const Button = (props) => (
  <button style={{ color: "blue" }} {...props}>
    Click me!
  </button>
);
const Text = (props) => <p {...props}>Hello World!</p>;

const Styles = () => {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  const StyledButton = withStyles(Button);
  const StyledText = withStyles(Text);

  return (
    <>
      <StyledButton onClick={handleClick} />
      <StyledText />
    </>
  );
};
export default Styles;
