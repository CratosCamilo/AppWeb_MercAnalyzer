import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthProvider } from "./contexts";
import { HomeLayout, LoginDALayout } from "./pages";

export const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* LOGIN */}
          <Route path="/login" element={<LoginDALayout />} />

          {/* HOME */}
          <Route
            path="/search"
            element={
              <HomeLayout />
              // <RequireAuth>
              //   <HomeLayout />
              // </RequireAuth>
            }
          />

          {/* DEFAULT ROUTE */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}