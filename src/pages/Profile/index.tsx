import {Container, Form, Avatar} from './styles'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera} from 'react-icons/fi'
import { Link } from 'react-router-dom'

export function Profile() {
    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft />
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src='https://github.com/patrickRDuck.png' alt='Foto do usuário' />
                    
                    <label htmlFor='avatar'>
                        <FiCamera />

                        <input id='avatar' type='file'/>
                    </label>
                </Avatar>

                <Input 
                    placeholder="nome"
                    type="text"
                    Icon={FiUser}
                />

                <Input 
                    placeholder="E-mail"
                    type="text"
                    Icon={FiMail}
                />

                <Input 
                    placeholder="Senha atual"
                    type="password"
                    Icon={FiLock}
                />

                <Input 
                    placeholder="Nova senha"
                    type="password"
                    Icon={FiLock}
                />

                <Button text='Salvar' />
            </Form>
        </Container>
    )
}