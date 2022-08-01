import { useEffect } from "react"

const InputTextTarea = ({ labelText, name, title, cssLabel, value, required, onblur }) => {
  useEffect(()=>{
    if (value) document.getElementById(name).value = value || ""
  }, [value])

  return (
    <label className={cssLabel}>{labelText || "favor pase un labelText como props"}
      <textarea onBlur={ e => onblur && onblur(e)} 
                id={name}
                type="text"
                name={name}
                title={title}
                className={required === false ? "" : "required"}
      />
      <span className="msgAlertForm"></span>
    </label>
  )
}

export default InputTextTarea
