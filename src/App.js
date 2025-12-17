import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage";

import QRGeneratorTool from "./tools/utility/QRGeneratorTool";
import UUIDGeneratorTool from "./tools/utility/UUIDGeneratorTool";
import URLShortenerTool from "./tools/utility/URLShortenerTool";
import RandomJokeTool from "./tools/fun/RandomJokeTool";

// ✅ ADD THIS IMPORT
import RouteTracker from "./components/RouteTracker";

function App() {
  return (
    <Router>
      {/* ✅ ADD THIS LINE */}
      <RouteTracker />

      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />

          {/* Utility Tools */}
          <Route path="/main/QRGenerator" element={<QRGeneratorTool />} />
          <Route path="/main/UUIDGenerator" element={<UUIDGeneratorTool />} />
          <Route path="/main/URLShortener" element={<URLShortenerTool />} />

          {/* Fun Tools */}
          <Route path="/main/RandomJoke" element={<RandomJokeTool />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
