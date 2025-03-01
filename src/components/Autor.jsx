import AutorImg from "/images/autor.jpg"

import { TagList } from "./TagList"


// eslint-disable-next-line react/prop-types
export const Autor = ({name, description})=>{
    return (
        <section>
            <img src={AutorImg} alt="Imagen del autor" />
            <div>
                <h5>{name}</h5>
                <p>{description}</p>
                <TagList tags={["X","Y","Z"]}/>
            </div>
        </section>
    )
}