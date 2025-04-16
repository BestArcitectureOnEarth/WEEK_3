import { useState } from "react";

// 1. 텍스트로 마우스의 위치를 출력하는 방식
function MouseText() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  return (
    <>
      <div onMouseMove={handleMouseMove} style={{ height: "100vh" }}>
        {/* 텍스트로 출력 */}
        <h1>
          The mouse position is ({position.x},{position.y})
        </h1>
      </div>
    </>
  );
}
export default MouseText;
