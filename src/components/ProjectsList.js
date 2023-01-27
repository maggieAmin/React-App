import React from "react"
import ProjectItem from "./ProjectItem"

const ProjectsList = (projects) => {
    console.log(projects)
    const projectItems = projects.projects.map((project, index) => {
        return <ProjectItem project={project} key={index}/>
    })
    return (
        <>
            <ul>
                {projectItems}
            </ul>
        </>
    )
}


export default ProjectsList