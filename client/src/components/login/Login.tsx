import React from 'react'
import './Login.css'
import { Outlet, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()

    const changeTabs = (e: React.MouseEvent<HTMLButtonElement>) => {
        const buttons = document.querySelectorAll(".abas button");


        buttons.forEach(btn => {
            btn.classList.remove("selected");
        })

        if (e.currentTarget.classList[0] === "singin") {
            navigate("/login")
        } else {
            navigate("/register")
        }
        
        e.currentTarget.classList.add("selected")
    }

    return (
        <div id="login-container">
            <div className='abas'>
                <button onClick={changeTabs} className='singin selected'>SING IN</button>
                <button onClick={changeTabs} className='singup'>SING UP</button>
            </div>
            <Outlet />
        </div>
    )
}

export default Login