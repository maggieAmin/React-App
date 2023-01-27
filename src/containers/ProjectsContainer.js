import { useState } from "react"
import { useEffect } from "react"
import ProjectsList from "../components/ProjectsList"

const ProjectsContainer = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/maggieAmin/repos', {
            method: "GET",
            headers: {
                Authorization: `Bearer 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` 
            }})
        .then(res => res.json())
        .then(res => res.map(repo => ({
            title: repo.name, repoUrl : repo.html_url
        })))
        .then(projects => {
            setProjects(projects)
        })
    }, [])



    return (
        <>
            <ProjectsList projects={projects}/>
        </>
    )
}

export default ProjectsContainer