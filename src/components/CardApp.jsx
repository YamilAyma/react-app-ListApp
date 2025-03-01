/* eslint-disable react/prop-types */


export const CardApp = ({name, description, img, link})=>{
    return (
        <a className="cardApp" href={link} target="_blank">
            <img src={img} alt="Logo de la app/web" />
            <div>
                <p className="cardApp-name">{name}</p>
                <p className="cardApp-description">{description}</p>
            </div>
        </a>
    )
}