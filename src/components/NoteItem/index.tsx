import { FiPlus, FiX } from "react-icons/fi";
import { Container} from "./styles"

interface IProps {
    isNew?: string
    value?: string
    onClick?: () => void
    [key: string]: unknown
}

export function NoteItem({isNew = 'false', value = "", onClick, ...rest}: IProps) {
    return (
        <Container $isNew={isNew}>
            <input
             type="text" 
             value={value} 
             readOnly={!(JSON.parse(isNew))} 
             {...rest}
            />
            
            <button
             type="button" 
             onClick={onClick}
             className={JSON.parse(isNew) ? 'button-add' : 'button-delete'}
            >
                {JSON.parse(isNew) ? <FiPlus /> : <FiX />}
            </button>
        </Container>
    )
}