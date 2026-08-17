import {useState} from 'react'
function Formulario() {
    const [nombre, setNombre] = useState('')
    
    return (
        <div>
            <h2>Formulario</h2>
            <input
                type="text"
                value={nombre}
                onChange={(evento => setNombre(evento.target.value))}
                placeholder="Escribe tu nombre"/>
            <p>Hola, {nombre}</p>
        </div>
    )
}
export default Formulario