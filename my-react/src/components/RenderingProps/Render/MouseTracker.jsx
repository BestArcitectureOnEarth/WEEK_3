// MouseText와 MouseCircle은 출력 형태를 제외하고 로직이 모두 똑같아 중복 코드가 발생한다.
// 공통 로직 코드를 MouseTracker에서만 관리하고,
// MouseText와 MouseCircle에서는 MouseTraker을 재사용한다.

import { useState } from "react";

function MouseTracker({ render }) {
  // 공통 로직 코드를 이곳에서만 관리한다.
  // -------------------------
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  // -------------------------

  return (
    <>
      <div onMouseMove={handleMouseMove} style={{ height: "100vh" }}>
        {render(position)}
      </div>
    </>
  );
}
export default MouseTracker;
