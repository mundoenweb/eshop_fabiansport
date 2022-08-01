import Link from 'next/link'
import React from 'react'

const marcas = [
  { name: "adidas" },
  { name: "nike" },
  { name: "cat" },
  { name: "dc" },
  { name: "hi-tec" },
  { name: "reebok" },
  { name: "marrell" },
  { name: "converse" },
  { name: "salomon" },
  { name: "umbro" },
  { name: "columbia" },
  { name: "mammut" },
  { name: "lippi" },
  { name: "the-north-face" }
]

const MarcasIndex = () => {
  return (
    <div className="mw-grid">
      <p className="t2 center title-grid-brands">Escoge la marca de tu preferencia</p>
      <div className="grid-marcas">
        {
          marcas.map((m, i) => (
            <Link key={i} href={`/productos/${m.name}`} >
              <a>
                <img loading="lazy" src={`${process.env.STATIC_PUBLIC}images/marcas/${m.name}.png`}
                  alt={m.name}
                />
              </a>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default MarcasIndex
