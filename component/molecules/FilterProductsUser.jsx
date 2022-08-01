import { formFilterProductsUser } from '../hook/useFilter'
import { useRouter } from 'next/router'
import InputSelect from '../atoms/InputSelect'
import { useEffect } from 'react'
import { connect } from 'react-redux'


const FilterProductsUser = ({ paramsForm, slugFilters, isPhone }) => {
  const router = useRouter()

  const executeFilter = e => formFilterProductsUser(e, router)



  useEffect(() => {
    for (const select of formFilter) {
      for (const filter in paramsForm) {
        if (select.name === filter) {
          select.selectedIndex = paramsForm[filter]
        }
      }
    }

  })

  // muestra los filtros en el podo telefono
  const openFilter = (e) => {
    const link = e.target
    formFilter.classList.toggle("box-filter-view")
    document.body.classList.toggle("body-overflow-hidden")
    if (link.innerText === "Filtrar Productos") link.innerText = "Cerrar Filtro"
    else link.innerText = "Filtrar Productos"
  }

  return (
    <>
      {
        isPhone
        &&
        <div className="open-filter-user">
          <a className="mw-grid"
            onClick={e => openFilter(e)}>
            Filtrar Productos
          </a>
        </div>
      }
      <div className="box-form-filter">
        <form className="box-filter" id="formFilter">
          <InputSelect labelText="Ordenar por" name="ordenarPor" onchange={executeFilter} >
            <option></option>
            {slugFilters.ordenarPor.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
          </InputSelect>

          <InputSelect onchange={executeFilter} labelText="Sexo" name="genero" >
            <option></option>
            {slugFilters.sexo.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
          </InputSelect>

          <InputSelect onchange={executeFilter} labelText="Linea" name="linea" >
            <option></option>
            {slugFilters.linea.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
          </InputSelect>
          
          <InputSelect onchange={executeFilter} labelText="Categoría" name="categoria" >
            <option></option>
            {slugFilters.categorias.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
          </InputSelect>

          <InputSelect onchange={executeFilter} labelText="Marca" name="marca" >
            <option></option>
            {slugFilters.marcas.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
          </InputSelect>

          <InputSelect onchange={executeFilter} labelText="Descuento" name="descuento" >
            <option></option>
            {slugFilters.descuento.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
          </InputSelect>
        </form>
      </div>

    </>
  )
}

const mapStateToProps = state => ({
  slugFilters: state.appState.filters,
  isPhone: state.appState.isPhone
})

export default connect(mapStateToProps)(FilterProductsUser)
