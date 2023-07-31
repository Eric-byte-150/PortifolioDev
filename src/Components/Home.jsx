import React from 'react'
import "./Home.css"
import curriculum from "./Curriculumdev.pdf"
import EU from '../imagens/eu.jpg';

const Home = () => {
  return (
    <>

  
    <section className='home'>
<div className='principal'>
    <h1>Olá, eu sou o Eric: <span>Desenvolvedor</span></h1>
    <p>Curioso , proativo , habilidoso são só poucas palavras que me define!</p>
    
     <a href={curriculum}  download="Curriculo"><button>BAIXAR CV</button></a>
</div>
<div className='img'>
    <img src={EU} alt="" />
</div>
    </section>
    </>

  )
}

export default Home