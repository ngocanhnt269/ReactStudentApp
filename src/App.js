import HomePage from "./pages/HomePage";
import StudentDetailPage from "./pages/StudentDetailPage";
import StudentListPage from "./pages/StudentListPage";
import AboutPage from "./pages/AboutPage";
import NavBar from "./components/NavBar";
import NotFoundPage from "./components/NotFoundPage";

import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/list" element={<StudentListPage />} exact />
          <Route path="/detail/:id" element={<StudentDetailPage />} exact />
          <Route path="/about" element={<AboutPage />} exact />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
