import Saludo from './Saludo'
import { useState } from 'react'
import Usuario from './Usuario'
import Formulario from './Formulario'
function app() {
  const [contador, setContador] = useState(0)
  return (
    <div>
      <h1> Mi primera aplicacion react</h1>
      <Formulario />
    </div>
  )
}
export default app