import { useState } from 'react'

function Singin() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function handleSubmit() {
        console.log(email)
        console.log(senha)
    }

    return (
        <div className='tabs-data singin-container'>
            <div className='inputs'>
                <div>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type="text"/>
                </div>
                
                <div>
                    <input value={senha} onChange={(e) => setSenha(e.target.value)} placeholder='Password' type="password" />
                    <nav>Forgot password?</nav>
                </div>
            </div>
            <button onClick={handleSubmit} className='login'>LOGIN</button>
        </div>
    )
}

export default Singin