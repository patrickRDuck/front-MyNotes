import { Container, Form, Background} from "./styles"
import { Input } from "../../components/input"
import { Button } from "../../components/button"
import { FiMail, FiLock } from "react-icons/fi"
import { Link } from 'react-router-dom'
import { IValue, useAuth } from "../../hooks/auth"
import { useState, ChangeEvent } from "react"

export function Signin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {signin} = useAuth() as IValue

    async function handleSignIn() {
       await signin({email, password})
    }

    return (
        <Container>
            <Form>
                <h1>MyNotes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>

                <h2>Faça seu login</h2>

                <Input 
                placeholder='E-mail'
                type='text'
                Icon={FiMail}
                onChange ={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />

                <Input 
                placeholder='Senha'
                type='password'
                Icon={FiLock}
                onChange ={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />

                <Button text="Entrar" onClick={handleSignIn}/>

                <Link to='/register'>
                    Criar conta
                </Link>
            </Form>

            <Background />
        </Container>
    )
}