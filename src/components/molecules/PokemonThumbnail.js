import React, { useState } from "react";
import Description from "../atoms/Description";

const PokemonThumbnail = ({
    id,
    name,
    image,
    type,
    height,
    weight,
    bs1,
    bs2,
    bs3,
    bs4,
    bs5,
    bs6
}) => {

    const style = `thumb-container ${type}`;

    const [show, setShow] = useState(false);

    return (

        <div className={style}>
            <small>#0{id}</small>

            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name.toUpperCase()}</h3>
                <small>Tipo: {type}</small>

                <button className="pokeinfo" onClick={() => setShow(!show)}>
                    {show === true ? "Cerrar..." : "Abrir..."}
                </button>

                {show === true ? (
                    <Description
                        weight={weight}
                        height={height}
                        posbs1={bs1}
                        posbs2={bs2}
                        posbs3={bs3}
                        posbs4={bs4}
                        posbs5={bs5}
                        posbs6={bs6} />
                ) : (
                    <></>
                )}
            </div>
        </div>

    );
}

export default PokemonThumbnail;