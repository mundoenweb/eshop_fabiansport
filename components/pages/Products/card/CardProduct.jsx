import Like from '@/components/common/Like'
import ImageCardProduct from './ImageCardProduct'
import FamilyProduct from './FamilyProduct'
import DescriptionCard from './DescriptionCard'

const CardProduct = ({
  id, code, name, costo, idDad,
  descuento, image, familyProduct, idx
}) => {

  return (
    <div className="box-card">
      <Like
        css="img-card-like"
        id={id}
        codigo={code}
        idDad={idDad}
        name={name}
        descuento={descuento}
        cost={costo}
        image={image}
      />

      <div className="card-product">
        <ImageCardProduct
          id={id}
          index={idx}
          code={code}
          image={image}
          name={name}
        />
        <FamilyProduct
          products={familyProduct}
          idDad={id}
        />
        <DescriptionCard
          id={id}
          code={code}
          name={name}
          cost={costo}
          discount={descuento}
        />
      </div>
    </div>
  )
}

export default CardProduct
