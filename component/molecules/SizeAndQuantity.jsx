import InputNumber from '../atoms/InputNumber'
import InputSelect from 'component/atoms/InputSelect'
import store from 'redux/store'
import {
  createSize, deleteSize, updateSize, updateQuantity
} from 'redux/actionCreators'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { ajax, valideteResponse } from 'component/hook/Ajax'

const SizeAndQuantity = ({ articulo, sizesState, indexSeze, valueSize }) => {

  const [sizeCurrentForm, setSizeCurrentForm] = useState([])

  const loadSizes = () => {
    const sexo = articulo.filtro.sex.name
    const linea = articulo.filtro.linea.name

    switch (linea) {
      case 'calzado':
        if (sizesState.calzado[sexo]) {
          setSizeCurrentForm( sizesState.calzado[sexo].map(size => size) )
        } else if (sexo === 'niños' || sexo === 'niñas') {
          setSizeCurrentForm( sizesState.calzado.ninos.map(size => size) )
        } else setSizeCurrentForm([])
        break;
      case 'ropa':
        if (sizesState.ropa[sexo]) setSizeCurrentForm(sizesState.ropa[sexo])
        else if (sexo === 'niños' || sexo === 'niñas') setSizeCurrentForm(sizesState.ropa.ninos)
        else setSizeCurrentForm([])
        break;
      case 'accesorios':
        setSizeCurrentForm([sizesState.accesorios])
        break;
      default:
        setSizeCurrentForm([])
        break;
    }
  }

  const sizeUpdate = (indexSeze, name) => store.dispatch(updateSize({ indexSeze, name }))
  const quantityUpdate = (indexSeze, quantity) => store.dispatch(updateQuantity({ indexSeze, quantity }))

  const createNewSize = () => {
    const newSize = { id: null, name: "", quantity: 0 }
    const findChildren = articulo.sizes.length - 1

    if (!articulo.sizes[findChildren].name || !articulo.sizes[findChildren].quantity) {
      alert("debe agregar una talla y cantidad, antes de crear una nueva talla")
      return
    }
    store.dispatch(createSize(newSize))
  }
  const sizeDelete = async (id) => {
    if (articulo.sizes.length === 1) return alert("Debe existir almenos una talla con su cantidad")

    function supr(indexSeze) {
      setSizeCurrentForm([])
      store.dispatch(deleteSize(indexSeze))
      setTimeout(() => {
        loadSizes()
      }, 500);
    }

    if (id) {
      if (confirm("¿Seguro desea eliminar la talla?, se borrara definitivamente")) {
        const response = await ajax(`${process.env.API}/eliminarTalla/${id}`, 'POST')
        if (!valideteResponse(response)) return
        supr(indexSeze)
      }
      return
    }
    supr(indexSeze)
  }
  const onblur = e => {
    const input = e.target.name, value = e.target.value
    if (input === `size_${indexSeze}`) {
      sizeUpdate(indexSeze, value)
      return
    }
    quantityUpdate(indexSeze, parseInt(value, 10))
  }

  useEffect(() => {
    loadSizes()
  }, [articulo.filtro])

  return (
    <div className="box-size-quantity">

      <InputSelect name={`size_${indexSeze}`}
        onchange=""
        labelText="Talla"
        onchange={onblur}
      >
        <option>{valueSize.name}</option>
        {sizeCurrentForm.map((size, i) => <option key={i} value={size}>{size}</option>)}
      </InputSelect>

      {console.log(valueSize.quantity)}

      <InputNumber
        onblur={onblur}
        value={valueSize.quantity || "0"}
        labelText="Cantidad"
        name={`quantity_${indexSeze}`}
      />
      <div className="box-button-add-another">
        <a className="button button-add-another"
          onClick={() => createNewSize()}
        >+</a>
        <a className="button button-add-another button-remove-another"
          onClick={() => sizeDelete(valueSize.id)}
        >-</a>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  sizesState: state.appState.sizes,
  articulo: state.newProduct
})

export default connect(mapStateToProps)(SizeAndQuantity)
