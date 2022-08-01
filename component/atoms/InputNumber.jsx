import { useEffect } from "react"

const InputNumber = ({ labelText, title, name, value, required, onblur, validateType, step, readOn }) => {

  useEffect(()=>{
    if (value) document.getElementById(name).value = value || ""
  }, [value])

  useEffect(() => {
    if (readOn) document.getElementById(name).readOnly = true
  }, [])

  return (
    <label>{labelText || "favor pase un labelText como props"}
      <input onBlur={e=> onblur && onblur(e)}
             id={name}
             type="number"
             name={name}
             step={step || "1"}
             title={title}
             className={
              `${required === false ? "" : "required"} ${validateType ? validateType : ""}`
            }
      />
      <span className="msgAlertForm"></span>
    </label>
  )
}

export default InputNumber
