import Image from "next/image";
import "./app.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="divContainer">
      <div className="portifolioContainer">

        <div className="portifolio">

          <div className="divImage">
            <img src="/assents/personal_photo.jpg" alt="personal photo" width={150} height={200} />
          </div>

          <div className="divDesc">
            <h2 className="portifolioTitleID">Matheus Fabiano barbosa aguiar</h2>
            <p>Estudante de Ciência da Computação</p>
            <br />
            <p> <b>Contato:</b> (81) 9.9999-9999</p>
            <p><b>E-mail:</b> Matheusbarbosaaguiar@gmail.com</p>
          </div>

        </div>

        <div className="portifolioMid">
          <hr className="linhaDivisora" />

          <div>
            <h1>Descrição:</h1>
          </div>

          <div className="description">
            <p className="descriptionText">Olá, matheus. Eu tenho interesse em Inteligência Artificial e Ciência de Dados e estou à procura de um estágio.</p>
          </div>

          <div className="certificatesTitle">
            <h1>Certificados:</h1>
          </div>

          <div className="certificates">
            <ul className="certificatesList">
              <li>Fundamentos de IA - IBM SkillsBuild</li>
              <li>Introdução à Ciência de Dados - Cisco</li>
              <li>.</li>
            </ul>
          </div>

          <div className="skillsTitle">
            <h1>Habilidades:</h1>
          </div>

          <div className="skills">
            <ul className="skillsList">
              <li>Python</li>
              <li>c++</li>
              <li>java</li>
              <li>Bibliotecas Numpy e Pandas</li>
              <li>Power BI </li>
              <li>Excel </li>
              <li>pytorch.</li>
              <li>Mysql.</li>
            </ul>
          </div>

          <hr className="linhaDivisora" />
        </div>

        <div className="portifolioBottom">
          <div className="jogoDaForca">
            <Link
              href="/Forca"
              className="botaoForca"
            >
              <p className="buttonText"> <b>Forca!</b> </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}