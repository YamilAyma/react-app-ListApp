/* eslint-disable react/prop-types */
export const TagList = ({tags})=>{
    const tagsList = tags.forEach(tag => 
        <li>{tag}</li>
    );

    return (<ol>
        {tagsList}
    </ol>)
}