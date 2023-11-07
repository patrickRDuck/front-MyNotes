import { Container } from "./styles";
import { Tag } from '../Tag'

interface ITag {
    name: string
    id: number
}

interface IData {
    title: string
    tags: ITag[]
}

interface IProps {
    data: IData
    [key: string]: unknown
}

export function Note({data}: IProps) {
    return(
        <Container to='/details/5'>
            <h1>{data.title}</h1>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => {
                            return (
                            <Tag title={tag.name} key={tag.id}/>
                            )
                        })
                    }
                </footer>
            }
        </Container>
    )
}