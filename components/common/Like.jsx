import { ajax, valideteResponse } from '../../component/hook/Ajax'
import nProgress from 'nprogress'
import { connect } from 'react-redux'
import { addToLike, deletFromLike } from '../../redux/actionCreators'
import axios from 'axios'

const Like = ({ 
  isLogged, token, id_usuario, css = "", codigo, descuento, 
  id, name, cost, image, listLike, addToLikeProduct, deletFromLikeProduct 
}) => {

  const api = process.env.API_NODEJS
  const options = {
    headers: { Authorization: `Bearer ${token}` }
  }

  const addLike = async () => {
    nProgress.start()

    let product = {
      id_producto: id, id_usuario,
      codigo, descuento, name,
      costo: cost, img: image
    }

    if (!isLogged) {
      addToLikeProduct(product)
      nProgress.done()
      return
    }

    axios.post(`${api}/likes`, product, options)
      .then(res => {
        const id = res.data.data.insertId
        product.id = id
        addToLikeProduct(product)
      })
      .catch(err => {
        alert('hubo un error de nuestro lado, favor intenta mas tarde')
        console.log(err)
      })
      .then(() => nProgress.done())
  }

  const removeLike = async () => {
    const product = { codigo }
    const like = listLike.find(p => p.codigo === codigo)
    const idLike = like.id

    nProgress.start()
    if (idLike) {
      axios.delete(`${api}/likes/${idLike}`, options)
      .then(res => {
        console.log(res)
        deletFromLikeProduct(product)
      })
      .catch(err => console.log(err))
      .then(() => nProgress.done())
    } else {
      deletFromLikeProduct(product)
      nProgress.done()
    }
    
  }

  return (
    <>
      {
        listLike.find(p => p.id_producto === id)
          ?
          <img className={css} onClick={() => removeLike()} src={`/images/corazon_relleno.svg`} alt="removeLike" />
          :
          <img className={css} onClick={() => addLike()} src={`/images/corazon_vacio.svg`} alt="addLike" />
      }
    </>
  )
}

const mapStateToProps = state => ({
  listLike: state.likeReducer.products,
  isLogged: state.userReducer.logged,
  id_usuario: state.userReducer.dataUser.id,
  token: state.userReducer.token
})

const mapDispatchToProps = dispatch => ({
  addToLikeProduct(product) {
    dispatch(addToLike(product))
  },
  deletFromLikeProduct(product) {
    dispatch(deletFromLike(product))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Like)
