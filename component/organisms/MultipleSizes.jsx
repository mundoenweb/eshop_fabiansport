import SizeAndQuantity from 'component/molecules/SizeAndQuantity'
import { connect } from 'react-redux'

const MultipleSizes = ({ articulo }) => (
    articulo.sizes.map((size, index) => (
        <SizeAndQuantity key={index}
            indexSeze={index}
            valueSize={size}
        />
    ))
)

const mapStateToProps = state => ({
    articulo: state.newProduct
})

export default connect(mapStateToProps)(MultipleSizes)
