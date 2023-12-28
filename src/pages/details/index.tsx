import { Header } from "../../components/header"
import { Container, Links, Content} from "./styles"
import { Section } from "../../components/section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"
import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { api } from "../../services"

interface ITag {
  id: string,
  name: string,
  user_id: string,
  note_id: string
}

interface ILinks {
  id: string,
  url: string,
  note_id: string,
  created_at: string
}

interface INotes {
  id: string,
  title: string,
  description: string,
  user_id: string,
  created_at: string,
  updated_at: string,
  tags: ITag[],
  links?: ILinks[]
}

export function Details() {
  const [data, setData] = useState<INotes | null>(null)

  const params = useParams()
  const navigate = useNavigate()

  async function handleDelete() {
    const confirm = window.confirm("Deseja realmente remover a nota?")

    if(confirm) {
      api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }


  useEffect(() => {
    async function fetchNote() {
      const response = await api.get<INotes>(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Header />

      {
        data &&
        <main>
          <Content>

            <header>
              <ButtonText 
               title="Voltar"
               isactive="false"
               onClick={() => navigate(-1)} 
              />

              <ButtonText 
               title="Excluir nota" 
               isactive='true'
               onClick={() => handleDelete()}
              />
            </header>


            <h1>{data.title}</h1>

            <p>
              {data.description}
            </p>
          
            <Section title="Links Úteis">
                <Links>
                  {
                    data.links &&
                    data.links.map((link) => (
                      <li key={String(link.id)}>
                        <a target="_blank" href={link.url}>
                          {link.url}
                        </a>
                      </li>
                    ))
                  }
                </Links>
            </Section>

            <Section title="Marcadores">

              {
                data.tags.map((tag) => (
                  <Tag key={String(tag.id)} title={tag.name}/>
                ))
              }
            </Section>

          </Content>
        </main>
      }

    </Container>
  )
}
