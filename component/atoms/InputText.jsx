import { useEffect } from "react"

const InputText = ({ labelText, title, name, value, onblur, required, validateType, readOn, upperCase}) => {
  useEffect(() => {
    if (value) document.getElementById(name).value = value || ""
  }, [value])

  useEffect(() => {
    if (readOn) document.getElementById(name).readOnly = false
  }, [])

  return (
    <label>{labelText || "favor pase un labelText como props"}
      <input onBlur={ e => {
        upperCase === true && (e.target.value = e.target.value.toUpperCase())
        onblur && onblur(e)
      } }
             id={name}
             type="text"
             name={name}
             title={title}
             className={
               `${required === false ? "" : "required"} ${validateType && validateType}`
             }
      />
      <span className="msgAlertForm"></span>
      
    </label>
  )
}

export default InputText
