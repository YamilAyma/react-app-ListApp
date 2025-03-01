/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { CardApp } from "./CardApp"



export const CardAppsList = ({objListApps})=>{
    const listApps = objListApps.map(
        objApp => 
        <CardApp id={objApp} name={objApp.name} description={objApp.description} link={objApp.link} img={objApp.img}/>
    )
    return (
        <ol id="cardAppsList">
            {listApps}
        </ol>
    )
}