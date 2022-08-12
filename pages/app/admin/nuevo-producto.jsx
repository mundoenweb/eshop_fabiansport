import { ajax, valideteResponse } from "component/hook/Ajax"
import FirstContentBoarad from "component/molecules/ContentBoaradProductNew"
import CardProductBoard from "component/organisms/CardProductBoard"
import { useRouter } from "next/router"
import nProgress from "nprogress"
import { useEffect } from "react"
import { connect } from "react-redux"
import { createProductChild, resetObjectNewProduct } from "redux/actionCreators"
import { stateProductNew } from "redux/stateInitial"
import BarOptions from "component/molecules/BarOptions"
import Private from "component/atoms/Private"

const NewProductOne = ({ isLogged, typeUser, loadProduct, productDad, resetProduct }) => {

  const route = useRouter()

  useEffect(() => {
    if (productDad.name) resetProduct(stateProductNew)
}, [productDad.name, resetProduct])

  if (!isLogged || typeUser != 1) return <Private />
  
    const submitForm = e => {
        e.preventDefault()
        if (e.target.type_new_product.value === "new") route.push('nuevo-producto-padre')
        else route.push('nuevo-producto-hijo')
    }

    const selectRadioNewChild = async (e) => {
        const input = e.target
        let code
        console.log(input)
        do {
            code = prompt("Favor ingrese el codigo del producto principal")
            if (code) code.toUpperCase()
        } while (code === "");
        if (!code) return input.checked = false

        nProgress.start()
        const infoProduct = await ajax(`${process.env.API}/productoDetalle/${code}`)
        
        if (!valideteResponse(infoProduct)) {
            nProgress.done()
            selectRadioNewChild(e)
            return 
        } else if (!infoProduct.data.es_padre) {
            alert("favor ingrese un codigo de producto base y NO el de un modelo")
            selectRadioNewChild(e)
            nProgress.done()
            return
        }

        loadProduct(infoProduct.data)
        nProgress.done()
        input.value = code

    }

    const selectRadioNew = (e) => {
        const input = e.target
        resetProduct(stateProductNew)
    }

    

    return (
        <div className="mw-grid">
            <BarOptions />
            <section id="topPag" className="mw-grid board">
                <form className="form-type-product" onSubmit={e => submitForm(e)} >
                    <h2>Tipo de producto</h2>
                    <label htmlFor="" className="label-checkbox" >
                        <input className="input-radio"
                            type="radio"
                            name="type_new_product"
                            id=""
                            required
                            value="new"
                            onChange={e => selectRadioNew(e)}
                        />
                        Nuevo Producto Principal
                    </label>

                    <label htmlFor="" className="label-checkbox" >
                        <input className="input-radio"
                            type="radio"
                            name="type_new_product"
                            required
                            onChange={e => selectRadioNewChild(e)}
                        />
                        Nuevo Producto Hijo
                    </label>

                    {
                        productDad.idDad &&
                        <CardProductBoard image={productDad.imgDad}>
                            <FirstContentBoarad
                                code={productDad.mi_padre}
                                name={productDad.name}
                            />
                            <i></i>
                        </CardProductBoard>
                    }

                    <button className="button">SIGUIENTE</button>
                </form>
                <div className="mw-grid separador"></div>
            </section>
        </div>
    )
}

const mapStateToProps = state => ({
    isLogged: state.userReducer.logged,
    typeUser: state.userReducer.dataUser.role,
    productDad: state.newProduct
})

const mapDispatchToProps = dispatch => ({
    loadProduct(product) {
        dispatch(createProductChild(product))
    },
    resetProduct(product) {
        dispatch(resetObjectNewProduct(product))
    },
    
})

export default connect(mapStateToProps, mapDispatchToProps)(NewProductOne)

