import {
  INITIAL_STATE,
  ADD_TASA,
  GET_PRODUCT,
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
  CREATE_PRODUCT_CHILD,
  RESET_OBJECT_NEW_PRODUCT,
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
  CREATE_SIZE,
  UPDATE_SIZE,
  UPDATE_QUIANTITY,
  DELETE_SIZE,
  UPLOAD_IMAGE_PRODUCT,
  DELETE_IMAGE_PRODUCT,
  CREATE_PALETTE_COLOR,
  UPDATE_LINEA,
  UPDATE_PRODUCT
} from "./actions";

const API_URL = process.env.REACT_APP_API_URL

// creacion y actualizacion de productos

export const createPaletteColor = colors => ({
  type: CREATE_PALETTE_COLOR,
  colors
})
export const resetObjectNewProduct = reset => ({
  type: RESET_OBJECT_NEW_PRODUCT,
  reset
})
export const createProductChild = product => ({
  type: CREATE_PRODUCT_CHILD,
  product
})
export const updateProduct = articulo => ({
  type: UPDATE_PRODUCT,
  articulo
})
export const updateCode = codigo => ({
  type: UPDATE_CODE,
  codigo
})
export const updateCodeDad = codigo => ({
  type: UPDATE_CODE_DAD,
  codigo
})
export const updateName = name => ({
  type: UPDATE_NAME,
  name
})
export const updateCost = cost => ({
  type: UPDATE_COST,
  cost
})
export const updateDescount = descount => ({
  type: UPDATE_DESCOUNT,
  descount
})
export const updateSex = sex => ({
  type: UPDATE_SEX,
  sex
})
export const updateLinea = linea => ({
  type: UPDATE_LINEA,
  linea
})
export const updateCategory = category => ({
  type: UPDATE_CATEGORY,
  category
})
export const updateBrand = brand => ({
  type: UPDATE_BRAND,
  brand
})
export const updateFeatures = features => ({
  type: UPDATE_FEATURES,
  features
})
export const updateDescription = description => ({
  type: UPDATE_DESCRIPTION,
  description
})
export const changeColor = color => ({
  type: UPDATE_COLOR,
  color
})
export const updateSize = sizes => ({
  type: UPDATE_SIZE,
  sizes
})
export const updateQuantity = quantity => ({
  type: UPDATE_QUIANTITY,
  quantity
})
export const createSize = newSize => ({
  type: CREATE_SIZE,
  newSize
})
export const deleteSize = indexSeze => ({
  type: DELETE_SIZE,
  indexSeze
})
export const uploadImageProduct = images => ({
  type: UPLOAD_IMAGE_PRODUCT,
  images
})
export const deleteImageProduct = indexImage => ({
  type: DELETE_IMAGE_PRODUCT,
  indexImage
})

// END

export const reloadStateFromLocalStorage = stateInitial => {
  return ({
    type: INITIAL_STATE,
    stateInitial
  })
}
export const addTasa = tasa => ({
  type: ADD_TASA,
  tasa
})
export const isPhone = value => ({
  type: IS_PHONE,
  value
})
export const startSesion = dataUser => ({
  type: START_SESION_EMAIL,
  dataUser
})
export const updateAvatar = avatar => ({
  type: ADD_AVATAR,
  avatar
})
export const endSesion = close => ({
  type: CLOSE_SESION,
  close
})
export const updateProfileUser = dataUser => ({
  type: UPDATE_PROFILE_USER,
  dataUser: dataUser
})

export const updateDeliveryData = data => ({
  type: UPDATE_DELIVERY_DATA,
  data
})

export const updateInvoiceDetailData = data => ({
  type: UPDATE_INVOICE_DETAIL_DATA,
  data
})
export const addToCart = data => {
  return ({
    type: GET_PRODUCT,
    product: data
  })
}
export const removeFromCart = data => {
  return ({
    type: REMOVE_PRODUCT_FROM_CART,
    product: data
  })
}
export const resetCart = cart => {
  return ({
    type: RESET_CARRITO,
    cart
  })
}
export const deleteProductFromCart = idDelete => {
  return ({
    type: DELET_PRODUCT_FROM_CART,
    idDelete
  })
}
export const cartChangeQuantity = params => {
  return ({
    type: CHANGE_QUANTIITY_CART_RPDUCT,
    params
  })
}
export const addToLike = product => ({
  type: GET_LIKE_PRODUCT,
  product
})
export const deletFromLike = product => ({
  type: REMOVE_LIKE_PRODUCT,
  product
})
export const userDataInvoice = data => ({
  type: CREATE_DATA_USER_INVOICE,
  data
})
export const addDataPay = pay => ({
  type: ADD_DATA_PAY,
  pay
})













// export const getAllSpecialities = () => dispatch => {
//   Axios.get(`${API_URL}/especialidades`)
//   .then(resp => {
//       return dispatch({
//         type: GET_ALL_SPECIALITIES,
//         specialities: resp.data
//       })
//     }
//   )
// }

// export const getAllCourses = () => dispatch => {
//   Axios.get(`${API_URL}/cursos`)
//   .then(resp => {
//       return dispatch({
//         type: GET_ALL_COURSES,
//         courses: resp.data
//       })
//     }
//   )
// }

// export const getAllTeachers = () => dispatch => {
//   Axios.get(`${API_URL}/profesores`)
//   .then(resp => {
//       return dispatch({
//         type: GET_ALL_TEACHERS,
//         teachers: resp.data
//       })
//     }
//   )
// }

// export const getPost = id => dispatch => {
//   Axios.get(`${API_URL}/posts/${id}`)
//   .then(resp => {
//       return dispatch({
//         type: GET_POST,
//         post: resp.data
//       })
//     }
//   )
// }

// export const getSpeciality = id => dispatch => {
//   Axios.get(`${API_URL}/especialidad/${id}`)
//   .then(resp => {
//       return dispatch({
//         type: GET_SPECIALITY,
//         speciality: resp.data
//       })
//     }
//   )
// }

// export const getCourse = id => dispatch => {
//   Axios.get(`${API_URL}/curso/${id}`)
//   .then(resp => {
//       return dispatch({
//         type: GET_COURSE,
//         course: resp.data
//       })
//     }
//   )
// }

// export const getFragment = id => dispatch => {
//   Axios.get(`${API_URL}/clase/${id}`)
//   .then(resp => {
//       return dispatch({
//         type: GET_FRAGMENT,
//         fragment: resp.data
//       })
//     }
//   )
// }
