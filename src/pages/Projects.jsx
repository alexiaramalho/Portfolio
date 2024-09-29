import CardContainer from "../src/Components/CardContainer";
import ProjectsCards from "../src/Components/ProjectsCards";
import ProjectsData from "../src/data/ProjectsData.json"

function Projects() {
    return ( 
        <>
            <h1> Meus projetos</h1>
            <CardContainer>
            {ProjectsData
             .map(ProjectsData => (<ProjectsCards key={ProjectsData.id} {...ProjectsData}/>))
            }
            </CardContainer>
        </>
     );
}

export default Projects;