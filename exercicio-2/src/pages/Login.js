import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button/Button'
import './Login.css'

function Login() {
    
    return(
        <section className='group-label' > 
                <Input 
                type="text"
                placeholder="Digite seu nome Aqui"
                
                />
                <Input 
                type="password"
                placeholder="Digite sua senha Aqui"
            
                />
                <Button>Entrar</Button>
            </section>
    )
}
export default Login