import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <h1>Welcome to the Mental Health Screening Quiz</h1>
            <p>
                Take this quick quiz to assess common signs of depression and
                anxiety.
            </p>
            <Link to="/signin">Sign In to Start</Link>
        </div>
    );
}

export default HomePage;
