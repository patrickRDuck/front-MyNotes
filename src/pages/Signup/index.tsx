import { Container, Form, Background} from "./styles"
import { Input } from "../../components/input"
import { Button } from "../../components/button"
import { FiMail, FiLock, FiUser } from "react-icons/fi"
import { Link } from 'react-router-dom'

export function Signup() {
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
                />

                <Input 
                placeholder='E-mail'
                type='text'
                Icon={FiMail}
                />

                <Input 
                placeholder='E-mail'
                type='password'
                Icon={FiLock}
                />

                <Button text="Cadastrar"/>

                <Link to="/">
                    Voltar para login
                </Link>
            </Form>
        </Container>
    )
}