import { useState } from "react";

// 2. 원으로 마우스의 위치를 출력하는 방식
function MouseCircle() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  return (
    <>
      <div
        onMouseMove={handleMouseMove}
        style={{ height: "100vh", position: "relative" }}
      >
        {/*원으로 출력 */}
        <div
          style={{
            position: "absolute",
            top: position.y,
            left: position.x,
            width: 20,
            height: 20,
            backgroundColor: "red",
            borderRadius: "50%",
          }}
        />
      </div>
    </>
  );
}
export default MouseCircle;
