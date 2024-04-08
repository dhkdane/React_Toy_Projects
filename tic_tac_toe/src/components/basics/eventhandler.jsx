import React from "react";

export default function eventhandler() {
  function showName() {
    console.log("i am Andy");
  }
  function showAge(age) {
    console.log("i am", age);
  }

  return (
    <div>
      <h1>eventhandler</h1>
      <button onClick={showName}></button>
      <button
        onClick={() => {
          showAge(30);
        }}
      ></button>
    </div>
  );
}

/**   
    onClick={showName}  just the function name to call the function
    onClick={() => {showAge(30)}} arrow function is for when need to pass argument
    onClick={showAge(30)} this function will return the value which is undefined
*/
