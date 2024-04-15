import "./Sobre.css"

export const Sobre = ({categoria}) => {
    return(
        <div id={categoria}>
            <div id="resumo">
                <h2>Sobre mim</h2>

                <p>
                    Meu nome é Lucas e comecei a estudar desenvolvimento web a pouco tempo, desde fevereiro de 2024. Comecei estudando HTML/CSS, hoje tenho conhecimento em diversas tecnologias. <br/><br/>
                    Inicialmente eu comecei na área da tecnologia trabalhando com design, sempre foi um hobbie desde muito cedo. Também tenho conhecimentos em hardwares e softwares por parte de design e informática.
                    Comecei a trabalhar com 15 anos, mas não na área que sempre almejei, servi ao quartel por 4 anos e somente agora estou correndo atrás para me especializar ainda mais e trabalhar com o que realmente gosto.
                </p>
            </div>

            <div id="meus-conhecimentos">
                <h2>Meus conhecimentos</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>ReactJS</li>
                    <li>Figma</li>
                    <li>Photoshop</li>
                    <li>Illustrator</li>
                </ul>
            </div>
        </div>
    )
}