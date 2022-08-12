import { useEffect, useState } from 'react'
import Presentation from 'component/template/Presentation'
import BannerMain from '../components/pages/Home/BannerMain'
import GridCatHome from '../component/molecules/GridCatHome'
import MarcasIndex from '../component/molecules/MarcasIndex'

function Home({}) {

  const [vieVPresetation, setViewPresetation] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setViewPresetation(false)
    }, 1000)
  }, [])

  return (
    <>
      {
        // vieVPresetation && <Presentation />
      }
      <BannerMain />
      <GridCatHome />
      <div className="box-banner-letras center">
        <h2 className="title-banner-letras">Más de 900 Productos <br /> Al Mejor Precio</h2>
      </div>
      <MarcasIndex />
      <div className="mw-grid separador"></div>
    </>
  )
}

export default Home
