import Link from 'next/link'
import React from 'react'

const cat = [
  { name: "calzado", link: "calzado" },
  { name: "ropa", link: "ropa" },
  { name: "accesorios", link: "accesorios" },
  { name: "ofertas", link: "descuento" },
]

const GridCatHome = () => {
  return (
    <div className="mw-grid box-cat-images">
      {
        cat.map((c, i) => (
          <Link key={i} href={`/productos/${c.link}`} >
            <a>
              <div className="box-img-categoria">
                <div className="box-title-cat-index">
                  <div className="cap-bg-title-cat"></div>
                  <p className="title-categoria-basic"> {c.name} </p>
                </div>
                <img loading="lazy" src={`${process.env.STATIC_PUBLIC}images/${c.name}.jpg`}
                     alt={c.name}
                     className="img-cat-index"
                />
              </div>
            </a>
          </Link>
        ))
      }
    </div>
  )
}

export default GridCatHome
