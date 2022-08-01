import FormProfileUser from "../../../component/organisms/FormProfileUser"
import { connect } from "react-redux"
import Private from "component/atoms/Private"

const Profile = ({ isLogged }) => {

  if (!isLogged) return <Private />

  return (
    <>
      <section className="mw-grid section-profile">
        <FormProfileUser />
      </section>
      <div className="mw-grid separador"></div>
    </>
  )
}

const mapStateToProps = state => ({
  isLogged: state.userReducer.logged
})

export default connect(mapStateToProps)(Profile)
