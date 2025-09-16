import React from 'react'
import './Basic.css'

export const BasicTypes = () => {

    interface UtilesEscolares {
        name: string;
        precio: number;
        Descipcion: string;
    }

    const Utiles: UtilesEscolares[] = [
        {
            name: "Lapiz",
            precio: 2500,
            Descipcion: "Lapiz mina H2"
        },
        {
            name: "Sacapuntas Metalico",
            precio: 800,
            Descipcion: "Marca Faber Castell "
        },
        {
            name: "Cuaderno",
            precio: 5000,
            Descipcion: "100 Hojas"
        }

    ]
    return (
        <>
            <h2>Utiles Escolares</h2>
            <ul>
                {Utiles.map(
                    (value, index) => <div key={index}>
                        <div>{value.name}</div>
                        <div>{value.precio}</div>
                        <div>{value.Descipcion}</div>

                        <hr />
                    </div>
                )
                }
            </ul>
        </>
    )
}
