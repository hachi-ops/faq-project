// import Profile from "./components/Profile";
// import Landing from "./components/Landing";
// import { AuthProvider } from "./components/auth";
// import Login from "./components/Login";
// import RequireAuth from "./components/RequireAuth";
// import Register from "./components/Register";
// function App() {
//   return (
//     <>
//       <AuthProvider>
//         <Navbar />

//         <Routes>
//
//
//           <Route
//             path="profile"
//             element={
//               <RequireAuth>
//                 <Profile />
//               </RequireAuth>
//             }
//           />
//           <Route path="/register" element={<Register />} />
//           <Route path="login" element={<Login />} />
//           <Route path="admin" element={<AdminPage />} />
//         </Routes>
//       </AuthProvider>
//     </>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

//components

import FAQ from "./pages/FAQ";
import Navbar from "./components/Navbar";
import ListQuestions from "./components/ListQuestions";
// import Admin from "./pages/AdminPage";

import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/dashboard/Dashboard";
import Landing from "./components/Landing";

function App() {
  const checkAuthenticated = async () => {
    try {
      const res = await fetch("/authentication/verify", {
        method: "POST",
        headers: { jwt_token: localStorage.token },
      });

      const parseRes = await res.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="list-questions" element={<ListQuestions />} />
        <Route
          exact
          path="/"
          element={
            !isAuthenticated ? (
              <div>
                <Landing />, <FAQ />
              </div>
            ) : (
              <Navigate to="/dashboard" />
            )
          }
        />
        <Route
          exact
          path="/login"
          element={
            !isAuthenticated ? (
              <Login setAuth={setAuth} />
            ) : (
              <Navigate to="/dashboard" />
            )
          }
        />
        <Route
          exact
          path="/register"
          element={
            !isAuthenticated ? (
              <Register setAuth={setAuth} />
            ) : (
              <Navigate to="/dashboard" />
            )
          }
        />
        <Route
          exact
          path="/dashboard"
          element={
            isAuthenticated ? (
              <Dashboard setAuth={setAuth} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        {/* <Route path="/admin" element={<Admin />} /> */}
      </Routes>
    </>
  );
}

export default App;
