import Image from 'next/image'
import Link from 'next/link'

const brand = [
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
  { name: "lippi" },
  { name: "the-north-face" }
]

const GridBrandsHome = ({ styles }) => {
  return (
    <div className="mw-grid">
      <p className={`t2 center ${styles.grid_brands_title}`}>
        Escoge la marca de tu preferencia
      </p>
      <div className={styles.grid_brands}>
        {
          brand.map((m, i) => (
            <CardBrandsHome
              key={i}
              name={m.name}
              styles={styles}
            />
          ))
        }
      </div>
    </div>
  )
}

const CardBrandsHome = ({ styles, name }) => {
  return (
    <Link href={`/productos/${name}`} >
      <a className={styles.card_brands}>
        <span className={styles.span_card_brands}>
          <Image
            width={100}
            height={60}
            layout='fill'
            objectFit='contain'
            src={`/images/marcas/${name}.png`}
            alt={name}
          />
        </span>
      </a>
    </Link >
  )
}

export default GridBrandsHome
