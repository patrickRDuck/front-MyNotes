import { Container, Profile, Logout} from "./styles";
import { RiShutDownLine } from "react-icons/ri"

export function Header() {
    return (
        <Container>
            <Profile to='/profile'>
                <img 
                    src="https://github.com/patrickRDuck.png"
                    alt="Foto do usuário"
                />

                <div>
                    <span>Bem vindo</span>
                    <strong>Patrick Duarte</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}