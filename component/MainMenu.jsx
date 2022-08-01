import { connect } from "react-redux"
import NavDefault from './organisms/NavDefault'

const MainMenu = ({ typeUser, logged, name, avatar }) => {
  return (
    <header className="header-first">
      <NavDefault typeUser={typeUser} logged={logged} name={name} avatar={avatar}  />
    </header>
  )
}

const mapStateToProps = state => ({
  typeUser: state.userReducer.dataUser.role,
  logged: state.userReducer.logged,
  name: state.userReducer.dataUser.name,
  avatar: state.userReducer.dataUser.avatar,
})

export default connect(mapStateToProps, {})(MainMenu)
