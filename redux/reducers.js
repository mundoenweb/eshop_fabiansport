import { stateCart, stateUser, stateLike, stateApp, stateProductNew } from './stateInitial'
import {
  GET_PRODUCT,
  ADD_TASA,
  REMOVE_PRODUCT_FROM_CART,
  CHANGE_QUANTIITY_CART_RPDUCT,
  DELET_PRODUCT_FROM_CART,
  START_SESION_EMAIL,
  GET_LIKE_PRODUCT,
  REMOVE_LIKE_PRODUCT,
  UPDATE_PROFILE_USER,
  UPDATE_DELIVERY_DATA,
  UPDATE_INVOICE_DETAIL_DATA,
  CLOSE_SESION,
  IS_PHONE,
  CREATE_DATA_USER_INVOICE,
  RESET_CARRITO,
  ADD_DATA_PAY,
  ADD_AVATAR,
  RESET_OBJECT_NEW_PRODUCT,
  CREATE_PRODUCT_CHILD,
  UPDATE_CODE,
  UPDATE_CODE_DAD,
  UPDATE_NAME,
  UPDATE_COST,
  UPDATE_DESCOUNT,
  UPDATE_SEX,
  UPDATE_CATEGORY,
  UPDATE_BRAND,
  UPDATE_FEATURES,
  UPDATE_DESCRIPTION,
  UPDATE_COLOR,
  UPDATE_SIZE,
  UPDATE_QUIANTITY,
  CREATE_SIZE,
  DELETE_SIZE,
  UPLOAD_IMAGE_PRODUCT,
  DELETE_IMAGE_PRODUCT,
  CREATE_PALETTE_COLOR,
  UPDATE_LINEA,
  UPDATE_PRODUCT
  // GET_ALL_POSTS, GET_POST, GET_ALL_SPECIALITIES, GET_SPECIALITY, GET_ALL_COURSES, GET_COURSE, GET_ALL_TEACHERS, GET_FRAGMENT
} from "./actions";


export const appState = (state = stateApp, action) => {
  switch (action.type) {
    case IS_PHONE:
      return {
        ...state,
        isPhone: action.value
      }
    case ADD_TASA:
      return {
        ...state,
        tasa: action.tasa
      }
    case CREATE_PALETTE_COLOR:
      return {
        ...state,
        colors: action.colors
      }
    default:
      return state
  }
}
export const userReducer = (state = stateUser, action) => {
  switch (action.type) {
    case START_SESION_EMAIL:
      return {
        ...state,
        logged: true,
        type: action.dataUser.type,
        dataUser: action.dataUser.user,
        token: action.dataUser.token
      }
    case UPDATE_PROFILE_USER:
      return {
        ...state,
        dataUser: action.dataUser,
      }
    case UPDATE_DELIVERY_DATA:
      return {
        ...state,
        deliveryData: action.data,
      }
    case UPDATE_INVOICE_DETAIL_DATA:
      return {
        ...state,
        invoiceDetailData: action.data,
      }
    case ADD_AVATAR:
      return {
        ...state,
        dataUser: {
          ...state.dataUser,
          avatar: action.avatar
        }
      }
    case CLOSE_SESION:
      return stateUser
    default:
      return state
  }
}
export const carritoReducer = (state = stateCart, { type, cart, product, params, idDelete, data, pay }) => {
  let costRemove = 0
  switch (type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: state.products.concat(product),
        costSub: state.costSub += (product.quantity * product.costo),
        costTotal: state.costSub + state.costSend
      }
    case REMOVE_PRODUCT_FROM_CART:
      for (const article of state.products) {
        if (article.id === product.id) costRemove += (article.quantity * article.costo)
      }
      return {
        ...state,
        products: state.products.filter(p => p.id !== product.id),
        costSub: state.costSub -= costRemove,
        costTotal: state.costSub + state.costSend
      }
    case DELET_PRODUCT_FROM_CART:
      for (const article of state.products) {
        if (article.idDelete === idDelete.id) costRemove = (article.quantity * article.costo)
      }
      return {
        ...state,
        products: state.products.filter(p => p.idDelete !== idDelete.id),
        costSub: state.costSub -= costRemove,
        costTotal: state.costSub + state.costSend
      }
    case CHANGE_QUANTIITY_CART_RPDUCT:
      let cost = 0
      for (const article of state.products) {
        if (article.idDelete === params.id) article.quantity = parseInt(params.quantity, 10)
        cost += (article.quantity * article.costo)
      }
      return {
        ...state,
        costSub: cost,
        costTotal: cost + state.costSend
      }
    case CREATE_DATA_USER_INVOICE:
      return {
        ...state,
        user: data
      }
    case ADD_DATA_PAY:
      return {
        ...state,
        pay
      }
    case RESET_CARRITO:
      return stateCart
    default:
      return state
  }
}
export const likeReducer = (state = stateLike, { type, product }) => {
  switch (type) {
    case GET_LIKE_PRODUCT:
      if (state.products.find(p => p.codigo === product.codigo)) return state
      return {
        ...state,
        products: state.products.concat(product)
      }
    case REMOVE_LIKE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(p => p.codigo != product.codigo)
      }
    default:
      return state
  }
}
export const newProduct = (state = stateProductNew, { type, product, codigo, color,
  sizes, quantity, newSize, indexSeze, images, indexImage, reset, name, cost, sex,
  category, linea, brand, descount, features, description, articulo
}) => {
  switch (type) {
    case RESET_OBJECT_NEW_PRODUCT:
      return reset
    case UPDATE_PRODUCT:
      return {
        id: articulo.id,
        codigo: articulo.codigo,
        name: articulo.name,
        descuento: articulo.descuento,
        costo: articulo.costo,
        descripcion: articulo.descripcion,
        caracteristicas: articulo.caracteristicas,
        es_padre: articulo.es_padre,
        mi_padre: articulo.mi_padre,
        id_color: articulo.id_color,
        name_color: articulo.name_color,
        sizes: articulo.sizes,
        img: articulo.image,
        filtro: articulo.filtro
      }
    case CREATE_PRODUCT_CHILD:
      return {
        ...state,
        idDad: product.id,
        name: product.name,
        descuento: product.descuento,
        costo: product.costo,
        descripcion: product.descripcion,
        caracteristicas: product.caracteristicas,
        es_padre: false,
        mi_padre: product.mi_padre,
        imgDad: product.image[0],
        filtro: product.filtro
      }
    case UPDATE_CODE:
      return {
        ...state,
        codigo
      }
    case UPDATE_CODE_DAD:
      return {
        ...state,
        mi_padre: codigo
      }
    case UPDATE_NAME:
      return {
        ...state,
        name,
      }
    case UPDATE_COST:
      return {
        ...state,
        costo: parseInt(cost),
      }
    case UPDATE_DESCOUNT:
      return {
        ...state,
        descuento: parseInt(descount),
      }
    case UPDATE_SEX:
      return {
        ...state,
        filtro: {
          ...state.filtro,
          sex: {
            id: sex.id,
            name: sex.name
          }
        }
      }
    case UPDATE_LINEA:
      return {
        ...state,
        filtro: {
          ...state.filtro,
          linea: {
            id: linea.id,
            name: linea.name
          }
        }
      }
    case UPDATE_CATEGORY:
      return {
        ...state,
        filtro: {
          ...state.filtro,
          categoria: {
            id: category.id,
            name: category.name
          }
        }
      }
    case UPDATE_BRAND:
      return {
        ...state,
        filtro: {
          ...state.filtro,
          marca: {
            id: brand.id,
            name: brand.name
          }
        }
      }
    case UPDATE_FEATURES:
      return {
        ...state,
        caracteristicas: features
      }
    case UPDATE_DESCRIPTION:
      return {
        ...state,
        descripcion: description
      }
    case UPDATE_COLOR:
      return {
        ...state,
        id_color: color.id_color,
        name_color: color.name_color,
        hexadecimal: color.hexadecimal
      }
    case UPDATE_SIZE:
      return {
        ...state,
        sizes: state.sizes.map((size, i) => {
          if (i === sizes.indexSeze) {
            return ({
              ...size,
              name: sizes.name
            })
          }
          return size
        })
      }
    case UPDATE_QUIANTITY:
      return {
        ...state,
        sizes: state.sizes.map((size, i) => {
          if (i === quantity.indexSeze) {
            return ({
              ...size,
              quantity: quantity.quantity
            })
          }
          return size
        })
      }
    case CREATE_SIZE:
      return {
        ...state,
        sizes: state.sizes.concat(newSize)
      }
    case DELETE_SIZE:
      return {
        ...state,
        sizes: state.sizes.filter((s, index) => index !== indexSeze)
      }
    case UPLOAD_IMAGE_PRODUCT:
      return {
        ...state,
        img: state.img.concat(images)
      }
    case DELETE_IMAGE_PRODUCT:
      return {
        ...state,
        img: state.img.filter((file, i) => i !== indexImage)
      }
    default:
      return state
  }
}
