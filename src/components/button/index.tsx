import { Container } from "./styles";

interface IPropsButton {
    text?: string
}

export function Button(props: IPropsButton) {
    return (
    <Container type="button">
        {props.text ?? 'ola mundo'}
    </Container>
    )
}