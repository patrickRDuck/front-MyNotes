import {Container, Form, Avatar} from './styles'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { ChangeEvent, useState } from 'react'
import { IValue, useAuth } from '../../hooks/auth'
import nonAvatar from "../../assets/nonAvatar.svg"
import { api } from '../../services'

export type TypeAvatarFile = File | null

export function Profile() {
    const {user, updateProfile} = useAuth() as IValue

    const [name, setName] = useState<string>(user.name)
    const [email, setEmail] = useState<string>(user.email)
    const [passwordNew, setPasswordNew] = useState<string | null>()
    const [passwordOld, setPasswordOld] = useState<string | null>()

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : nonAvatar
    const [avatar, setAvatar] = useState<string>(avatarURL)
    const [avatarFile, setAvatarFile] = useState<TypeAvatarFile>(null)

    const navigate = useNavigate()

    async function handleUpdate() {
        user.email = email
        user.name = name
        user.password = passwordNew
        user.old_password = passwordOld

        await updateProfile({user, avatarFile}) 
    }

    async function handleChangeAvatar(event: ChangeEvent<HTMLInputElement>) {
        const files = event.target.files
        if(files && files.length > 0) {
            const file = files[0]
            setAvatarFile(file)

            const imagePreview = URL.createObjectURL(file)
            setAvatar(imagePreview)
        }
    }

    return (
        <Container>
            <header>
                <button onClick={() => navigate(-1)}>
                    <FiArrowLeft />
                </button>
            </header>

            <Form>
                <Avatar>
                    <img src={avatar} alt='Foto do usuário' />
                    
                    <label htmlFor='avatar'>
                        <FiCamera />

                        <input onChange={handleChangeAvatar} id='avatar' type='file'/>
                    </label>
                </Avatar>

                <Input 
                    placeholder="nome"
                    type="text"
                    Icon={FiUser}
                    value={name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                />

                <Input 
                    placeholder="E-mail"
                    type="text"
                    Icon={FiMail}
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />

                <Input 
                    placeholder="Senha atual"
                    type="password"
                    Icon={FiLock}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPasswordOld(e.target.value)}
                />

                <Input 
                    placeholder="Nova senha"
                    type="password"
                    Icon={FiLock}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPasswordNew(e.target.value)}
                />

                <Button text='Salvar' onClick={handleUpdate}/>
            </Form>
        </Container>
    )
}