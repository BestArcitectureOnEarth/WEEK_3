import React from "react";
import WithLoader from "./withLoader";

// props로 받은 객체 중에서 data만 구조분해할당해서 사용.
// data.message는 이미지 url들의 배열이다.

// map()을 이용해서 배열을 순회하고, 각 이미지 url을 dog에 담는다.
// key는 리액트의 리스트 랜더링 시 고유 키.
function DogImages({ data }) {
  console.log(data.message);
  return data.message.map((dog, index) => (
    <img src={dog} alt="dog" key={index}></img>
  ));
}

const FetchImage = () => {
  return (
    <>
      <WithLoader
        element={DogImages}
        url="https://dog.ceo/api/breed/labrador/images/random/6"
      />
    </>
  );
};
export default FetchImage;
