import viteLogo from "/vite.svg";
import Home from "./assets/pages/Home/Home";

import "./App.css";

function App() {
  return (
    <>
      <Home />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
    </>
  );
}

export default App;
