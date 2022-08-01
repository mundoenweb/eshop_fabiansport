export const saveState = (state) => {
  try {
    let serializedData = JSON.stringify(state)
    localStorage.setItem('state', serializedData)
  } catch (error) {
    console.log("error al guardar el estado en localStorage")
    console.log(error)   
  }
}

export const loadState = () => {
  const serializedData = localStorage.getItem('state')
  if (serializedData === null) return undefined 
  return JSON.parse(serializedData) 
}

