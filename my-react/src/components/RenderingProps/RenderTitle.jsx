import React from "react";
//import { render } from "react-dom";
const Title = (props) => props.render();

const RenderTitle = () => {
  return (
    <>
      <Title
        render={() => (
          <h1>
            <span role="img" aria-label="emoji">
              ⭐
            </span>
            I am a render prop!{" "}
            <span role="img" aria-label="emoji">
              ⭐
            </span>
          </h1>
        )}
      />
    </>
  );
};
export default RenderTitle;
