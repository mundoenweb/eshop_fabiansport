import { useRouter } from "next/router"


// props: indexColor solo se usa para el formulario de nuevo producto para identificar el color al que pertenecd
const InputSelect = ({ referencia, labelText, title, name, id, children, onchange, required, rferencia }) => {
  const router = useRouter()
  return (
    <>
      <label className="mw-flex-column">
        {labelText || "Selecciona una opción"}
        {
          <select name={name}
            id={id || ""}
            title={title}
            ref={referencia}
            onChange={e => onchange && onchange(e, router)}
            className={required === false ? "" : "required"}
          >
            {children}
          </select>}
        <span className="msgAlertForm"></span>
      </label>
    </>
  )
}
export default InputSelect
