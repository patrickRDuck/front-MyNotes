
import { Container } from "./styles";

interface IProps {
    Icon?: JSX.ElementType
    [key: string]: unknown
}

export function Input({ Icon, ...rest}: IProps) {
    return(
        <Container>
            {Icon && <Icon size={20} />}
            <input {...rest}/>
        </Container>
    )
}