import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import CoursesDetailPage from "./pages/CoursesDetailPage";
import SubjectDetailPage from "./pages/SubjectDetailPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/category" element={<CoursesPage />} />
          <Route path="/coursesDetail" element={<CoursesDetailPage />} />
          <Route path="/subjectDetail" element={<SubjectDetailPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
