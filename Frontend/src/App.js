import "./App.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import HomePage from "./components/HomePage";
import { Login } from "./components/Login";
import { NavBar } from "./components/NavBar";
import { Register } from "./components/Register";
import { PageNotFound } from "./components/PageNotFound";
import React, { useContext, useState } from "react";
import Protected from "./components/Protected";
import { AuthenticationContext } from "./components/AuthenticationContext";
import { NewEvent } from "./components/NewEvent";
import { EventList } from "./components/EventList";

function App() {
  const { setIsSignedIn } = useContext(AuthenticationContext);
  const [isLoading, setIsLoading] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsSignedIn(false);
  };

  if (isLoading) {
    <div>Page is loading</div>;
  }

  return (
    <>
      <NavBar isLoading={isLoading} onLogout={handleLogout} />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          element={
            <Protected isLoading={isLoading} setIsLoading={setIsLoading} />
          }
        >
          <Route path="/" element={<HomePage />} />
          <Route path="/addParticipant" element={<NewEvent />} />
          <Route path="/participants" element={<EventList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
