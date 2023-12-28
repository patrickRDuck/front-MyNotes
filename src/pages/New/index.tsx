import { Container, Form } from "./styles";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/section";
import { Button } from "../../components/button";
import { useNavigate } from 'react-router-dom'
import { ChangeEvent, useState } from "react";
import { api } from "../../services";
import { ButtonText } from "../../components/ButtonText";

export function New() {
    const [links, setLinks] = useState<string[]>([])
    const [newLink, setNewLink] = useState<string>("")

    const [tags, setTags] = useState<string[]>([])
    const [newTag, setNewTag] = useState<string>("")

    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")

    const navigate = useNavigate()
    

    function handleAddLink() {
        setLinks(prevState => [...prevState, newLink])
        setNewLink("")
    }

    function handleRemoveLink(deleted: string) {
        setLinks(prevState => prevState.filter(link => link !== deleted))
    }

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }

    function handleDeleteTag(deleted: string) {
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handleSaveNote() {
        if(newTag) {
            return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vázio.")
        }
        if(newLink) {
            return alert("Você deixou um link no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vázio.")
        }
        if(links.length === 0 || tags.length === 0 || title === "" || description === "") {
            return alert("existe campos não preenchidos, favor preenche-los para salvar nota")
        }

       await api.post("/notes", {
        title,
        description,
        tags,
        links
       }) 

       alert("Nota criada com sucesso")
       navigate(-1)
    }
    
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>

                        <ButtonText 
                         title="Voltar"
                         onClick={() => navigate(-1)}
                         isactive="false"
                        />
                    </header>

                    <Input 
                     placeholder="Título"
                     type="text"
                     onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                    />

                    <TextArea 
                     placeholder="observações" 
                     onChange={(e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
                    />

                    <Section title="Links úteis">
                        {
                            links.map((link, index) => (
                                <NoteItem 
                                    key={index}
                                    value={link}
                                    onClick={() => handleRemoveLink(link)}
                                />
                            ))
                        }
                        
                        <NoteItem 
                         isNew='true' 
                         placeholder="Novo link"
                         value={newLink}
                         onChange={(e: ChangeEvent<HTMLInputElement>) => setNewLink(e.target.value)}
                         onClick={handleAddLink}
                        />
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            {
                                tags.map((tag, index) => (
                                    <NoteItem 
                                     key={index}
                                     value={tag} 
                                     onClick={() => handleDeleteTag(tag)}
                                    />
                                ))
                            }

                            <NoteItem 
                             isNew='true' 
                             placeholder="Novo link"
                             value={newTag}
                             onChange={(e: ChangeEvent<HTMLInputElement>) => setNewTag(e.target.value)}
                             onClick={handleAddTag}
                            />
                        </div>
                    </Section>

                    <Button 
                     text="Salvar"
                     onClick={handleSaveNote}
                    />
                </Form>
            </main>
        </Container>
    )
}