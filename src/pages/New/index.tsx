import { Container, Form } from "./styles";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/section";
import { Button } from "../../components/button";
import { Link } from 'react-router-dom'

export function New() {
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>

                    <Input 
                    placeholder="Título"
                    type="text"
                    />
                    <TextArea placeholder="observações" />

                    <Section title="Links úteis">
                        <NoteItem isNew='false' value="Ola mundo"/>
                        <NoteItem isNew='true' placeholder="Novo link"/>
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="react" />
                            <NoteItem isNew='true' placeholder="Novo link"/>
                        </div>
                    </Section>

                    <Button text="Salvar"/>
                </Form>
            </main>
        </Container>
    )
}