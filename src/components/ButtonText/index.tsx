import { Container } from "./styles";

interface IProps {
    title: string
    isactive?: string
}

export function ButtonText({title, isactive = 'false'}: IProps) {
    return (
        <Container 
            type="button"
            $isactive={isactive}
        >
            {title}
        </Container>
    )
}