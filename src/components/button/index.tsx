import { Container } from "./styles";

interface IPropsButton {
    text?: string
    [key: string]: unknown
}

export function Button({text, ...rest}: IPropsButton) {
    return (
    <Container type="button" {...rest}>
        {text ?? 'ola mundo'}
    </Container>
    )
}