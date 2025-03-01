import './App.css'

import { BannerApp } from './components/BannerApp'
import { InfoAppList } from './components/InfoAppList'
import { CardAppsList } from './components/CardAppsList'
import { Autor } from './components/Autor'
import { Footer } from './components/Footer'

export const App = ()=>{

  // DATA FALSA
  const data = {
    autor: "Yamil Ayma"
  }

  const dataApps = [
    {
      name: "React",
      description: "Biblioteca de JS para aplicaciones basadas en componentes", 
      img: "/images/react-icon.jpg",
      link: "https://es.react.dev/"
    },
    {
      name: "NodeJS",
      description: "Entorno de ejecucion JS", 
      img: "/images/node-icon.jpg",
      link: "https://nodejs.org/" 
    },
    {
      name: "NextJS",
      description: "Framework fullstack ", 
      img: "/images/next-icon.jpg",
      link: "https://nextjs.org/" 
    }
   
  ]

  return (
    <>
      <BannerApp />
      <InfoAppList title="Apps para programadores" description="Les presento a algunas de las tecnologias que uso como programador, dentro de ellas veran sobre diagramas, documentacion, recursos y mas" autorName={data.autor}/>

      <CardAppsList objListApps={dataApps}/>
      <Autor name="Yamil Ayma" description="Hola, bienvenido a esta app"/>

      <Footer />
      
    </>
  )
}