import { Container, Form, Background} from "./styles"
import { Input } from "../../components/input"
import { Button } from "../../components/button"
import { FiMail, FiLock } from "react-icons/fi"
import { Link } from 'react-router-dom'

export function Signin() {
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
                />

                <Input 
                placeholder='E-mail'
                type='password'
                Icon={FiLock}
                />

                <Button text="Entrar"/>

                <Link to='/register'>
                    Criar conta
                </Link>
            </Form>

            <Background />
        </Container>
    )
}