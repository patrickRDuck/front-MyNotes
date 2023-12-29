import { Container, Profile, Logout} from "./styles";
import { RiShutDownLine } from "react-icons/ri"
import { IValue, useAuth } from "../../hooks/auth";
import { api } from "../../services";
import nonAvatar from "../../assets/nonAvatar.svg"
import { useNavigate } from "react-router-dom";

export function Header() {
    const {signOut, user} = useAuth() as IValue

    const navigate = useNavigate()

    function handleSignOut() {
        navigate('/')
        signOut()
    }

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : nonAvatar

    const name = (user.name).split(" ")

    return (
        <Container>
            <Profile to='/profile'>
                <img 
                    src={avatarURL}
                    alt="Foto do usuário"
                />

                <div>
                    <span>Bem vindo</span>
                    <strong>{`${name[0]} ${name.length > 0 ? name[name.length - 1] : null} `}</strong>
                </div>
            </Profile>

            <Logout onClick={handleSignOut}>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}