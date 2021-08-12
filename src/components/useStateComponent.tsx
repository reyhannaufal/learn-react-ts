import { useState } from "react";
import Button from "./layout/Button";

function UseStateComponent() {
  const [arr, setArr] = useState<number[]>([1]);

  return (
    <div>
      <div className="space-x-2">
        <Button
          text="Add to array"
          onClick={() => setArr([...arr, arr.length + 1])}
        />
        <Button text="Delete array" onClick={() => setArr([1])} />
      </div>
      {JSON.stringify(arr)}
      {/* useState - 2 */}
    </div>
  );
}

export default UseStateComponent;
