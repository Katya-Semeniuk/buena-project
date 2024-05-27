import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <ToastContainer
        position="top-right"
        autoClose={2500}
        closeOnClick={true}
        theme="colored"
        icon={true}
        hideProgressBar={true}
        transition:Bounce
        closeOnClickrtl={true}
      />
    </>
  );
}

export default App;
