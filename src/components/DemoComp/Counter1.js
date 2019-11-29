import React, { useState } from "react";
import Counter2 from "../DemoComp/Counter1";

export default function Counter1() {
  const [count1, handleCount] = useState(0);
  return (
    <div onClick={() => handleCount(count1 + 1)}>
      {count1}
      <Counter2 />
    </div>
  );
}
