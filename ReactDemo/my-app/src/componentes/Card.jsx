import React from 'react';
import '../estilos/card.css';
import cerdito from '../imagenes/cerdito.jpg';
import hipopotamo from '../imagenes/hipopotamo.jpg';
import pulpo from '../imagenes/pulpo.jpg';


const imagenes = {
    cerdito, hipopotamo, pulpo
}

function Card(props){
    return (
        <div className='contenido-card'>
            <img
                className='imagen-card'
                src={imagenes[props.imagen]}
                alt='Foto de ${props.nombre}'
            />
            <div className='contenedor-texto-card'>
                <p className='nombre-card'>
                    <strong>{props.nombre}</strong>
                </p>
                <p className='pais-card'>
                    {props.pais}
                </p>
                <p className='texto-card'>
                    {props.contenido}
                </p>
            </div>
        </div>
    );
}

export default Card;