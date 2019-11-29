import React, { useState } from "react";
export default function Counter2() {
  const [count2, handleCount] = useState(0);
  return <div onClick={() => handleCount(count2 + 1)}>{count2}</div>;
}
