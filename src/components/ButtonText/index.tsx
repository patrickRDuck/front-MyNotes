import { Container } from "./styles";

interface IProps {
    title: string
    isactive?: string
    onClick?: () => void
}

export function ButtonText({title, isactive = 'false', onClick}: IProps) {
    return (
        <Container 
            type="button"
            $isactive={isactive}
            onClick={onClick}
        >   
            {title}
        </Container>
    )
}