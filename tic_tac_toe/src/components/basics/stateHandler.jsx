import React, { useState } from "react";

// 이방식은 순수 자바스크립트 방식으로 돔에 직접 접근해 렌더링 시킨것.
// export default function StateHandler() {
//   let name = "Andy";

//   function changeName() {
//     name = name === "Andy" ? "Dane" : "Andy";
//     document.getElementById("name").innerText = name;
//   }

//   return (
//     <div>
//       <h1>stateHandler</h1>
//       <h2 id="name">{name}</h2>
//       <button onClick={changeName}>change</button>
//     </div>
//   );
// }

//이방식은 리액트 스테이트 값을 변경해 버츄얼돔에게 업데이트 하라고 요청해 바뀐부분을 리렌딩 시킨다.
export default function StateHandler() {
  const [name, setName] = useState("Andy");

  return (
    <div>
      <h1>stateHandler</h1>
      <h2>{name}</h2>
      <button
        onClick={() => {
          setName(name === "Andy" ? "Dane" : "Andy");
        }}
      >
        change
      </button>
    </div>
  );
}

// if(name === "Mike"){
//     name = "Jane";
// } else {
//     name = "Mike";
// }

//
