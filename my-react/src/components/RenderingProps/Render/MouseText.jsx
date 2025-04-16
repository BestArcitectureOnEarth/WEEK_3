import MouseTracker from "./MouseTracker";

// 1. 텍스트로 마우스의 위치를 출력하는 방식
// 이제 중복 로직 코드는 없앨 수 있다
function MouseText() {
  return (
    <>
      <MouseTracker
        render={(position) => (
          <h1>
            The mouse position is ({position.x},{position.y})
          </h1>
        )}
      ></MouseTracker>
    </>
  );
}
export default MouseText;
