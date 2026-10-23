import Saludo from './Saludo'
import { useState } from 'react'
import Usuario from './Usuario'
function app() {
  const [contador, setContador] = useState(0)
  return (
    <div>
      <h1> Mi primera aplicacion react</h1>
      <Saludo nombre = "" />
      <Usuario nombre = ""
               edad = {25}
               carrera = "Sistemas" />
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Aumentar</button>
    </div>
  )
}
export default app
