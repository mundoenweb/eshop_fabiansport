import { closeModals } from "../hook/useModal"

const Modal = ({ children, name, typeModal, referencia }) => {
  return (
    <div className="boxBaseModal" ref={referencia}>
      <div className={`boxWindowModal boxShadow box-animate-top ${typeModal}`}>

        <div className="titleWindow">
          <p>{name}</p>
          <div className="closeModal" onClick={e=> closeModals(e)}>×</div>
        </div>

        <div className="BoxContentWindow">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
