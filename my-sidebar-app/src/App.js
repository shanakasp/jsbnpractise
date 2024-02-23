import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import InboxPage from "./Pages/InboxPage";
import Minidrawer from "./components/MiniDrawer";

function App() {
  return (
    <Router>
      <Minidrawer></Minidrawer>
      <Routes>
        <Route path="/inbox" element={<InboxPage />} />
      </Routes>
    </Router>
  );
}

export default App;
