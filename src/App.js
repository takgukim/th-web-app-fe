import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BoardListPage from "./page/BoardListPage";
import BoardWritePage from "./page/BoardWritePage";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<BoardListPage />} />
          <Route path="/write/:idx" element={<BoardWritePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
