import { AuthProvider } from "./auth/AuthProvider";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "./pages/router/ProtectedRoute";

function App() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
