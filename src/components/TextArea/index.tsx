import { Container } from "./styles"

interface IProps {
    value?: string
    [key:string]: unknown
}

export function TextArea({value, ...rest}: IProps) {
    return (
        <Container {...rest}>
            {value && value}
        </Container>
    )
}