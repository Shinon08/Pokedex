import React from "react";

const Description = ({
    name,
    height,
    weight,
    posbs1,
    posbs2,
    posbs3,
    posbs4,
    posbs5,
    posbs6
}) => {

    return (
        <div className="desc">
            <p><b>Altura</b>: <b>{height * 10}</b> cm</p>
            <p><b>Peso</b>: <b>{weight * 0.1}</b> kg</p>

            <h3>Stats</h3>

            <p><b>HP : {posbs1}</b></p>
            <p><b>Ataque : {posbs2}</b></p>
            <p><b>Defensa : {posbs3}</b></p>
            <p><b>Ataque Especial : {posbs4}</b></p>
            <p><b>Defensa Especial : {posbs5}</b></p>
            <p><b>Velocidad : {posbs6}</b></p>
        </div>
    );

}

export default Description;