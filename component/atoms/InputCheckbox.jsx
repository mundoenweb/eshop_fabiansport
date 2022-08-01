
const InputCheckbox = ({id = "", labelText, name, value, referencia, css, fun, required }) => {
  return (
    <label className={`mw-flex label-checkbox ${css && css}`}>
      <input id={id}
             type="checkbox"
             name={name}
             ref={ referencia && referencia }
             onChange={ e => fun && fun(e) }
             className="checkbox"
             value={value && value}
             required={required === false ? required : true}
      />
      <span>{labelText || "favor pase un labelText como props"}</span>
    </label>
  )
}

export default InputCheckbox
