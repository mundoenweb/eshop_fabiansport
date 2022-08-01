import SessionFacebook from 'component/atoms/SessionFacebook'
import SessionGoogle from '../atoms/SessionGoogle'

const EasySession = () => (
  <>
    <span>Inicia sesion de forma rapida</span>
    <div className="box-easy-sesion">
      <SessionGoogle />
      {/* <SessionFacebook /> */}
    </div>
  </>
)

export default EasySession
