import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout.jsx";
import { AuthProvider, useAuth } from "./context/AuthContext.jsx";
import Analytics from "./pages/Analytics.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import Products from "./pages/Products.jsx";
import Records from "./pages/Records.jsx";
import Settings from "./pages/Settings.jsx";
import TasksNotes from "./pages/TasksNotes.jsx";

function ProtectedRoute({ children }) {
  const { account } = useAuth();

  if (!account) {
    return <Navigate to="/" replace />;
  }

  return children;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/app"
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="tasks" element={<TasksNotes />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="calendar" element={<Navigate to="/app/tasks" replace />} />
        <Route path="records" element={<Records />} />
        <Route path="excel-data" element={<Navigate to="/app/records" replace />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}
