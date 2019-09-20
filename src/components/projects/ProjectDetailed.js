import React from 'react'

const ProjectDetailed = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">PROJECT TITLE - {id}</span>
                    <p>kilo</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>posted by the ali mirza</div>
                    <div>2nd sep</div>
                </div>
            </div>
       </div>
    )
}

export default ProjectDetailed
  
