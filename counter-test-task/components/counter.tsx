import React from "react";

interface Props {
  currentCount: number;
}

const Counter: React.FC<Props> = ({ currentCount }) => (
  <div className={"counter"}>
    {currentCount}
  </div>
)

export default Counter;