import React from "react"

const ProjectItem = ({project}) => {
    return (
        <li>
            <a href={project.repoUrl}>{project.title}</a>
        </li>
    )
}


export default ProjectItem