
const AlertSpan = ({referencia, color, center, none}) => {

  return (
    <span ref={referencia} 
          className={`${none} alert alert-${color} ${center}`}
    >
    </span>
  )
}

export default AlertSpan
