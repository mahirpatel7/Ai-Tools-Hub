// // src/App.js
// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AppLayout from "./layouts/AppLayout";
// import HomePage from "./pages/HomePage";
// import QRGeneratorTool from "./tools/utility/QRGeneratorTool";
// import UUIDGeneratorTool from "./tools/utility/UUIDGeneratorTool";
// import RandomJokeTool from "./tools/fun/RandomJokeTool";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route element={<AppLayout />}>
//           <Route path="/" element={<HomePage />} />

//           {/* Utitlity Tools */}
//           <Route path="/main/QRGenerator" element={<QRGeneratorTool />} />
//           <Route path="/main/UUIDGenerator" element={<UUIDGeneratorTool />} />

//           {/* Fun Tools */}
//           <Route path="/main/RandomJoke" element={<RandomJokeTool />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;




import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage";

import QRGeneratorTool from "./tools/utility/QRGeneratorTool";
import UUIDGeneratorTool from "./tools/utility/UUIDGeneratorTool";
import URLShortenerTool from "./tools/utility/URLShortenerTool";

import RandomJokeTool from "./tools/fun/RandomJokeTool";

/**
 * ProtectedRoute Component (NOW REMOVED)
 * ------------------------------------
 * Old version relied on localStorage + props → insecure & broken on new tab
 * REPLACED ENTIRELY by AuthContext + useAuth() inside Main & pages
 * No longer needed → removed for clean architecture
 */

// REMOVED: const ProtectedRoute = ... (deleted completely)

// REMOVED: All localStorage/sessionStorage auth state
// REMOVED: loggedInUser, companyData state in App
// REASON: Auth data now lives only in memory via AuthContext → secure + forces login on new tab

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />

          {/* Utitlity Tools */}
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
