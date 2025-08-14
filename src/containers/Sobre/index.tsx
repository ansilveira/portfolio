import Titulo from "../../components/Titulo"
import Paragrafo from "../../components/Paragrafo"
import { GithubSecao } from "./styles"

const Sobre = () => (
    <section>
        <Titulo fontSize={16}>Sobre mim</Titulo>
        <Paragrafo tipo="principal">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos animi dolorem
            eligendi vitae soluta illum ratione consequuntur, nesciunt alias assumenda provident
            ad incidunt blanditiis eaque inventore, adipisci odit. Animi, velit.
        </Paragrafo>
        <GithubSecao>
            <img src="https://github-readme-stats.vercel.app/api?username=ansilveira&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=ansilveira&layout=compact&langs_count=7&theme=dracula"/>
        </GithubSecao>
    </section>
)

export default Sobre
