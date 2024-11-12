import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/Homepage";
import SignInPage from "./Components/Signin";
import QuizPage from "./Components/QuizPage";
import "./App.css";

function App() {
    const [user, setUser] = useState(null);

    const handleLogin = (userData) => {
        setUser(userData);
    };

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/signin"
                    element={<SignInPage onLogin={handleLogin} />}
                />
                <Route
                    path="/quiz"
                    element={
                        user ? (
                            <QuizPage />
                        ) : (
                            <SignInPage onLogin={handleLogin} />
                        )
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
