import React from 'react'
import PropTypes from 'prop-types'
import { ClassContacto } from '../../models/ClassContacto'

function ContactoIndividual({ ClassContacto}) {
return (
    <div>
        <h2>
            Nombre: {ClassContacto.nombre}
            Apellido: {ClassContacto.apellido}
        </h2>

        <h3>
            Email: {ClassContacto.email}
        </h3>

        <h4>
            Conectado: {ClassContacto.conectado ? 'Contacto en linea' : 'Contacto No Disponible'}
        </h4>

    </div>
)
}

ContactoIndividual.propTypes = {
    ClassContacto: PropTypes.instanceOf(ClassContacto)
}

export default ContactoIndividual

