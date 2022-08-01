import InputSelect from "component/atoms/InputSelect"
import { createRef, useEffect } from "react"
import { connect } from "react-redux"
import store from "redux/store"
import { ajax, valideteResponse } from "component/hook/Ajax"
import { createPaletteColor, changeColor } from "redux/actionCreators"

const divSelectColor = createRef()

const NewColorProduct = ({ paletteColor, articulo }) => {

  const upluadColors = async () => {
    const colors = await ajax(`${process.env.API}/colores`)
    store.dispatch(createPaletteColor(colors.data.colores))
  }

  const colorUpdate = evt => {
    let indexOption = evt.target.selectedIndex
    let option = evt.target.options
    store.dispatch(changeColor({
      id_color: parseInt(evt.target.value, 10),
      name_color: option[indexOption].innerText,
      hexadecimal: option[indexOption].title
    }))
  }
  const createColor = async () => {
    let color, hexadecimal
    do {
      color = prompt("Favor ingrese el nuevo color")
      if (color) color = color.toUpperCase()
    } while (color === "");
    if (!color) return

    do {
      hexadecimal = prompt(`Ingrese el hexadecimal del color ${color}`)
      if (hexadecimal) hexadecimal = hexadecimal.toUpperCase()
    } while (hexadecimal === "");
    if (!hexadecimal) return

    const select = divSelectColor.current.children[0].children[0]
    const formData = new FormData()
    formData.append('json', JSON.stringify({
      nombre: color,
      hexadecimal
    }))

    const response = await ajax(`${process.env.API}/crearColor`, 'POST', formData)
    // const response = await ajax(`${process.env.API}/crearColor`, 'POST', bodyMsg)
    if (!valideteResponse(response)) return

    const colors = await ajax(`${process.env.API}/colores`)
    store.dispatch(createPaletteColor(colors.data.colores))
    alert("color agregado exitosamente")
    select.selectedIndex = select.options.length - 1

    const currentColor = colors.data.colores[colors.data.colores.length - 1]

    store.dispatch(changeColor({
      id_color: parseInt(currentColor.id),
      name_color: currentColor.nombre
    }))
  }

  useEffect(() => {
    upluadColors()
  }, [])

  return (
    <>
      <div className="box-color-new-product" ref={divSelectColor}>

        <div style={{ background: `#${articulo.hexadecimal}` }} className="circle-color"></div>

        <InputSelect
          onchange={colorUpdate}
          title="color"
          labelText="Selecciona un color"
        >
          <option value={articulo.id_color || ""}> {articulo.name_color || ""} </option>
          {paletteColor.map(color => (
            <option title={color.hexadecimal} value={color.id} key={color.id}>{color.nombre}</option>
          ))}
        </InputSelect>
        {/* <div className="box-button-add-another">
          <a className="button button-add-another" onClick={createColor} >+</a>
        </div> */}
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  paletteColor: state.appState.colors,
  articulo: state.newProduct
})


export default connect(mapStateToProps)(NewColorProduct)
