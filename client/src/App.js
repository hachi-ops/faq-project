import { Routes, Route } from "react-router-dom";
import "./App.css";

import FAQ from "./pages/FAQ";
import Navbar from "./components/Navbar";

import ListQuestions from "./components/ListQuestions";

import AdminPage from "./pages/AdminPage";
import Profile from "./components/Profile";
import Landing from "./components/Landing";
import { AuthProvider } from "./components/auth";
import Login from "./components/Login";
import RequireAuth from "./components/RequireAuth";
import Register from "./components/Register";
function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Landing />
                <FAQ />
              </div>
            }
          />
          <Route path="list-questions" element={<ListQuestions />} />
          <Route
            path="profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="admin" element={<AdminPage />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
