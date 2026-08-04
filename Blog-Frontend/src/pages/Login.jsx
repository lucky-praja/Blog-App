import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();


    const login = async () => {

        try {

            const res = await API.post("/auth/login", {
                email,
                password
            });


            localStorage.setItem(
                "token",
                res.data.token
            );


            alert("Login Successful");

            navigate("/");

        } catch (error) {

            console.log(error);

            alert("Login Failed");

        }

    };


    return (

        <div className="form">

            <h1>Login</h1>


            <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />


            <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />


            <button onClick={login}>
                Login
            </button>


        </div>

    );

}

export default Login;