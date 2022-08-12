import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'


const PasarelaDePago = ({ cart, user, token }) => {
  // const router = useRouter()

  const [dataMercadopago, setDataMercadopago] = useState()
  const options = {
    headers: { Authorization: `Bearer ${token}` }
  }


  useEffect(() => {
    const api = `${process.env.API_NODEJS}/mercadopago`
    const items = []

    const contenedor = document.getElementsByClassName("mercadopago")[0]
    contenedor.innerText = ''

    for (const product of cart.products) {
      items.push({
        id: product.id,
        title: product.name,
        quantity: product.quantity,
        unit_price: product.costo,
        category_id: "Producto",
        currency_id: "PEN"
      })
    }


    let order = {
      items,
      payer: {
        email: user.email,
      },
      back_urls: {
        "success": "http://localhost:3334/compra/procesando_compra",
        "pending": "http://localhost:3334/compra/procesando_compra",
        "failure": "http://localhost:3334/compra/pago_rechazado",
      }
    }

    axios.post(api, order, options)
      .then(res => {
        const preferencId = res.data
        console.log(preferencId)

        const publiKey = {
          test: 'TEST-69de1a75-128c-4fff-9df9-2450083be6ae',
          production: 'APP_USR-85280c49-8566-4a39-a1ff-579e47c7a2b8'
        }

        const mp = new MercadoPago(publiKey.production, {
          locale: "es-PE",
        });



        mp.checkout({
          preference: {
            id: preferencId,
          },
          render: {
            container: ".mercadopago", // Indica el nombre de la clase donde se mostrará el botón de pago
            label: "REALIZAR PAGO"
          },
        });

        let boton = document.getElementsByClassName("mercadopago-button")
        boton[0].className = "button"
      })
      .catch(err => {
        const contenedor = document.getElementsByClassName("mercadopago")[0]
        contenedor.innerText = ''
        console.log(err)
      })

  }, [cart])

  return <div className="mercadopago"></div>

}

const mapStateToProps = state => ({
  cart: state.carritoReducer,
  user: state.userReducer.dataUser,
  token: state.userReducer.token
})

export default connect(mapStateToProps)(PasarelaDePago)
