import { Container } from "./styles";

interface IProps {
    title: string
    [key: string]: unknown
}

export function Tag({title, ...rest}: IProps) {
    return(
       <Container {...rest}>
            {title}
       </Container> 
    )
}