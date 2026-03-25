import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import PrivateRoute from "./routes/PrivateRoute";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
