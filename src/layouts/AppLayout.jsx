import { Outlet, Link } from "react-router-dom";

const AppLayout = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar placeholder */}
      <aside
        style={{
          width: 240,
          borderRight: "1px solid #eee",
          padding: "1rem",
        }}
      >
        <h2>AI Tools Hub</h2>
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tools">All Tools</Link></li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, padding: "1.5rem" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
