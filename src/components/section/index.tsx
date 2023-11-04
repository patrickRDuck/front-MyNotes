import { Container } from './styles'
import { ReactNode } from 'react'

interface IProps {
    title: string,
    children: ReactNode
}

export function Section({title, children}: IProps) {
    return (
        <Container>
            <h2> {title} </h2>

            {children}
        </Container>
    )
}