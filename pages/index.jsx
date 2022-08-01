import { useEffect, useState } from 'react'
import Presentation from 'component/template/Presentation'
import BannerMain from '../component/molecules/BannerMain'
import GridCatHome from '../component/molecules/GridCatHome'
import MarcasIndex from '../component/molecules/MarcasIndex'

function Home({ image }) {

  const [vieVPresetation, setViewPresetation] = useState(true)

  useEffect(() => {
    addEventListener('load', () => {
      setTimeout(() => {
        setViewPresetation(false)
      }, 500)
    })
  })

  return (
    <>
      {
        vieVPresetation && <Presentation />
      }
      <BannerMain image={image} />
      <GridCatHome />
      <div className="box-banner-letras center">
        <h2 className="title-banner-letras">Más de 900 Productos <br /> Al Mejor Precio</h2>
      </div>
      <MarcasIndex />
      <div className="mw-grid separador"></div>
    </>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      image: Math.floor(Math.random() * (-1 + 9)) + 1
    }
  }
}

export default Home
