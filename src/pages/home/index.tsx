import { Container, Brand, Menu, Search, Content, NewNote} from './styles'
import {FiPlus} from 'react-icons/fi'
import { Header } from "../../components/header";
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/input';
import { Section } from '../../components/section';
import { Note } from '../../components/Note';
import { useState, useEffect, ChangeEvent } from 'react';
import { api } from '../../services';

interface ITag {
    id: string,
    name: string,
    user_id: string,
    note_id: string
}

interface INotes {
    id: string,
    title: string,
    user_id: string,
    tags: ITag[]
}

export function Home() {
    const [tags, setTags] = useState<ITag[]>([])
    const [tagSelected, setTagSelected] = useState<string[]>([])
    const [search, setSearch] = useState<string>("")
    const [notes, setNotes] = useState<INotes[]>([])

    function handleTagSelected(tagName: string) {
        if(tagName === "all") {
            const newTagSelected = [...tagSelected]

            newTagSelected.splice(0, tagSelected.length)

            return setTagSelected(newTagSelected)
        }

        if(tagSelected.includes(tagName)) {
            const removeItem = tagSelected.indexOf(tagName)
            const newTagSelected = [...tagSelected]

            newTagSelected.splice(removeItem, 1)

            return setTagSelected(newTagSelected)
        } else {
            setTagSelected(prevState => [...prevState, tagName])
        }

    }
    
    useEffect( () => {
        async function fetchTags() {
            const response = await api.get("/tags")
            setTags(response.data)
        }

        fetchTags()
        
    }, [])

    useEffect( () => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}&tags=${tagSelected}`)
            setNotes(response.data)
        }

        fetchNotes()
    }, [tagSelected, search])

    return (
        <Container>
            <Brand>
                <h1>MyNotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li>
                    <ButtonText 
                     title='Todos' 
                     isactive={tagSelected.length === 0 ? "true" : "false"} 
                     onClick={() => handleTagSelected("all")}
                    />
                </li>

                {
                    tags && tags.map(tag => (
                        <li key={String(tag.id)}>
                            <ButtonText 
                             title={tag.name} 
                             onClick={() => handleTagSelected(tag.name)}
                             isactive={tagSelected.includes(tag.name) ? "true" : "false"}
                            />
                        </li>
                    ))
                }
            </Menu>

            <Search>
                <Input 
                 placeholder="Pesquisar pelo título" 
                 onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                />
            </Search>

            <Content>
                <Section title='Minhas notas'>
                    {
                        notes.map((note) => (
                            <Note 
                             key={String(note.id)}
                             data={note}
                           />
                        ))
                    } 
                </Section>

            </Content>

            <NewNote to='/new'>
                <FiPlus />
                Criar nota
            </NewNote>
        </Container>
    );
}