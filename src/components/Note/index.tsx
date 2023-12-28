import { Container } from "./styles";
import { Tag } from '../Tag'

interface ITag {
    id: string,
    name: string,
    user_id?: string,
    note_id?: string
}

interface IData {
    user_id?: string
    id: string
    title: string
    tags: ITag[]
}

interface IProps {
    data: IData
    [key: string]: unknown
}



export function Note({data}: IProps, onClick?: () => void) {
    return(
        <Container to={`/details/${data.id}`} onClick={onClick}>
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