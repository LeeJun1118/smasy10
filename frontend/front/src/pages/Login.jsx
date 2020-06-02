/*
import React, {useState, useEffect} from "react";

const Login = () => {

    const [message, setMessage] = useState("");
    useEffect(() => {
        fetch('/api/login')
            .then(response => response.text())
            .then(message => {
                setMessage(message);
            });
    }, [])

    return (
        <div>
            Login 페이지
            <h1 className="App-title">{message}</h1>
        </div>
    )
}

export default Login*/
