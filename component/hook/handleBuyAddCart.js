import { addToCart } from "../../redux/actionCreators"
import store from "../../redux/store"

export const handleBuyAndAddtoCart = (e, form, cart,
    { id, name, image, id_color, name_color, filtro, costo, codigo, descuento, sizes }) => {

    e.preventDefault()
    form = form.current

    if (cart.find(p => p.id === id) && cart.find(p => p.size.id === form[0].value)) return

    const product = {
        id,
        idDelete: Math.floor(Math.random() * 1000000000),
        code: codigo,
        name: name,
        image: image[0],
        color: {
            id: id_color,
            name: name_color,
        },
        size: {
            id: form[0].value,
            name: form[0].options[form[0].selectedIndex].text,
        },
        quantity: 1,
        sex: filtro.sex.name,
        linea: filtro.linea.name,
        categoria: filtro.categoria.name,
        marca: filtro.marca.name,
        costo: (costo - descuento)
    }

    store.dispatch(addToCart(product))
}
