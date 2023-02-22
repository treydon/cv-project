import React from 'react';

function Experience (props) {
    return (
        <div>
            <h2>Experience</h2>
            {props.experience.map(obj => <div key={obj.id}><p><b>{obj.company}</b> - {obj.position}: {obj.start}-{obj.end}</p>{'\n'}{obj.description}</div>)}
        </div>
    )
}

export default Experience;