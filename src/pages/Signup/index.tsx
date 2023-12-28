import { useState, ChangeEvent } from "react"
import { Container, Form, Background} from "./styles"
import { Input } from "../../components/input"
import { Button } from "../../components/button"
import { FiMail, FiLock, FiUser } from "react-icons/fi"
import { Link, useNavigate } from 'react-router-dom'
import { api } from "../../services"

export function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleSignUp() {
        if(!name || !email || !password) {
            return alert("preencha todos os campos!")
        }

        api.post("/users", {name, email, password})
        .then(() => {
            alert("Usuário castrado com sucesso")
            navigate("/")
        })
        .catch( error => {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível cadastrar")
            }
        })
    }

    return (
        <Container>
            <Background />

            <Form>
                <h1>MyNotes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>

                <h2>Crie sua conta</h2>

                <Input 
                placeholder='Nome'
                type='text'
                Icon={FiUser}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                />

                <Input 
                placeholder='E-mail'
                type='text'
                Icon={FiMail}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />

                <Input 
                placeholder='Senha'
                type='password'
                Icon={FiLock}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />

                <Button text="Cadastrar" onClick={handleSignUp}/>

                <Link to="/">
                    Voltar para login
                </Link>
            </Form>
        </Container>
    )
}