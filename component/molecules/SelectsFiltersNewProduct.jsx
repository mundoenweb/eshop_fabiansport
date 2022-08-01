import InputSelect from "component/atoms/InputSelect"
import { connect } from "react-redux"
import { updateSex, updateCategory, updateBrand, updateLinea } from "redux/actionCreators"
import store from "redux/store"

const SelectsFiltersNewProduct = ({ slugFilters, articulo }) => {

  const changeSex = evt => store.dispatch(updateSex({
    id: parseInt(evt.target.value, 10),
    name: evt.target.options[evt.target.selectedIndex].innerText
  }))
  const changeLinea = evt => store.dispatch(updateLinea({
    id: parseInt(evt.target.value, 10),
    name: evt.target.options[evt.target.selectedIndex].innerText
  }))
  const changeCategory = evt => store.dispatch(updateCategory({
    id: parseInt(evt.target.value, 10),
    name: evt.target.options[evt.target.selectedIndex].innerText
  }))
  const changeBrand = evt => store.dispatch(updateBrand({
    id: parseInt(evt.target.value, 10),
    name: evt.target.options[evt.target.selectedIndex].innerText
  }))

  return (
    <>
      <InputSelect
        onchange={changeSex}
        title="sexo"
        labelText="Selecciona el Sexo"
      >
        <option value={articulo.filtro.sex.id || ""}>
          {articulo.filtro.sex.name || ""}
        </option>
        {slugFilters.sexo.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
      </InputSelect>

      <InputSelect
        onchange={changeLinea}
        title="linea"
        labelText="Selecciona la Linea"
      >
        <option value={articulo.filtro.linea.id || ""}>
          {articulo.filtro.linea.name || ""}
        </option>
        {slugFilters.linea.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
      </InputSelect>

      <InputSelect
        onchange={changeCategory}
        title="categoría"
        labelText="Selecciona la categoría"
      >
        <option value={articulo.filtro.categoria.id || ""}>
          {articulo.filtro.categoria.name || ""}
        </option>
        {slugFilters.categorias.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
      </InputSelect>

      <InputSelect
        onchange={changeBrand}
        title="marca"
        labelText="Selecciona la marca"
      >
        <option value={articulo.filtro.marca.id || ""}>
          {articulo.filtro.marca.name || ""}
        </option>
        {slugFilters.marcas.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
      </InputSelect>
    </>
  )
}

const mapStateToProps = state => ({
  slugFilters: state.appState.filters,
  articulo: state.newProduct
})

export default connect(mapStateToProps)(SelectsFiltersNewProduct)
