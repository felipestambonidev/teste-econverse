import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";

export default function AppRoutes() {
  return (
    <Router>
      <Suspense fallback={<p>Carregando...</p>}>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
