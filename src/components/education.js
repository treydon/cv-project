import React from 'react'

function Education (props) {
    return (
        <div>
            <h2>Education</h2>
            {props.education.map(obj => <p key={obj.id}><b>{obj.school}</b> - {obj.degree} - {obj.year}</p>)}
        </div>
    )
}

export default Education;