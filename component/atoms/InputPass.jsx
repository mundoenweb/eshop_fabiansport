const InputPass = ({referencia, labelText, name, required, validateType}) => {
  
  const pass = (input) => {
    if (input.current.type === "password") input.current.type = "text"
    else input.current.type = "password"
  }

  return (
    <label className="label-pass"> {labelText || "Contraseña"}
      <input type="password"
             name={name || "password"} 
             ref={referencia}
             className={
              `${required === false ? "" : "required"} ${validateType && validateType}`
            }
             autoComplete="on"
      />
      <span className="msgAlertForm"></span>
      <img className="ojo-pass"
        src={`${process.env.STATIC_PUBLIC}images/ojo.svg`}
        alt="ver contraseña"
        onClick={()=> pass(referencia)}
      />
    </label>
  )
}

export default InputPass
