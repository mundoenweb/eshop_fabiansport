import CardCategoryHome from './CardCategoryHome'

const cat = [
  { name: "calzado", link: "calzado" },
  { name: "ropa", link: "ropa" },
  { name: "accesorios", link: "accesorios" },
  { name: "ofertas", link: "descuento" },
]

const GridCategoryHome = ({ styles }) => {
  return (
    <div className={`mw-grid ${styles.box_grid_images}`}>
      {
        cat.map((c, i) => (
          <CardCategoryHome
            key={i}
            link={c.link}
            name={c.name}
            styles={styles}
          />
        ))
      }
    </div>
  )
}



export default GridCategoryHome
