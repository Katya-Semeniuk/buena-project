import { Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home/Home";
import Account from "./assets/pages/Account/Account";
import NotFound from "./assets/pages/NotFound/NotFound";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
