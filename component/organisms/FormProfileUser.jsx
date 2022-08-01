import { createRef } from "react"
import { useRouter } from 'next/router'
import { useUpdateProfileUser } from "../hook/useUpdateProfileUser"
import { connect } from "react-redux"
import FormDateUser from "../molecules/FormDateUser"

const ProfileUser = createRef()

const FormProfileUser = ({
  user,
  token,
  dataDelivery,
  dataInvoice
}) => {
  const router = useRouter()

  return (
    <form ref={ProfileUser}
      onSubmit={e => useUpdateProfileUser(e, router, user, token, dataDelivery, dataInvoice, ProfileUser.current,)}
    >
      <FormDateUser form={ProfileUser} />
    </form>
  )
}
const mapStateToProps = state => ({
  user: state.userReducer.dataUser,
  dataDelivery: state.userReducer.deliveryData,
  dataInvoice: state.userReducer.invoiceDetailData,
  token: state.userReducer.token
})

export default connect(mapStateToProps)(FormProfileUser)
