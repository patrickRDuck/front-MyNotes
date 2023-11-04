import { Header } from "../../components/header"
import { Container, Links, Content} from "./styles"
import { Section } from "../../components/section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"

export function Details() {

  return (
    <Container>
      <Header />

      <main>
        <Content>

          <ButtonText title="Excluir nota" isactive='true'/>

          <h1>Introdução ao React</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates nemo fuga, sequi quibusdam aliquid iusto natus aperiam consequatur in, illo veniam? Officia deserunt quis, sapiente ad neque autem repellendus non?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum reiciendis doloremque eos, corporis cupiditate velit sapiente, quae ad, temporibus neque repellat. Doloribus adipisci recusandae magni explicabo exercitationem esse consectetur!
          </p>
        
          <Section title="Links Úteis">
              <Links>
                <li> <a href="#">https://www.rockeseat.com.br/</a></li>
                <li> <a href="#">https://www.rockeseat.com.br/</a></li>
              </Links>
          </Section>

          <Section title="Marcadores">

            <Tag title="express"/>
            <Tag title="nodejs"/>

          </Section>

        </Content>
      </main>
    </Container>
  )
}
