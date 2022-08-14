import CardMiniProduct from './CardMiniProduct'
import CardQtyColors from './CardQtyColors'

const FamilyProduct = ({ products, idDad }) => {
  const articles = products.map((p, i) => {
    if (i <= 3) return (
      <CardMiniProduct
        key={p.codigo}
        idDad={idDad}
        code={p.codigo}
        image={p.image[0]}
      />
    )
  })

  return (
    <div className="familyProduct">
      {articles}
      <CardQtyColors qty={products.length} />
    </div>
  )
}




export default FamilyProduct
