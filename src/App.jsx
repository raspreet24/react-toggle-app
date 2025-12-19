import { useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ColorToggle from "./colorToggle";                 

function App() {
  const [status, setStatus] = useState(false);

  const toggleStatus = () => {
    setStatus(!status);
  };

  return (
    <div>
      <ColorToggle/>
      <button onClick={toggleStatus}>Toggle</button>
      {status ? <ComponentA /> : <ComponentB />}
    </div>
  );
}

export default App;