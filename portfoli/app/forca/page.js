"use client";

import "./Forca.css";
import { useEffect, useState } from "react";

export default function Forca() {
  const [palavra, setPalavra] = useState(null);
  const [acertos, setAcertos] = useState([]);
  const [erros, setErros] = useState([]);
  const [fim, setFim] = useState(null);

  useEffect(() => {
    async function carregarPalavra(){
      const resposta = await fetch("/list.txt");
      const texto = await resposta.text();

      const linhas = texto
        .split(/\r?\n/)
        .map((l) => l.trim())
        .filter((l) => l);
      
      const aleatoria = linhas[Math.floor(Math.random() * linhas.length)];
      setPalavra(aleatoria.toLowerCase());
      setAcertos([]);
      setErros([]);
      setFim(null);
    }

    carregarPalavra();
  }, []);

   if (!palavra) return <p>Carregando...</p>;

  const exibicao = palavra
    .split("")
    .map((letra) => (acertos.includes(letra) ? letra : "_"))
    .join(" ");

  const alfabeto = "abcdefghijklmnopqrstuvwxyzç".split("");

  function chutar(letra){
    if (fim) return;
    if (acertos.includes(letra) || erros.includes(letra)) return;

    if (palavra.includes(letra)) {
      const novosAcertos = [...acertos, letra];
      setAcertos(novosAcertos);

      const todasCertas = palavra.split("").every((l) => novosAcertos.includes(l));
      if (todasCertas) setFim("ganhou");
    } else {
      const novosErros = [...erros, letra];
      setErros(novosErros);

      if (novosErros.length >= 6) setFim("perdeu");
    }
  }

  return (
    <div className="divContainer">
      <div className="divForca">
        <div className="interface1">
          <div className="palavraOculta">
            {exibicao}
          </div>

          <div className="entrada">
            {alfabeto.map((letra) => (
              <button
                key={letra}
                onClick={() => chutar(letra)}
                disabled={acertos.includes(letra) || erros.includes(letra) || fim}
              >
                <b>{letra}</b>
              </button>
            ))}
          </div>
        </div>

        <div className="interface2">
          <div className="vidas">
            <p>Erros: {erros.join(", ")}</p>
            <p>Tentativas restantes: {6 - erros.length}</p>
          </div>

          {fim && (
            <div className="telaFinal">
              <div className={`mensagemFinal ${fim}`}>
                {fim === "ganhou" && (
                  <>
                    <h2>🎉 Você ganhou!</h2>
                    <button onClick={() => window.location.reload()}><b>Reiniciar</b></button>
                  </>
                )}
                {fim === "perdeu" && (
                  <>
                    <h2>💀 Você perdeu!</h2>
                    <p>A palavra era: {palavra}</p>
                    <button onClick={() => window.location.reload()}><b>Reiniciar</b></button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )

}