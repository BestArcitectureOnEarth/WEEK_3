import MouseTracker from "./MouseTracker";

// 2. 원으로 마우스의 위치를 출력하는 방식
// 이제 중복 로직 코드는 없앨 수 있다
function MouseCircle() {
  return (
    <>
      <MouseTracker
        render={(position) => (
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
        )}
      ></MouseTracker>
    </>
  );
}
export default MouseCircle;
