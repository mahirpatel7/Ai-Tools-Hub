// src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage";
import ToolsPage from "./pages/ToolsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/tools" element={<ToolsPage />} />
          {/* Later: /category/:categoryId and /tools/:categoryId/:toolId */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
