import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1> portfolio </h1>
      <br />

      <>
       <hr />
       <br />
  
      <img src="/assents/personal_photo.jpg" alt="personal photo" width={150} height={200} />
      <br/>
      <p> <b>nome:</b> Matheus Fabiano Barbosa Aguiar </p>
      <p> <b> biografia:</b>  </p> 
      <p> -estudante na univercidade catolica de pernanbuco </p>
      <br/>
      <p> -meus principais interesses profissionais são na area de artificial inteligency e data scyency </p>
      <br/>
      <p> -sou entusiasta das areas de fisica e astronomia</p>
      </>

      <br/>
      <hr/>
      <br/>
      <h3> minhas paginas: </h3>
      <a href="https://www.linkedin.com/in/matheus-fabiano-barbosa-aguiar-143626290/" target="_blank" > <linkedin /> linkedin  </a>
      <br/>
      <a href="https://github.com/matheusarsenal" target="_blank" > <github /> github  </a>
    
    
    </div>
    
  );
}
