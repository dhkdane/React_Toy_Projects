import React, { useEffect, useState } from "react";

export default function StateAsync() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(20);

  //   const incAge = () => {
  //     setCount(count + 1);
  //     //setCount(++count);
  //     if (count < 3) {
  //       setAge(age + 1);
  //     }
  //   };
  useEffect(() => {
    if (count != 0 && count < 3) {
      setAge(age + 1);
    }
  }, [count]);

  return (
    <div>
      <div>My age: {age}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increase age
      </button>
    </div>
  );
}

// limit age 23
// setCount is aync so skip and execute if...
// but count is still 2 so if is working.
