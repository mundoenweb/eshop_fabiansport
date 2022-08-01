import { addTasa } from 'redux/actionCreators'
import store from 'redux/store'
import {ajax} from './Ajax'

export const useRequestTasa = async () => {
  const response = await ajax(`${process.env.API}/consultarTasa`)
  store.dispatch(addTasa(response.data.tasa))
}
