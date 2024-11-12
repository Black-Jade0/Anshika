import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Updated import

function SignInPage({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Updated from useHistory

    const handleSubmit = (e) => {
        e.preventDefault();
        // Replace with actual authentication logic
        onLogin({ email });
        navigate("/quiz"); // Updated from history.push
    };

    return (
        <div>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}

export default SignInPage;
