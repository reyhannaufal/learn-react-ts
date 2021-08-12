import { useState } from "react";

function UseStateComponent() {
  const [arr, setArr] = useState<number[]>([]);

  const [name, setName] = useState<string | null>(null);

  return (
    <div>
      <div>
        <button onClick={() => setArr([...arr, arr.length + 1])}>
          Add to aray
        </button>
        <button onClick={() => setArr([])}>Delete array</button>
        {JSON.stringify(arr)}
      </div>
      {/* useState - 2 */}
      <div>
        <button onClick={() => setName("yey")}>Add name</button>

        {JSON.stringify(name)}
      </div>
    </div>
  );
}

export default UseStateComponent;
