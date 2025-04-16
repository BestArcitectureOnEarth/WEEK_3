import React, { useState, useEffect } from "react";

// element: 랜더링할 컴포넌트
// url: 데이터를 가져올 API 주소
function WithLoader({ element: Element, url, ...props }) {
  // element와 url을 제외한 나머지가 props에 저장되어 전달: 현재는 없다.

  // API에서 가져온 데이터를 저장할 상태
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setData(data);
    }
    getData();
  }, [url]); // url이 바뀌면 다시 데이터를 불러온다

  if (!data) {
    // data가 없는 경우 로딩 중이라는 메시지 띄워줌
    return <div>Loading...</div>;
  }

  // Element는 결국 DogImages가 된다.
  // <DogImages data={data}>
  return <Element {...props} data={data} />;
}

export default WithLoader;
