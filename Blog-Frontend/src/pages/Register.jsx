import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();


    const register = async () => {

        try {

            const res = await API.post("/auth/register", {
                name,
                email,
                password
            });

            console.log(res.data);

            alert("Registered Successfully");

            navigate("/login");

        } catch (error) {

            console.log(error.response?.data);

            alert(
                error.response?.data?.message || 
                "Registration Failed"
            );

        }

    };


    return (

        <div className="form">

            <h1>Register</h1>

            <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />


            <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />


            <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />


            <button onClick={register}>
                Register
            </button>

        </div>

    );
}

export default Register;