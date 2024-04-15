import imagemDev from "./assets/imagens/grapy-software-developer-coding-with-two-monitors.png"
import iconeGithub from "./assets/imagens/icons8-github-50.png"
import iconeLinkedin from "./assets/imagens/icons8-linkedin-50.png"

function App() {

  return (
    <main>
      <section>
      <p>
        Olá! Seja bem-vindo(a) ao meu portifólio.
      </p>

      <p>
        Meu nome é <span>Lucas</span> e eu sou um desenvolvedor web.
      </p>
      <div id="redes-sociais">
        <a href="#">
          <img src={iconeGithub} alt="" />
        </a>
        <a href="#">
          <img src={iconeLinkedin} alt="" />
        </a>
      </div>

      <a href="#sobreMim">
        <button>Conheça mais sobre mim</button>
      </a>
      </section>

      <section>
        <img id="imagemDev" src={imagemDev} alt="" />
      </section>
    </main>
  )
}

export default App
