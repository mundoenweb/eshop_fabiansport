const InputSearch = ({ labelText, title, name, search, required, validateType }) => {
  
  return (
    <label>{labelText || "favor pase un labelText como props"}
      <form className="box-search" onSubmit={e => search(e)}>
        <input id={name}
          type="text"
          name={name}
          title={title && title}
          className={
            `${required === false ? "" : "required"} ${validateType && validateType}`
          }
        />
        <button className="btn-input-search">
          <img src={`${process.env.STATIC_PUBLIC}images/lupa.svg`} alt="search" />
        </button>

      </form>
      <span className="msgAlertForm"></span>

    </label>
  )
}

export default InputSearch
