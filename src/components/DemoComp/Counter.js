import React, { useState } from "react";

export default function Counter() {
  const [count, handleCount] = useState(0);
  return <div onClick={() => handleCount(count + 1)}>{count}</div>;
}
