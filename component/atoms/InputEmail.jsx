const InputEmail = ({labelText, name, required, validateType}) => (
  <label>{labelText || "Correo"}
    <input type="text"
           name={name || "email"}
           className={
            `${required === false ? "" : "required"} ${validateType && validateType}`
           }
    />
    <span className="msgAlertForm"></span>
  </label>
)

export default InputEmail
