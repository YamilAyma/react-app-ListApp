/* eslint-disable react/prop-types */
import BannerImg from '/images/banner-img.jpg'


import { TagList } from "./TagList"

export const InfoAppList = ({title, description, autorName})=>{
    return (
        <div id='infoAppList'>
            <img src={BannerImg} alt="Banner de la App List" />
            <h2>{title}</h2>
            <h3>{autorName}</h3>
            <h4>{description}</h4>
            <TagList tags={["A", "B", "C"]}/>
        </div>
    )
}
