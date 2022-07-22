import React from 'react'
import { ClassContacto }  from '../../models/ClassContacto'
import ContactoIndividual from '../pure/ContactoIndividual'

function ContactoLista() {

    const datosContacto = new ClassContacto ("sergio","Soria","sergiooptica16@gmail.com",false)

    return (
    <div>
        <h1>
            Contacto:
        </h1>
        <ContactoIndividual ClassContacto={datosContacto} />


    </div>
    )
}

// ContactoLista.propTypes = {
//     nombre: PropTypes.string,
//     Apellido: PropTypes.string,
//     Email: PropTypes.string,
//     Conectado: PropTypes.bool
// }

export default ContactoLista

