import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img
              src={viteLogo}
              className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
              alt="Vite logo"
            />
          </a>
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto react"
              alt="React logo"
            />
          </a>
        </div>
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <h1 className="text-lg font-medium">Vite + React</h1>

          <p className="read-the-docs">Click on the Vite and React logos to learn more</p>

          <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        </div>
      </figure>
    </>
  );
}

export default App;
